import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const extensions = {
  image: [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "webp",
    "ico",
    "tif",
    "tiff",
    "svg",
    "raw",
    "tga",
  ],
  video: [
    "mp4",
    "m4v",
    "mp4v",
    "3gp",
    "3g2",
    "avi",
    "mov",
    "wmv",
    "mkv",
    "flv",
    "ogv",
    "webm",
    "h264",
    "264",
    "hevc",
    "265",
  ],
  audio: ["mp3", "wav", "ogg", "aac", "wma", "flac", "m4a"],
};

const ConvertToOptions = ({
  onChange,
  value,
  file_type,
  disabled,
}: {
  onChange: (value: string | null) => void;
  value: string;
  file_type: string;
  disabled: boolean;
}) => {
  return (
    <Select onValueChange={onChange} value={value} disabled={disabled}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Convert to" />
      </SelectTrigger>
      <SelectContent>
        {file_type.includes("video") && (
          <Tabs defaultValue="video" className="w-[400px]">
            <TabsList className="w-full">
              <TabsTrigger value="video" className="w-full">
                Video
              </TabsTrigger>
              <TabsTrigger value="audio" className="w-full">
                Audio
              </TabsTrigger>
            </TabsList>
            <TabsContent value="video">
              <div className="grid grid-cols-3 gap-1">
                {extensions["video"].map((itm) => (
                  <SelectItem value={itm} key={itm}>
                    {itm}
                  </SelectItem>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="audio">
              <div className="grid grid-cols-3 gap-1">
                {extensions["audio"].map((itm) => (
                  <SelectItem value={itm} key={itm}>
                    {itm}
                  </SelectItem>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
        {file_type.includes("audio") && (
          <div className="grid grid-cols-3 gap-1">
            {extensions["audio"].map((itm) => (
              <SelectItem value={itm} key={itm}>
                {itm}
              </SelectItem>
            ))}
          </div>
        )}
        {file_type.includes("image") && (
          <div className="grid grid-cols-3 gap-1">
            {extensions["image"].map((itm) => (
              <SelectItem value={itm} key={itm}>
                {itm}
              </SelectItem>
            ))}
          </div>
        )}
      </SelectContent>
    </Select>
  );
};

export default ConvertToOptions;
