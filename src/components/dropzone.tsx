"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt, FaFileMedical } from "react-icons/fa";

const Dropzone = ({ setFiles }: { setFiles: (files: File[]) => void }) => {
  const onDrop = (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    setFiles(acceptedFiles);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".bmp",
        ".webp",
        ".ico",
        ".tif",
        ".tiff",
        ".raw",
        ".tga",
      ],
      "audio/*": [],
      "video/*": [],
    },
    onDrop,
  });

  return (
    <div
      {...getRootProps({
        className: cn(
          "h-48 rounded-md border-dashed border-2 transition-all flex items-center justify-center ease-out cursor-pointer bg-card flex flex-col text-center md:max-w-[70%] mx-auto w-full hover:bg-secondary/80",
          isDragActive && "bg-secondary"
        ),
      })}>
      <input {...getInputProps()} />
      {isDragAccept ? (
        <FaFileMedical className="size-10" />
      ) : (
        <FaCloudUploadAlt className="size-10" />
      )}
      <p className="max-w-[50%] text-muted-foreground text-xl font-semibold">
        {isDragAccept
          ? "Yup! Drop here"
          : "Drag or click to upload single or multiple files"}
      </p>
    </div>
  );
};

export default Dropzone;
