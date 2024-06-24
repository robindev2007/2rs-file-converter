"use client";
import React, { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import { FaGithub, FaBars } from "react-icons/fa6";

const HeaderMobileNav = ({
  navLinks,
}: {
  navLinks: { title: string; href: string }[];
}) => {
  const [navActive, setNaveActive] = useState(false);
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <FaBars size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                {link.title}
              </Link>
            ))}
            <ThemeToggler />
            <Button asChild>
              <Link href={"#"} className="flex gap-2">
                <FaGithub size={20} className="shrink-0" />
                Github repo
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderMobileNav;
