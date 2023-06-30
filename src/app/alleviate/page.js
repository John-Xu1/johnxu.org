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
      description="Alleviate Health is a web-platform that allows for seamless HSA/FSA shopping experience. Scrapes from largest vendors (CVS, Walmart, Walgreens) and allows users to purchase products without complicated reimbursement process."
      libs="NextJS, Chakra UI, BeautifulSoup, Firebase, Auth0, Axios"
    />
  );
}
