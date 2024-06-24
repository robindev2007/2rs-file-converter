import React from "react";
import Container from "../ui/container";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <Container className="text-center py-0 text-xs">
        <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
