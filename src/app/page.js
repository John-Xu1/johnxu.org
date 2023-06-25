import React from "react";
import Image from "next/image";
import "./animations/rotating_text.css";
import "./page.css";

export default function Home() {
  const projects = [
    {
      name: "Alleviate Health",
      img: "/Alleviate Mockups.svg",
      hoverColor: "#111A4B",
    },
    {
      name: "Meditune",
      img: "/Meditune Mockups.svg",
      hoverColor: "#2A3562",
    },
    {
      name: "Focal",
      img: "/Focal Mockups.svg",
      hoverColor: "#210D6A",
    },
    {
      name: "Minutes AI",
      img: "/Minutes AI Mockups.svg",
      hoverColor: "#2D1212",
    },
  ];

  const ProjectTab = ({ name, first, bgColor }) => {
    return (
      <div className="pl-48">
        <div
          className={`pl w-96 hover:bg-[${bgColor}] h-[70px] hover:cursor-pointer border-white border-b ${first}`}
        >
          <p className="leading-[70px] text-2xl font-body font-light">{name}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="preview-container">
        <p className="pl-48 pt-48 font-body font-light text-3xl">
          Hello there! I'm
        </p>
        <div className="pl-48 pt-4">
          <div className="wrapper">
            <div className="words">
              <span>John Xu (Shoe)</span>
              <span>a fried rice expert</span>
              <span>a code tinkerer</span>
              <span>for socks with sandals</span>
              <span>a graphic designer</span>
              <span>the greatest 2048 player</span>
              <span>a founder</span>
              <span>against cereal before milk</span>
              <span>John Xu (Shoe)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <h1 className="pl-48 pt-28 mb-16 font-heading font-regular text-5xl">
            Projects
          </h1>
          {projects.map((project, idx) =>
            idx !== 0 ? (
              <ProjectTab name={project.name} bgColor={project.hoverColor} />
            ) : (
              <ProjectTab
                name={project.name}
                bgColor={project.hoverColor}
                first="border-t"
              />
            )
          )}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <img src="/Spotlight.svg" />
        </div>
      </div>
    </div>
  );
}
