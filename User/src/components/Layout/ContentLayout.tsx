import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

type ContentLayoutProps = {
  children: React.ReactNode;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};
