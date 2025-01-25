"use client"
import { RefObject } from "react";

import Robot from "./Robot";
import FormContact from "@/app/_components/FormContact";

// Define props type properly
interface ContactProps {
  contactRef: RefObject<HTMLDivElement>;
}

function Contact({ contactRef }: ContactProps) {
  return (
    <div ref={contactRef} className="min-h-screen bg-green-50 p-8 border-b">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-[6fr_10fr]">
        <FormContact />
        <div className="min-h-screen flex items-center justify-center bg-[#100D25] p-6 rounded-lg">
          <Robot />
        </div>
      </div>
    </div>
  );
}

export default Contact;
