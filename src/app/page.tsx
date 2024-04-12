import Image from "next/image";
import AboutSection from "./components/aboutSection/AboutSection";
import HeroSection from "./components/heroSection/HeroSection";
import ProjectSection from "./components/projectSection/ProjectSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
    </main>
  );
}
