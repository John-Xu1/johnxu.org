"use client";
import Image from "next/image";
import Header from "../components/header";
import { TbWindowMaximize } from "react-icons/tb";
import { useEffect, useState } from "react";
import ProjectDetails from "../components/project_details";

export default function About() {
  return (
    <ProjectDetails
      img="/Alleviate Mockups.svg"
      header="Alleviate Health"
      link="https://alleviatehealth.care"
      description="Custom AI agents through customizable and personalized SMS/voice to automate front desk administrative workflows for workers all across healthcare."
      libs="Twilio, Next.js, Supabase,  Whisper, GPT-4, LangChain"
    />
  );
}
