import type { Crop } from "react-image-crop";
import { useMutation } from "react-query";

export default function useCrop() {
  const mutation = useMutation(
    "crop",
    async ({
      key,
      crop,
      naturalWidth,
      naturalHeight,
    }: {
      key: string;
      crop: Crop;
      naturalWidth: number;
      naturalHeight: number;
    }) => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const { top, left, width, height } = scaleCrop(
        crop,
        naturalWidth,
        naturalHeight
      );
      const url = `${baseUrl}/crop/${key}?top=${top}&left=${left}&width=${width}&height=${height}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(key)}`,
        },
      });
      return response.json();
    },
    {
      onSuccess: (data) => {
        console.log(data);
        window.open(data.url, "_blank");
      },
    }
  );

  return mutation;
}

function scaleCrop(crop: Crop, naturalWidth: number, naturalHeight: number) {
  return {
    top: ((crop.y / 100) * naturalHeight),
    left: ((crop.x / 100) * naturalWidth),
    width: ((crop.width / 100) * naturalWidth),
    height: ((crop.height / 100) * naturalHeight),
  };
}
