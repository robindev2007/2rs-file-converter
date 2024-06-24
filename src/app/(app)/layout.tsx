import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import React, { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
