import { useMutation } from "react-query";

export default function useCompress() {
  const mutation = useMutation(
    "compress",
    async ({
      key,
      quality,
      format,
    }: {
      key: string;
      quality: number;
      format: string;
    }) => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;

      const url = `${baseUrl}/compress/${key}?quality=${quality}&format=${format}`;
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
      onSuccess: (data: { url: string }) => {
        console.log(data);
        window.open(data.url, "_blank");
      },
    }
  );

  return mutation;
}
