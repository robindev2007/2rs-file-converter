"use client";
import React, { useEffect, useState } from "react";
import FileIcon, { fileType } from "./file-icon";
import FileTitle from "./file-title";
import ConvertToOptions from "./convert-to-options";
import { Button } from "@/components/ui/button";
import { FaXmark } from "react-icons/fa6";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { convertFile } from "@/utils/convert";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SingleFileProps = {
  file: File;
  ffmpeg: FFmpeg;
  ffmpegLoaded: boolean;
  removeFileFromList: (fileName: string) => void;
};

type convertingState = "converting" | "error" | "done" | "initial";

const SingleFile = ({
  file,
  ffmpeg,
  ffmpegLoaded,
  removeFileFromList,
}: SingleFileProps) => {
  const fileType = file.type.split("/")[0] as fileType;

  const [convertTo, setConvertTo] = useState("");
  const [progress, setProgress] = useState(0);
  const [convertingState, setConvertingState] =
    useState<convertingState>("initial");

  const [convertedData, setConvertedData] = useState<{
    url: string;
    output: string;
  }>();

  const handleConvert = async () => {
    setConvertingState("converting");
    const { url, output, error } = await convertFile({
      convertTo,
      ffmpeg,
      file,
    });

    if (error || !url) {
      console.log(error);
      setConvertingState("error");
      return;
    }

    setConvertingState("done");
    setConvertedData({ url, output });
  };

  useEffect(() => {
    if (!ffmpegLoaded) return;
    ffmpeg.on("progress", ({ progress, time }) => {
      setProgress(progress * 100);
    });
  }, [ffmpegLoaded, ffmpeg]);

  let fileSize;
  var totalBytes = file.size;
  if (totalBytes < 1000000) {
    var _size = Math.floor(totalBytes / 1000) + "KB";
    fileSize = _size;
  } else {
    var _size = Math.floor(totalBytes / 1000000) + "MB";
    fileSize = _size;
  }

  return (
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      className="bg-card rounded shadow-md border overflow-hidden">
      <div className="flex gap-2 md:items-center w-full p-2 justify-between flex-col md:flex-row">
        <div className="flex gap-2 items-center">
          <FileIcon fileType={fileType} />
          <FileTitle title={file.name} />
          <p className="text-muted-foreground text-sm">{fileSize}</p>
        </div>

        <div className="flex gap-2 items-center">
          {convertingState !== "done" && convertingState !== "error" && (
            <ConvertToOptions
              disabled={convertingState === "converting"}
              onChange={(value) => setConvertTo(value ?? "")}
              value={convertTo}
              file_type={file.type}
            />
          )}

          {(convertingState === "initial" ||
            convertingState === "converting") && (
            <Button
              size={"sm"}
              onClick={handleConvert}
              className="ml-auto md:ml-0"
              disabled={
                convertingState === "converting" || convertTo.length < 1
              }>
              Convert
            </Button>
          )}

          {convertingState === "done" && (
            <Button asChild size={"sm"}>
              <a
                href={convertedData?.url}
                className="ml-auto md:ml-0"
                download={convertedData?.output}>
                Download
              </a>
            </Button>
          )}

          {convertingState === "error" && (
            <Badge className="rounded-full font-normal" variant={"destructive"}>
              Unknown Error
            </Badge>
          )}

          <Button
            size={"icon"}
            variant={"secondary"}
            className=""
            onClick={() => removeFileFromList(file.name)}>
            <FaXmark />
          </Button>
        </div>
      </div>

      {(convertingState === "converting" || convertingState === "done") && (
        <div
          className={cn(
            "h-1 bg-green-600",
            progress !== 100 && "rounded-r-full"
          )}
          style={{
            width: convertingState !== "done" ? `${progress ?? 0}%` : "",
          }}></div>
      )}
    </div>
  );
};

export default SingleFile;
