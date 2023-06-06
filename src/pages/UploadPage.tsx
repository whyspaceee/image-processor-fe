import { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "react-query";
import useUpload from "../hooks/useUpload";
import { AuthContext } from "../context/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";


export default function UploadPage() {
  const loader = useLoaderData() as string
  const navigate = useNavigate()
  const {
    uploadMutation,
  } = useContext(AuthContext);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    navigate("/edit")
    uploadMutation.mutate(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen 
    " {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )


}

