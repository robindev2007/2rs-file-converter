import React from "react";
import Container from "../ui/container";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import ThemeToggler from "./theme-toggler";
import HeaderMobileNav from "./header-mobile-nav";

const Header = () => {
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Privicy Policy",
      href: "/privicy-policy",
    },
  ];
  return (
    <div className="border-b sticky top-0 bg-background z-20">
      <Container className="flex gap-2 items-center justify-between">
        <Logo />

        <div className="gap-4 hidden md:flex">
          {navLinks.map((link) => (
            <Button key={link.title} asChild variant={"ghost"}>
              <Link href={link.href}>{link.title}</Link>
            </Button>
          ))}
        </div>

        <div className="items-center gap-3 hidden md:flex">
          <ThemeToggler />

          <Button asChild>
            <Link href={"#"} className="flex gap-2">
              <FaGithub size={20} className="shrink-0" />
              Github repo
            </Link>
          </Button>
        </div>

        <HeaderMobileNav navLinks={navLinks} />
      </Container>
    </div>
  );
};

export default Header;
