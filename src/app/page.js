import React from "react";
import Image from "next/image";
import Header from "./components/header";
import "./animations/rotating_text.css";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute z-50 w-full">
        <Header />
      </div>
      <div className="absolute z-10">
        <p className="ml-48 mt-48 font-body font-light text-3xl">
          Hello there! I'm
        </p>
        <div className="ml-48 mt-4">
          <div class="wrapper">
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
      <div className="w-full h-full flex justify-end select-none">
        <Image
          src="/Home BG.svg"
          className=""
          width={0}
          height={0}
          style={{ width: "80%", height: "auto" }}
        />
      </div>
    </div>
  );
}
