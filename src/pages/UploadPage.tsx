import { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "react-query";
import useUpload from "../hooks/useUpload";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Slider } from "@radix-ui/react-slider";
import Spinner from "../components/ui/spinner";

export default function UploadPage() {
  const loader = useLoaderData() as string;
  const { mutate, isLoading } = useUpload();
  const onDrop = useCallback((acceptedFiles: File[]) => {
    mutate(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className=" flex flex-col items-center justify-center min-h-screen "
      {...getRootProps()}
    >
      {isLoading ? (
        <input {...getInputProps()} />
      ) : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
