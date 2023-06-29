"use client";
import Image from "next/image";
import Header from "../components/header";
import { TbWindowMaximize } from "react-icons/tb";
import { useEffect, useState } from "react";
import ProjectDetails from "../components/project_details";

export default function About() {
  return (
    <ProjectDetails
      img="/Meditune Mockups.svg"
      header="Meditune"
      link="https://meditone-website.vercel.app/"
      description="Mobile app that helps those with tinnitus relieve their symptoms through applying a sound-notching algorithm that filters out specific frequencies on users’ Spotify playlists."
      libs="Flutter, FFmpeg, Firebase"
    />
  );
}
