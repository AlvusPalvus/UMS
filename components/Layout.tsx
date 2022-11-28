import React, { ReactElement } from "react";
import Header from "./Header";

type Props = { children: ReactElement };

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer> Footer here yey! :) </footer>
    </>
  );
};

export default Layout;
