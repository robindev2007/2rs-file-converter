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
  convertFile: ({ file, convertTo }: { file: File; convertTo: string }) => void;
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
  const [error, setError] = useState(false);

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

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-card rounded border overflow-hidden">
      <div className="flex gap-2 md:items-center w-full p-2 justify-between flex-col md:flex-row">
        <div className="flex gap-2 items-center">
          <FileIcon fileType={fileType} />
          <FileTitle title={file.name} />
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
              <a href={convertedData?.url} download={convertedData?.output}>
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
            // convertingState === '' && "",
            progress !== 100 && "rounded-full"
          )}
          style={{
            width: convertingState !== "done" ? `${progress}%` : "",
          }}></div>
      )}
    </motion.div>
  );
};

export default SingleFile;
