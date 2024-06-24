import React from "react";
import logo from "../../../public/images/main-logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-1">
      <Image
        src={logo}
        alt="Uniconverter logo"
        className="drop-shadow-md "
        height={40}
      />
      <p className="text-[hsl(0, 58, 13)] font-bold text-2xl">2RS Converter</p>
    </Link>
  );
};

export default Logo;
