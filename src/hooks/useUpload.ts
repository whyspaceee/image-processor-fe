import { useMutation } from "react-query";
import { redirect, useNavigate } from "react-router-dom";

export default function useUpload() {
  const navigate = useNavigate();
  const mutation = useMutation(
    "uploadToS3",
    async (file: File) => {
      const { url, key, token } = await getPresignedUrl(file);
      await uploadToS3({ file, presignedUrl: url, key });
      return { key, url, token };
    },
    {
      onSuccess: ({ token, key }) => {
        localStorage.setItem(key, token);
        navigate(`/${key}/edit`);
      },
      onError: (error) => {
        console.log("er");
        throw new Error("error");
      },
    }
  );

  return mutation;
}
const getPresignedUrl = async (file: File) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseUrl}/upload/${file.name}`;
  const response = await fetch(url, {
    method: "POST",
  });
  return response.json();
};

const uploadToS3 = async ({
  file,
  presignedUrl,
  key,
}: {
  file: File;
  presignedUrl: string;
  key: string;
}) => {
  const newFile = new File([file], key, { type: file.type });
  console.log(newFile);

  return fetch(presignedUrl, {
    method: "PUT",
    body: newFile,
    headers: {
      "Content-Type": file.type,
    },
  });
};
