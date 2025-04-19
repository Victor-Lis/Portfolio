"use client";
import dynamic from "next/dynamic";
import { Menu, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";

// const sections = ["#hero", "#techs", "#aboutme", "#projects", "#footer"];
const sections = [
  { id: "#hero", name: "Hero", page: "/" },
  { id: "#techs", name: "Techs", page: "/" },
  { id: "#aboutme", name: "About Me", page: "/" },
  { id: "#projects", name: "Projects", page: "/" }
]

function Navigation() {
  const path = usePathname();
  const router = useRouter();

  const handleSectionClick = (section: { id: string; page: string }) => {
    if (section.page === path) {
      document
        .querySelector(section.id)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`${section.page}${section.id}`);
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="fixed right-3 bottom-3 max-sm:right-1 max-sm:bottom-1 transform flex flex-col space-y-2 z-50 p-2 max-sm:p-1 bg-primary text-white rounded-md shadow hover:bg-primary/85 border-[1px] border-secondary transition cursor-pointer">
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-36">
        <SheetHeader className="px-4 pt-4 pb-0">
          <SheetTitle className="uppercase font-bold">Navegar</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-0.5 px-4">
          {sections.map((section, index) => (
            <a
              key={index}
              className={`p-2 rounded-md hover:bg-primary/10 transition cursor-pointer flex items-center justify-left ${
                `${section.page}${section.id}` === path ? "bg-primary/10" : ""
              }`}
              onClick={() => handleSectionClick(section)}
            >
              {section.page === path && <ChevronRight />}
              <span className="mb-1">{section.name}</span>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default dynamic(() => Promise.resolve(Navigation), { ssr: false });