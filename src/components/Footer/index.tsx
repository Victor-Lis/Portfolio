import "./fonts.css";
import "./profile.css";

import Image from "next/image";

import Linkedin from "@/assets/Profile/linkedin-personalized-2.svg";
import Github from "@/assets/Profile/github-personalized-2.svg";
import { agesManager } from "@/data/getDates";

export default function Footer() {

  return (
    <footer className="w-full bg-primary px-14 max-[850px]:px-4 pb-3 pt-7 max-[850px]:py-4 border-secondary border-l-8 selection:bg-secondary/5 flex flex-wrap gap-x-5 gap-y-2">
      <a
        className="flex items-center justify-center gap-x-1 hover:opacity-80 duration-150 cursor-pointer"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/victor-lis-bronzo"
      >
        <Image alt="Linkedin" src={Linkedin} height={36.5} width={36.5} />
        <h2 className="text-tertiary exo-2-regular text-2xl border-b-2 border-secondary">
          Victor Lis Bronzo
        </h2>
      </a>
      <a
        className="flex items-center justify-center gap-x-1 hover:opacity-80 duration-150 cursor-pointer"
        target="_blank"
        rel="noreferrer"
        href="https://www.github.com/Victor-Lis"
      >
        <Image alt="Github" src={Github} height={40} width={40} />
        <h2 className="text-tertiary exo-2-regular text-2xl selection:text-secondary border-b-2 border-secondary">
          Victor-Lis
        </h2>
      </a>
      <h2 className="text-tertiary exo-2-regular text-2xl ml-auto mt-auto">&copy; {agesManager.getThisYear()} Victor Lis Bronzo</h2>
    </footer>
  );
}
