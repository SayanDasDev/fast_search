"use client";

import { Icons } from "@/components/shared/icons";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "./_components/hero";

export default function Home() {
  type TSearch = {
    results: string[];
    duration: number;
  };

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState<TSearch>();

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setSearchResults(undefined);

      const res = await fetch(`/api/search?q=${input}`);
    };

    fetchData();
  }, [input]);

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center antialiased pt-10">
      <div className="max-w-2xl mx-auto grid grid-cols-1 gap-8 grid-rows-[240px_1fr] h-full p-4 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5 space-y-4">
        <Hero />
        <BackgroundGradient
          className="rounded-[22px]"
          containerClassName="p-0 h-fit"
          brightenOn="focus"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Countries"
            className="rounded-[22px] text-neutral-200 p-3 px-4 w-full relative z-10 outline-none bg-neutral-950 placeholder:text-neutral-700"
          />
        </BackgroundGradient>
      </div>
      <BackgroundBeams />
    </div>
  );
}
