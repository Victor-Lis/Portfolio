import { useProjectStore } from "@/data/projectManager";
import Year from "../Year";

export default function ProjectsYears() {
  const { getYears } = useProjectStore();

  return (
    <div
      className="flex flex-col justify-start items-start gap-y-3 max-[500px]:pr-2 pr-12 border-r-[7px] border-primary"
      data-aos="fade-right"
    >
      <h1
        className={
          "max-[730px]:text-6xl max-[500px]:text-4xl uppercase text-primary font-bold text-8xl bebas-neue"
        }
      >
        Projetos
      </h1>
      {getYears().map((year) => (
        <Year year={year} key={year} />
      ))}
    </div>
  );
}
