import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero/>
      <AboutMe/>
      <Hero/>
      <AboutMe/>
      <Hero/>
      <AboutMe/>
      <Hero/>
      <AboutMe/>
      <Hero/>
      <AboutMe/>
    </div>
  );
}