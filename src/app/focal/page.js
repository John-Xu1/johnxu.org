"use client";
import Image from "next/image";
import Header from "../components/header";
import { TbWindowMaximize } from "react-icons/tb";
import { useEffect, useState } from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import ProjectDetails from "../components/project_details";

export default function About() {
  return (
    <ProjectDetails
      img="/Focal Mockups.svg"
      header="Focal"
      link="https://getfocal.app/"
      description="Centralized productivity platform that helps users be productive. The app includes features that aids people in feeling motivated to work, organizing their todos, focusing on tasks, and monitor their progress."
      libs="Flutter, Firebase, Google Analytics, Facebook SDK"
    />
  );
}
