import { useMutation } from "react-query";

export default function useConvert() {
  const mutation = useMutation(
    "convert",
    async ({ key, format }: { key: string; format: string }) => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;

      const url = `${baseUrl}/convert/${key}?format=${format}`;
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
