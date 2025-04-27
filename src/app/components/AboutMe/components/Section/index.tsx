export default function Section({children, aosData}:{children: React.ReactNode, aosData: string}) {
  return (
    <div
      className={`mt-14 w-full flex flex-col ${aosData.includes("left") ? "justify-start items-start" : "justify-end items-end"}`}
      data-aos={aosData}
    >
      {children}
    </div>
  );
}
