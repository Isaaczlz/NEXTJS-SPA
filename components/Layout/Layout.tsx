import React from "react";
import NavBar from "@components/NavBar/NavBar";
import * as index from "index";

const Layout: React.FC<index.Props> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <footer>This is the Footer</footer>
    </div>
  );
};

export default Layout;
