import { useProjectStore } from "@/data/projectManager";

export default function Year({ year }: { year: number }) {
  const { setSelectedYear, selectedYear } = useProjectStore()
  const handleSelectYear = () => setSelectedYear(year)
  const isSelected = (year === selectedYear)
  return (
    <h2 className={`text-tertiary border-b-4 border-primary max-[500px]:text-2xl text-4xl cursor-pointer hover:bg-primary/5 hover:duration-150 pt-1.5 pl-2 pr-4 mb-2 duration-150 ${isSelected && "bg-primary/5"}`} onClick={handleSelectYear} onKeyDown={handleSelectYear}>
      {year}
    </h2>
  );
}
