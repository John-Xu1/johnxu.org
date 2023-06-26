"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./animations/rotating_text.css";
import "./page.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  const projects = [
    {
      name: "Alleviate Health",
      img: "/Alleviate Mockups.svg",
      hoverColor: "hover:bg-[#111A4B]",
    },
    {
      name: "Meditune",
      img: "/Meditune Mockups.svg",
      hoverColor: "hover:bg-[#2A3562]",
    },
    {
      name: "Focal",
      img: "/Focal Mockups.svg",
      hoverColor: "hover:bg-[#210D6A]",
    },
    {
      name: "Minutes AI",
      img: "/Minutes AI Mockups.svg",
      hoverColor: "hover:bg-[#2D1212]",
    },
  ];

  const ProjectTab = ({ name, first, bgColor, onClick }) => {
    return (
      <div className="pl-[12vw]">
        <div
          className={`h-[70px] w-[20vw] flex items-center ${bgColor} hover:cursor-pointer border-white border-b ${first}`}
          onClick={onClick}
        >
          <p className="text-lg md:text-xl lg:text-2xl font-body font-light">
            {name}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="preview-container">
        <div className="background-image"></div>
        <p className="pl-0 md:pl-[10vw] pt-48 font-body font-extralight text-4xl md:text-5xl text-center md:text-left">
          John Xu (Shoe) is a
        </p>
        <div className="pl-0 md:pl-[10vw] pt-4">
          <div className="wrapper">
            <div className="words">
              <span>code tinkerer</span>
              <span>figma fiddler</span>
              <span>founder</span>
              <span>code tinkerer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[10vh]">
        <div className="flex flex-col">
          <h1 className="pl-[12vw] mb-16 font-heading font-regular text-3xl md:text-4xl lg:text-5xl">
            Projects
          </h1>

          {projects.map((project, idx) =>
            idx !== 0 ? (
              <ProjectTab
                name={project.name}
                bgColor={project.hoverColor}
                onClick={() => setTabIndex(idx)}
              />
            ) : (
              <ProjectTab
                name={project.name}
                bgColor={project.hoverColor}
                onClick={() => setTabIndex(idx)}
                first="border-t"
              />
            )
          )}
        </div>
        <div className="flex justify-center items-center w-full h-[550px]">
          <img src={projects[tabIndex].img} className="" />
        </div>
      </div>
      <div className="mt-24">
        <h1 className="font-heading font-light text-4xl flex justify-center w-screen">
          Reach out! Always happy to chat :)
        </h1>
        <div className="flex justify-center w-screen gap-8 py-28">
          <a
            href="mailto:john.xu@duke.edu"
            className="flex justify-center"
            target="_blank"
          >
            <RiSendPlaneFill
              className="h-auto hover:fill-emerald-400 hover:rotate-12 hover:scale-110 hover:cursor-pointer duration-300"
              size={64}
            />
          </a>
          <a
            href="https://linkedin.com/in/john-j-xu"
            className="flex justify-center"
            target="_blank"
          >
            <AiFillLinkedin
              className="h-auto hover:fill-blue-600 hover:-rotate-6 hover:scale-110 hover:cursor-pointer duration-300"
              size={64}
            />
          </a>
          <a
            href="https://www.instagram.com/john_xu22/"
            className="flex justify-center"
            target="_blank"
          >
            <AiFillInstagram
              className="h-auto hover:fill-rose-500 hover:rotate-45 hover:scale-110 hover:cursor-pointer duration-300"
              size={64}
            />
          </a>
          <a
            href="https://github.com/John-Xu1"
            className="flex justify-center"
            target="_blank"
          >
            <AiFillGithub
              className="h-auto hover:fill-violet-700 hover:-rotate-12 hover:scale-110 hover:cursor-pointer duration-300"
              size={64}
            />
          </a>
        </div>
        <p className="font-heading flex justify-center w-screen pb-8">
          Designed and Developed with 🤍 and 🍵
        </p>
      </div>
    </div>
  );
}
