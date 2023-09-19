"use client";
import Image from "next/image";
import Header from "../components/header";
import { TbWindowMaximize } from "react-icons/tb";
import { useEffect, useState } from "react";

export default function About() {
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
      <div>
        <h1 className="font-heading text-3xl">A little more about me...</h1>
        <p className="font-body font-light mt-8 pr-0 lg:pr-24">
          What’s up! I’m John, a developer and designer currently studying
          Computer Science & Finance at Duke.
          <br />
          <br />
          As someone who born and raised in the Silicon Valley, I’m excited by
          the ways technology can change the way we look at the world. I can
          recount countless moments growing up where I would see a piece of tech
          that seemed nothing short of magic.
          <br />
          <br />
          In the future, I hope to help create something that invokes in others
          the same sense of wonder I felt as a kid —something that makes people
          believe in the impossible.
          <br />
          <br />
          Some things I’ve gotten into on the side lately:
        </p>
        <ul className="list-disc ml-4">
          <li>
            <a href="/travel" className="font-body font-extralight underline">
              Travel vlog/montage creation
            </a>
          </li>
          <li>
            <a href="/design" className="font-body font-extralight underline">
              Pro bono design
            </a>
          </li>
        </ul>
      </div>
    );
  };

  const AboutPic = () => {
    return (
      <img
        src="/About Headshot.png"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "500px",
        }}
        className="select-none"
        unoptimized
      />
    );
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row mx-[10vw] mt-14 justify-center items-center">
        {!isMobile ? (
          <>
            <div className="mb-16">
              <IntroBlurb />
            </div>{" "}
            <AboutPic />
          </>
        ) : (
          <>
            <AboutPic /> <div className="h-16" /> <IntroBlurb />
            <div className="h-16" />
          </>
        )}
      </div>
    </div>
  );
}
