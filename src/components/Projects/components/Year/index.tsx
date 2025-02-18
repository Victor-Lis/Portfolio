import { useProjectStore } from "@/data/projectManager";

export default function Year({ year }: { year: number }) {
  const { setSelectedYear, selectedYear } = useProjectStore()
  const handleSelectYear = () => setSelectedYear(year)
  const isSelected = (year === selectedYear)
  return (
    <h2 className={`text-tertiary border-b-2 border-primary max-[500px]:text-xl text-4xl cursor-pointer hover:bg-primary/5 hover:duration-150 pl-1.5 pr-3.5 mb-2 duration-150 ${isSelected && "bg-primary/5"}`} onClick={handleSelectYear} onKeyDown={handleSelectYear}>
      {year}
    </h2>
  );
}
