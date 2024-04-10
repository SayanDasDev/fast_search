"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useEffect, useState } from "react";
import Hero from "./_components/hero";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

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

      const res = await fetch(`https://fastsearch.mesayan19.workers.dev/api/search?q=${input}`);
      const data = (await res.json()) as TSearch;

      setSearchResults(data);
    };

    fetchData();
  }, [input]);

  return (
    <div className="h-screen overflow-y-clip w-full bg-neutral-950 relative flex flex-col items-center antialiased pt-10 pb-0">
      <div className="max-w-2xl mx-auto grid grid-cols-1 gap-8 grid-rows-[240px_1fr] h-full p-4 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5 space-y-4">
        <Hero />
        <BackgroundGradient
          className="rounded-[22px]"
          containerClassName="p-0 h-fit"
          brightenOn="focus"
        >
          <Command>
            <CommandInput
              value={input}
              onValueChange={setInput}
              placeholder="Search Countries"
              className={cn(
                { "rounded-b-[22px] ": !input },
                { "border-b border-neutral-700": input }
              )}
            />
            <CommandList>
              {!input ? null : !searchResults ? (
                <CommandEmpty>Loading</CommandEmpty>
              ) : searchResults?.results.length === 0 ? (
                <CommandEmpty>No Results</CommandEmpty>
              ) : (
                searchResults?.results.map((result, i) => (
                  <CommandItem key={i}>{result}</CommandItem>
                ))
              )}
            </CommandList>
          </Command>
        </BackgroundGradient>
      </div>
      <BackgroundBeams />
    </div>
  );
}
