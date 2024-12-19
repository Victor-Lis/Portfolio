import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Techs from "@/components/Techs";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero/>
      <Techs/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}
