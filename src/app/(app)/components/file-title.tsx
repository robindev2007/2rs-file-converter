import React from "react";

const FileTitle = ({ title }: { title: string }) => {
  const cropedTitle = () => {
    if (title.length < 36) return title;

    const titleExt = "." + title.split(".").pop();

    const trailCount = 10;
    const maxChar = 30 - titleExt.length - trailCount;
    const titleTxt = title.split(titleExt)[0];

    const startChar = titleTxt.substring(0, maxChar);
    const endChar = titleTxt.substring(
      titleTxt.length - trailCount,
      titleTxt.length
    );

    return startChar + "..." + endChar + titleExt;
  };

  return <div className="flex gap-1 mr-auto">{cropedTitle()}</div>;
};

export default FileTitle;
