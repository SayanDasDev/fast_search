import { Icons } from "@/components/shared/icons";
import { Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import React from "react";
import { Sriracha } from "next/font/google";

const sriracha = Sriracha({weight: "400", subsets: ["latin"]});

interface HeroProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Hero = ({ ...props }: HeroProps) => {
  return (
    <div {...props}>
      <Icons.Logo className="h-24 mx-auto" />
      <h1 className="text-5xl md:text-7xl pt-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        FastSearch
      </h1>
      <p className="relative z-10 px-4 pt-2 text-neutral-400 text-lg max-[380px]:text-base md:text-xl lg:text-2xl font-semibold lg:leading-10 text-center">
        A superfast search API by&nbsp;
        <Link href={'https://dev.sayandas.me'} className={`${sriracha.className} scale-105 translate-y-[-2px] px-2 mb-1 relative w-fit inline-block bg-clip-text transition-all duration-500 hover:text-transparent bg-gradient-to-r from-teal-400 to-fuchsia-600`}>
          @SayanDasDev
          <Icons.GithubLinkLine className="absolute bottom-[-2px] left-0 w-full" />
        </Link>&nbsp;to fetch country names&nbsp;
        <Highlight className="text-white whitespace-nowrap">
          in milliseconds
        </Highlight>
      </p>
    </div>
  );
};

export default Hero;
