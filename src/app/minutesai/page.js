"use client";
import Image from "next/image";
import Header from "../components/header";
import { TbWindowMaximize } from "react-icons/tb";
import { useEffect, useState } from "react";
import ProjectDetails from "../components/project_details";

export default function About() {
  return (
    <ProjectDetails
      img="/Minutes AI Mockups.svg"
      header="Minutes AI"
      link="https://github.com/John-Xu1/minutes-ai"
      description="Minutes AI is a web portal that automatically generates meeting minutes from an mp4 or mp3 recording of a meeting. Uses Whisper to transcribe the video into text and then GPT-3.5-turbo to dynamically generate a summary of the meeting."
      libs="ReactJS, OpenAI chat completions, Whisper ASR"
    />
  );
}
