"use client"
import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [activeSection,setActiveSection]=useState<string>("about");


  
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: "about", ref: aboutRef },
        { name: "projects", ref: projectsRef },
        { name: "contact", ref: contactRef },
      ];

      const current = sections.find(({ ref }) => {
        const rect = ref.current?.getBoundingClientRect();
        return rect && rect.top >= 0 && rect.top < window.innerHeight / 2;
      });

      console.log("Current",current?.name)

      setActiveSection(current?.name || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const scrollToSection = (ref:any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
    className="max-w-7xl w-full " 
    >

      <div className="mx-auto flex justify-center items-center ">
        <nav className="container flex justify-center items-center space-x-4 bg-gray-100 p-4 top-5 mb-4 z-50 shadow-md fixed gap-4 rounded-lg">
          
          <button
            onClick={() => {scrollToSection(aboutRef);()=>setActiveSection("about")}}
            className="text-gray-700 hover:text-blue-500 text-md font-medium relative transition-all nav-link"
          >
            About
            <span
              className={`absolute left-0 bottom-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                activeSection === "about" ? "w-full" : ""
              }`}
            ></span>
          </button>


          <button
            onClick={() => {scrollToSection(projectsRef);setActiveSection("projects")}}
            className="text-gray-700 hover:text-blue-500 text-md font-medium relative transition-all nav-link"
          >
            Projects
            <span
              className={`absolute left-0 bottom-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                activeSection === "projects" ? "w-full" : ""
              }`}
            ></span>
          </button>


          <button
            onClick={() => {scrollToSection(contactRef);setActiveSection("contact")}}
            className="text-gray-700 hover:text-blue-500 text-md font-medium relative transition-all nav-link"
          >
            Contact
               <span
                className={`absolute left-0 bottom-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                  activeSection === "contact" ? "w-full" : ""
                }`}
              ></span>
          </button>
        </nav>
      </div>
    

      {/* Sections */}
      <div
      className="flex flex-col justify-center gap-4 w-full mt-24  mx-auto"
      >
        <div ref={aboutRef} className="min-h-screen bg-red-50 p-8 border-b">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-600">This is the About section of the page.</p>
        </div>

        <div ref={projectsRef} className="min-h-screen bg-blue-50 p-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600">This is the Projects section of the page.</p>
        </div>

        <div ref={contactRef} className="min-h-screen bg-green-50 p-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600">This is the Contact section of the page.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
