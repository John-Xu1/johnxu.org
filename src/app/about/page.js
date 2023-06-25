import Image from "next/image";
import Header from "../components/header";
import { TbWindowMaximize } from "react-icons/tb";
export default function About() {
  return (
    <div>
      <Header />
      <div className="flex mx-32 mt-14">
        <div>
          <h1 className="font-heading text-3xl">A little more about me...</h1>
          <p className="font-body font-light mt-8 pr-24">
            What’s up! I’m John, a developer and designer currently studying
            Computer Science & Finance at Duke.
            <br />
            <br />
            As someone who born and raised in the Silicon Valley, I’m excited by
            the ways technology can change the way we look at the world. I can
            recount countless moments growing up where I would see a piece of
            tech that seemed nothing short of magic.
            <br />
            <br />
            In the future, I hope to help create something that invokes in
            others the same sense of wonder I felt as a kid —something that
            makes people believe in the impossible.
            <br />
            <br />
            Some things I’ve gotten into on the side lately:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a href="https://youtube.com" target="_blank">
                Travel vlog/montage creation
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank">
                Pro bono logo design
              </a>
            </li>
          </ul>
        </div>
        <Image
          src="/About Headshot.svg"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          className="select-none"
        />
      </div>
    </div>
  );
}
