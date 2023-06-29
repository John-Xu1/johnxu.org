"use client";
import Image from "next/image";
import Header from "../components/header";
import { TbWindowMaximize } from "react-icons/tb";
import { useEffect, useState } from "react";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function ProjectDetails({
  img,
  header,
  link,
  description,
  libs,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
        <h1 className="font-heading text-3xl font-medium flex">
          {header}
          <span>
            <a href={link} target="_blank">
              <RxOpenInNewWindow className="ml-2 hover:text-gray-400 hover:cursor-pointer duration-150 " />
            </a>
          </span>
        </h1>
        <p className="font-body font-light mt-8">{description}</p>
        <p className="font-body font-medium text-gray-400">
          <br /> Libraries/Frameworks/APIs: {libs}
        </p>
      </div>
    );
  };

  const AboutPic = () => {
    return (
      <img
        src={img}
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "800px",
        }}
        className="select-none"
        unoptimized
      />
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
