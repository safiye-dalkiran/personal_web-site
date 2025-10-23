
import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="flex items-center justify-between pt-6 sm:pt-10 container mx-auto px-4">
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;

