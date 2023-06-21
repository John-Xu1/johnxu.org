import Link from "next/link";
import React from "react";
import "../globals.css";
import "react-icons/ai";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

const NavItem = ({ href, label }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className="mx-6 my-6 font-body font-extralight size text-2xl hover:text-gray-400 duration-300">
        {label}
      </a>
    </Link>
  );
};

const Header = () => {
  return (
    <div className="flex py-3 justify-between">
      <div className="flex">
        <div className="w-12" />
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About" />
        <NavItem href="/" label="Resume" />
      </div>
      <div className="flex gap-8 mr-12">
        <RiSendPlaneFill
          className="h-auto hover:fill-emerald-400 hover:rotate-12 hover:scale-110 hover:cursor-pointer duration-300"
          size={32}
        />
        <AiFillLinkedin
          className="h-auto hover:fill-blue-600 hover:-rotate-6 hover:scale-110 hover:cursor-pointer duration-300"
          size={32}
        />
        <AiFillInstagram
          className="h-auto hover:fill-rose-500 hover:rotate-45 hover:scale-110 hover:cursor-pointer duration-300"
          size={32}
        />
        <AiFillGithub
          className="h-auto hover:fill-violet-700 hover:-rotate-12 hover:scale-110 hover:cursor-pointer duration-300"
          size={32}
        />
      </div>
    </div>
  );
};

export default Header;
