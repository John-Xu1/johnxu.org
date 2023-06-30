"use client";
import Image from "next/image";
import Header from "../components/header";
import { TbWindowMaximize } from "react-icons/tb";
import { useEffect, useState } from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { initializeTiltEffect } from "../animations/tilt_parallax";
import Link from "next/link";

export default function ProjectDetails({
  img,
  header,
  link,
  description,
  libs,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    initializeTiltEffect();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const IntroBlurb = () => {
    return (
      <div className="ml-0 md:ml-16 mt-16 md:mt-0">
        <div className="flex">
          <h1 className="font-heading text-3xl font-medium flex">{header}</h1>
          <Link href={link} target="_blank">
            <RxOpenInNewWindow
              className="ml-2 hover:text-gray-400 hover:cursor-pointer duration-150"
              size={32}
            />
          </Link>
        </div>
        <p className="font-body font-light mt-8">{description}</p>
        <p className="font-body font-medium text-gray-400">
          <br /> Libraries/Frameworks/APIs: {libs}
        </p>
      </div>
    );
  };

  const AboutPic = () => {
    return (
      <Link href="/#projects" className="w-full">
        <div className="projects-container w-full h-full flex items-center justify-center group">
          <img
            src={img}
            className={`select-none h-96 sm:h-full max-w-5xl group-hover:scale-105 duration-500 group-hover:cursor-pointer ${
              header === "Minutes AI" && "mt-16"
            }`}
          />
          <p className="absolute z-10 bg-red-600 text-white p-4 rounded-lg text-lg scale-0 overflow-hidden group-hover:scale-100 duration-150 group-hover:cursor-pointer font-body">
            Click on me to go back
          </p>
        </div>
      </Link>
    );
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row mx-[10vw] justify-center items-center mt-16">
        <AboutPic />
        <IntroBlurb />
        <div className="h-16" />
      </div>
    </div>
  );
}
