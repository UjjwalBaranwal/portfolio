import Navigation from "@/components/Hero";
// import Image from "next/image";

export default function Home() {
  return (
      <main
      className="
        relative
        bg-black-100
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
        {/* <div
        className="
        max-w-7xl
        w-full
        "
        > */}
            <Navigation/>
        {/* </div> */}
      </main>
  );
}
