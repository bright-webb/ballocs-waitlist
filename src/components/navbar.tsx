"use client";
import React from "react";
import Logo from "./logo";

const Navbar = () => {

  return (
    <header className="sticky top-0 z-40 w-ful dark:bg-background p-3 sm:px-[5rem]">
      <div className="flex justify-between items-center">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
