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

  console.log(fileExt, output);
  try {
    await ffmpeg.writeFile(file.name, await fetchFile(file));
    await ffmpeg.exec(["-i", file.name, output]);
    const data = await ffmpeg.readFile(output);
    const blob = new Blob([data], { type: file.type.split("/")[0] });
    console.log(blob);
    const url = URL.createObjectURL(blob);

    console.log("done");
    return { url, output };
  } catch (error) {
    return { error: error };
  }
};
