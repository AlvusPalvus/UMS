import React, { ReactElement } from "react";
import Header from "./Header";

type Props = { children: ReactElement };

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        {" "}
        <p>Footer here yey! :)</p>{" "}
      </footer>
    </>
  );
};

export default Layout;
