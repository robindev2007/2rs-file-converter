"use client";
import React from "react";
import Dropzone from "@/components/dropzone";
import { useEffect, useRef, useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { convertFile } from "@/utils/convert";
import { motion } from "framer-motion";
import loadFfmpeg from "@/app/utils/load-ffmpeg";
import SingleFile from "./single-file";
import { Button } from "@/components/ui/button";
import DropzoneSkeletone from "./dropzone-skeleton";

const ConverterComponent = () => {
  const [files, setFiles] = useState<File[]>([]);
  const ffmpegRef = useRef<any>(null);
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const load = async () => {
    const ffmpeg_responce: FFmpeg = await loadFfmpeg();
    ffmpegRef.current = ffmpeg_responce;
    setFfmpegLoaded(true);
    console.log("FFmpeg wasm loaded successfully");
  };

  useEffect(() => {
    load();
  }, []);

  const handleConvertFIle = async ({
    convertTo,
    file,
  }: {
    file: File;
    convertTo: string;
  }) => {
    const d = await convertFile({
      convertTo,
      file,
      ffmpeg: ffmpegRef.current,
    });
    return d;
  };

  const removeFileFromList = (fileName: string) => {
    const newFiles = files.filter((file) => file.name !== fileName);
    setFiles(newFiles);
  };
  return (
    <>
      {files.length < 1 && (
        <Dropzone
          setFiles={(newFiles: File[]) => setFiles([...files, ...newFiles])}
        />
      )}

      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex gap-2 flex-col pb-14">
        {files?.map((file) => (
          <SingleFile
            key={`${file.name}-${file.lastModified}-${file.size}`}
            ffmpeg={ffmpegRef.current}
            ffmpegLoaded={ffmpegLoaded}
            file={file}
            convertFile={(e) =>
              handleConvertFIle({ convertTo: e.convertTo, file: e.file })
            }
            removeFileFromList={removeFileFromList}
          />
        ))}
      </motion.div>
      {files.length > 0 && (
        <div className="mx-auto w-full gap-2 flex items-center justify-evenly ">
          <Button
            variant={"secondary"}
            onClick={() => setFiles([])}
            className="flex-1">
            Clear all
          </Button>
          {/* <Button onClick={() => setFiles([])} className="flex-1">
            Convert All
          </Button> */}
        </div>
      )}
    </>
  );
};

export default ConverterComponent;
