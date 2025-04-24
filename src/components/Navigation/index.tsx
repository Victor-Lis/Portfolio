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
  { id: "#hero", name: "Capa", page: "/" },
  { id: "#techs", name: "Tecnologias", page: "/" },
  { id: "#aboutme", name: "Sobre mim", page: "/" },
  { id: "#projects", name: "Projetos", page: "/" },
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
      <SheetTrigger className="fixed right-3 bottom-3 transform flex flex-col space-y-2 z-50 p-2 max-sm:p-1 bg-primary text-white rounded-md shadow hover:bg-primary/85 border-[1px] border-secondary transition cursor-pointer">
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-40">
        <SheetHeader className="px-4 py-0 pt-3">
          <SheetTitle className="uppercase font-bold">Navegar</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-0.5 px-4">
          {sections.map((section, index) => (
            <a
              key={index}
              className={`my-2 rounded-md hover:bg-primary/10 transition cursor-pointer flex items-center justify-left ${
                `${section.page}${section.id}` === path ? "bg-primary/10" : ""
              }`}
              onClick={() => handleSectionClick(section)}
            >
              {section.page === path && <ChevronRight size={22}/>}
              <span className="mb-1">{section.name}</span>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default dynamic(() => Promise.resolve(Navigation), { ssr: false });