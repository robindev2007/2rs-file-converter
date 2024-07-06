"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[50rem] mx-auto p-2", className)}>{children}</div>
  );
};

export default Container;
