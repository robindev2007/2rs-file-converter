import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const DropzoneSkeletone = () => {
  return (
    <Skeleton className="h-48   mx-auto w-full border-dashed border-2 rounded-md flex items-center justify-center bg-card">
      Loading please wait...
    </Skeleton>
  );
};

export default DropzoneSkeletone;
