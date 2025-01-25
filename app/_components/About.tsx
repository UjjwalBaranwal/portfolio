"use client"
import { RefObject } from "react";
import { Card } from "./Card";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiCodeforces, SiInstagram, SiLeetcode } from "react-icons/si";
import Tech from "./Tech";

interface AboutProps {
  aboutRef: RefObject<HTMLDivElement>;
}

function About({ aboutRef }: AboutProps) {
  return (
    <div ref={aboutRef} className="min-h-screen bg-black p-8 border-b">
      <div className="flex justify-between items-center gap-x-4 h-full w-full p-1 border-black border">
        {/* Cards */}
        <div className="w-1/2 h-full p-1 flex flex-col items-start gap-0">
          <Card
            heading="Design"
            description="I am proficient in designing web pages"
            Img_link={[
              "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://plus.unsplash.com/premium_vector-1720102933682-b56812ca7b32?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ]}
          />

          <Card
            heading="Full Stack Developer"
            description="I am a full stack developer with 2-3 amazing projects showcasing my skill"
            Img_link={[
              "https://plus.unsplash.com/premium_vector-1733712607733-986d23ee4753?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://plus.unsplash.com/premium_vector-1734441297806-53ce5411d81a?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ]}
          />

          <Card
            heading="Coding Enthusiast"
            description="I am proficient in problem solving with knowledge of DSA"
            profile={["https://leetcode.com/u/shikharpandya007/"]}
            Img_link={[
              "https://plus.unsplash.com/premium_photo-1681810994162-43dbe0919d3f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://plus.unsplash.com/premium_vector-1734336902160-67690b812e1b?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://plus.unsplash.com/premium_vector-1734169925518-d6397ffc9148?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ]}
          />
        </div>

        {/* Text */}
        <div className="w-1/2 h-1/2 p-1 flex flex-col items-center gap-4 justify-start">
          <div className="my-8 text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-wide mb-4">
              Hi, I'm <span className="text-blue-500">Shikhar Pandya</span>
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              A passionate{" "}
              <span className="text-blue-500 font-semibold">
                Full Stack Developer
              </span>{" "}
              and{" "}
              <span className="text-blue-500 font-semibold">
                Creative Designer
              </span>
              , dedicated to building solutions that inspire, empower, and
              transform ideas into reality.
            </p>
          </div>

          {/* Profile photo in a circle */}
          <div className="flex flex-col items-center mt-6">
            <img
              src="shikhar_photo.jpeg"
              alt="Shikhar Pandya"
              className="w-96 h-96 rounded-full text-white border-4 border-blue-500 shadow-lg mb-4"
            />

            {/* Social Media Profiles */}
            <div className="flex gap-6 text-white">
              <a
                href="https://www.linkedin.com/in/shikhar-pandya/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/shikharpandya007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub size={30} />
              </a>

              <div className="border-l-2 border-white"></div>
              <a
                href="https://leetcode.com/u/shikharpandya007/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                <SiLeetcode size={30} />
              </a>

              <a
                href="https://codeforces.com/profile/shikharpandya007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <SiCodeforces size={30} />
              </a>

              <div className="border-l-2 border-white">
              </div>
              <a
                href="https://www.instagram.com/shikhar_0487/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <SiInstagram size={30} />
              </a>
              <a
                href="https://twitter.com/your_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Animated balls */}
      <div>
        {/* <Tech/> */}
      </div> 
    </div>
  );
}

export default About;
