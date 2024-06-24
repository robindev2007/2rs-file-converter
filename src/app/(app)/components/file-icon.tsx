import React from "react";
import { FaImage, FaVideo, FaFileAudio } from "react-icons/fa6";

export type fileType = "video" | "audio" | "image";

const FileIcon = ({ fileType }: { fileType: fileType }) => {
  const Icon = () => {
    switch (fileType) {
      case "image":
        return <FaImage className="size-6 text-primary" />;
      case "video":
        return <FaVideo className="size-6 text-primary" />;
      case "audio":
        return <FaFileAudio className="size-6 text-primary" />;

      default:
        return <FaImage className="size-6 text-primary" />;
    }
  };
  return <Icon />;
};

export default FileIcon;
