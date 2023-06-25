"use client";
import Link from "next/link";
import React from "react";
import "../globals.css";
import "react-icons/ai";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

const NavItem = ({ href, label }) => {
  return (
    <Link legacyBehavior href={href}>
      <a
        className="mx-6 my-6 font-body font-extralight size text-2xl hover:text-gray-400 duration-300"
        href={href}
      >
        {label}
      </a>
    </Link>
  );
};

const Header = () => {
  console.log(usePathname());
  return (
    <>
      {usePathname() !== "/resume" && (
        <>
          <div className="flex py-3 justify-between w-100vw">
            <div className="flex ml-32">
              <NavItem href="/" label="Home" />
              <NavItem href="/about" label="About" />
              <NavItem href="/resume" target="_blank" label="Resume" />
            </div>
            <div className="flex gap-8 mr-32">
              <a
                href="mailto:john.xu@duke.edu"
                className="flex justify-center"
                target="_blank"
              >
                <RiSendPlaneFill
                  className="h-auto hover:fill-emerald-400 hover:rotate-12 hover:scale-110 hover:cursor-pointer duration-300"
                  size={32}
                />
              </a>
              <a
                href="https://linkedin.com/in/john-j-xu"
                className="flex justify-center"
                target="_blank"
              >
                <AiFillLinkedin
                  className="h-auto hover:fill-blue-600 hover:-rotate-6 hover:scale-110 hover:cursor-pointer duration-300"
                  size={32}
                />
              </a>
              <a
                href="https://www.instagram.com/john_xu22/"
                className="flex justify-center"
                target="_blank"
              >
                <AiFillInstagram
                  className="h-auto hover:fill-rose-500 hover:rotate-45 hover:scale-110 hover:cursor-pointer duration-300"
                  size={32}
                />
              </a>
              <a
                href="https://github.com/John-Xu1"
                className="flex justify-center"
                target="_blank"
              >
                <AiFillGithub
                  className="h-auto hover:fill-violet-700 hover:-rotate-12 hover:scale-110 hover:cursor-pointer duration-300"
                  size={32}
                />
              </a>
            </div>
          </div>
          <hr />
        </>
      )}
    </>
  );
};

export default Header;
