import Image from "next/image";
import Header from "./components/header";

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
        <p className="ml-48 mt-8 font-light text-5xl">John Xu (Shoe)</p>
      </div>
      <div className="w-full h-full flex justify-end">
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
