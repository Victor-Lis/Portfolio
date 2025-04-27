import Hero from "@/app/components/Hero";
import AboutMe from "@/app/components/AboutMe";
import Techs from "@/app/components/Techs";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero/>
      <Techs/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}
