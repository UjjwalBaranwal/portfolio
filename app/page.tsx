// import Image from "next/image";
"use client";

import Contact from "@/app/_components/Contact";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { useTheme } from "./_context/themeProvider";
import About from "./_components/About";
import NavButton from "./_components/NavButton";
import Navigation from "./_components/Navigation";
import Project from "./_components/Project";
export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("about");
  const sections = [
    { name: "about", ref: aboutRef },
    { name: "projects", ref: projectsRef },
    { name: "contact", ref: contactRef },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(({ ref }) => {
        const rect = ref.current?.getBoundingClientRect();
        return rect && rect.top >= 0 && rect.top < window.innerHeight / 2;
      });

      console.log("Current", current?.name);

      setActiveSection(current?.name || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref: any) => {
    if (ref?.current) {
      const offset = 100; // Distance from the top of the browser
      const topPosition =
        ref?.current.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };
  return (
    <main
      className="
        relative
        
        flex
        items-center
        justify-center
        mx-auto
        flex-col
        overflow-hidden
        sm:px-10 
        px-5
      "
    >
      <div className="max-w-7xl w-full ">
        {/* <div className="mx-auto flex justify-center items-center "> */}

        <Navigation>
          <NavButton
            label="About"
            targetSection="about"
            activeSection={activeSection}
            onClick={() => scrollToSection(aboutRef)}
          />
          <NavButton
            label="Projects"
            targetSection="projects"
            activeSection={activeSection}
            onClick={() => scrollToSection(projectsRef)}
          />
          <NavButton
            label="Contact"
            targetSection="contact"
            activeSection={activeSection}
            onClick={() => scrollToSection(contactRef)}
          />
          <button onClick={toggleTheme}>
            {theme == "dark" ? (
              <FiMoon className="dark:text-white" />
            ) : (
              <FiSun />
            )}
          </button>
          <Link href={"/account"}>
            <IoPersonOutline />{" "}
          </Link>
        </Navigation>

        {/* Sections */}
        <div className="flex flex-col justify-center gap-4 w-full mt-24  mx-auto ">
          <About aboutRef={aboutRef} />
          <Project projectRef={projectsRef} />
          <Contact contactRef={contactRef} />
        </div>
      </div>
    </main>
  );
}
