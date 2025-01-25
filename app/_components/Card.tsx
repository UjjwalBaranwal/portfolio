"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../_components/ui/3d-card";
import Link from "next/link";

interface CardProps {
  heading: string;
  description: string;
  profile?: string[];
  Img_link: string[];
}

export function Card({ heading, description, Img_link, profile }: CardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Img_link.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [Img_link.length]);

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-full h-full rounded-xl p-4 border">
        {/* Heading */}
        <CardItem
          translateZ="25"
          className="text-lg font-bold text-neutral-600 dark:text-white"
        >
          {heading}
        </CardItem>
        {/* Description */}
        <CardItem
          as="p"
          translateZ="30"
          className="text-neutral-500 text-xs max-w-xs mt-1 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        {/* Image */}
        <CardItem translateZ="50" className="w-full mt-2">
          <Image
            src={Img_link[currentImageIndex]}
            height="1000"
            width="1000"
            className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* Coding Profile Link */}
        {heading === "Coding Enthusiast" && profile && (
          <CardItem as="div" translateZ="30" className="mt-4 flex justify-evenly items-center gap-10">
            <Link href={profile[0]} target="_blank" className="flex justify-center items-center gap-1">
              <Image
                src="/leetcode_icon.png" 
                alt="https://leetcode.com/u/shikharpandya007/"
                width={30}
                height={30}
                className="hover:scale-110 transition-transform"
              />
              <div className="text-wrap w-10 text-bold text-center text-sm">
                Leetcode Profile
              </div>
            </Link>

            <Link href={profile[0]} target="_blank" className="flex justify-center items-center gap-1">
              <Image
                src="/codeforces.png" 
                alt="https://codeforces.com/profile/shikharpandya007"
                width={30}
                height={30}
                className="hover:scale-110 transition-transform"
              />
              <div className="text-wrap text-bold w-10 text-center text-sm">
                Codeforces Profile
              </div>
            </Link>

          </CardItem>
        )}
      </CardBody>
    </CardContainer>
  );
}
