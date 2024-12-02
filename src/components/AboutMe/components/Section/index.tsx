export default function Section({children, aosData}:{children: React.ReactNode, aosData: string}) {
  return (
    <div
      className={`mt-10 w-full flex flex-col ${aosData.includes("right") ? "justify-end items-end": "justify-start items-start"}`}
      data-aos={aosData}
    >
      {children}
    </div>
  );
}
