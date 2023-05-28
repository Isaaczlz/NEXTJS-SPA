import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">
          <h3>Home</h3>
        </Link>
        <Link href="/about/">
          <h3>About</h3>
        </Link>
      </menu>
    </nav>
  );
};

export default NavBar;
