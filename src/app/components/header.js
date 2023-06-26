"use client";
import Link from "next/link";
import React from "react";
import "../globals.css";
import "react-icons/ai";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavItem = ({ href, label, target }) => {
  return (
    <Link legacyBehavior href={href}>
      <a
        className="mx-6 my-6 font-body font-extralight size text-2xl hover:text-gray-400 duration-300"
        href={href}
        target={target}
      >
        {label}
      </a>
    </Link>
  );
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(usePathname());
  return (
    <>
      {usePathname() !== "/resume" && usePathname() !== "/resume.pdf" && (
        <>
          <div className="flex py-3 justify-center sm:justify-between w-100vw">
            <div className="flex ml-0 sm:ml-[5vw]">
              <NavItem href="/" label="Home" />
              <NavItem href="/about" label="About" />
              <NavItem href="/resume.pdf" label="Resume" target="_blank" />
            </div>
            {!isMobile && (
              <div className="flex gap-8 mr-[5vw]">
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
            )}
          </div>
          <hr />
        </>
      )}
    </>
  );
};

export default Header;
