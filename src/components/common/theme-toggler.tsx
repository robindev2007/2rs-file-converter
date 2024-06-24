"use client";
import { useTheme } from "next-themes";
import React from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { Button } from "../ui/button";

const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      name="Theme Changer button"
      size={"icon"}
      variant={"ghost"}
      onClick={() => setTheme(theme === "dark" ? "lite" : "dark")}>
      {theme === "dark" ? <IoSunny size={20} /> : <IoMoon size={20} />}
    </Button>
  );
};

export default ThemeToggler;
