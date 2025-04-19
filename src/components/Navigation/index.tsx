'use client'
import { useState } from "react";
import { ArrowUp, ArrowDown } from 'lucide-react'

// const sections = ["#hero", "#techs", "#aboutme", "#projects", "#footer"];
const sections = ["#hero", "#techs", "#aboutme", "#projects"];

export default function Navigation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction: "up" | "down") => {
    if (direction === "up" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "down" && currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    document.querySelector(sections[currentIndex])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-3 max-sm:right-1 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
      <button
      onClick={() => handleNavigation("up")}
      className="p-2 max-sm:p-1 bg-primary text-white rounded-md shadow hover:bg-primary/85 border-[1px] border-secondary transition cursor-pointer"
      >
        <ArrowUp/>
      </button>
      <button
      onClick={() => handleNavigation("down")}
      className="p-2 max-sm:p-1 bg-primary text-white rounded-md shadow hover:bg-primary/85 border-[0.5px] border-secondary transition cursor-pointer"
      >
        <ArrowDown/>
      </button>
    </div>
  );
}