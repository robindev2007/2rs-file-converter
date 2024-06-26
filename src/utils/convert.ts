// "use client";
import { Action } from "@/types/types";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export const convertFile = async ({
  convertTo,
  file,
  ffmpeg,
}: {
  convertTo: string;
  file: File;
  ffmpeg: FFmpeg;
}) => {
  const fileExt = "." + file.name.split(".").pop() ?? "";
  const fileTitle = file.name.split(fileExt)[0];

  const output = fileTitle + "." + convertTo;

  try {
    console.log("Add file to to memory");
    await ffmpeg.writeFile(file.name, await fetchFile(file));
    console.log("Add file to to memory done");
    console.log("Exec ffmepg");
    await ffmpeg.exec(["-i", file.name, output]);
    console.log("Get file from memory ");
    const data = await ffmpeg.readFile(output);
    console.log("Get file from memory done");
    const blob = new Blob([data], { type: file.type.split("/")[0] });
    console.log(blob);
    const url = URL.createObjectURL(blob);
    console.log("Sent back file");

    console.log("done");
    return { url, output };
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};
