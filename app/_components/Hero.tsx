/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useRef, useState } from "react";
import Contact from "@/app/_components/Contact";
import About from "./About";
import Project from "./Project";
import Navigation from "./Navigation";
import NavButton from "./NavButton";
const Hero = () => {
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
      </Navigation>

      {/* Sections */}
      <div className="flex flex-col justify-center gap-4 w-full mt-24  mx-auto">
        <About aboutRef={aboutRef} />
        <Project projectRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </div>
    </div>
  );
};

export default Hero;
