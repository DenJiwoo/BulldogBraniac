import React from "react";
import logo from "../assets/logo.svg";
import PrimaryLinkButton from "./PrimaryLinkButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center fixed w-full left-0 top-0 px-60 pt-4 pb-2 bg-[#fff7ed] z-10">
      <div className="flex items-center gap-4">
        <img src={logo} alt="image of a brainy bulldog" />
        <p className="text-3xl font-semibold">BulldogBraniac</p>
      </div>

      <div className="flex gap-6 font-semibold justify-self-center text-lg">
        <a
          className="hover:text-primary transition-colors duration-150"
          href="#hero"
        >
          Home
        </a>
        <a
          className="hover:text-primary transition-colors duration-150"
          href="#faq"
        >
          FAQs
        </a>
        <a
          className="hover:text-primary transition-colors duration-150"
          href=""
        >
          About us
        </a>
      </div>

      <div className="justify-self-end">
        <PrimaryLinkButton to={"/signin"} href={""}>
          Get started
        </PrimaryLinkButton>
      </div>
    </header>
  );
};

export default Header;
