"use client"

import Image from "next/image";
import type { StaticImageData } from "next/image";

import { useState } from "react";

type ProjectBoxProps = {
  image: StaticImageData
  alt: string
  href: string
}

export default function ProjectBox({image, alt, href}:ProjectBoxProps) {
  const [show, setShow] = useState<boolean>(false)

  const toggleShow = () => setShow(!show)

 return (
   <a 
    target="_blank"
    rel="noreferrer"
    href={href}
    className="w-32 h-32 p-2 hover:bg-primary/40 bg-primary/80 border-2 border-primary/80 hover:border-primary/40 hover:duration-150 duration-300 cursor-pointer bounce flex flex-col justify-center items-center"
    onMouseEnter={toggleShow}
    onMouseLeave={toggleShow}
   >
    {show && <h2 className="w-full text-left text-xs text-tertiary uppercase font-bold">{alt}</h2>}
    <Image
      className={show ? "w-9/12" : "w-full"}
      src={image}
      alt={alt}
    />
   </a>
 );
}