import React from "react";
import ReactMarkdown from "react-markdown";
import { Hero as HeroType, Navbar as NavbarType } from "../../types/Pages";
import Navbar from "./Navbar";

type Props = {
  hero: HeroType;
  navbar: NavbarType;
};

const Hero = ({ hero, navbar }: Props) => {
  return (
    <header
      style={{
        backgroundImage: "url(https:" + hero.heroImage.url + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
      }}
      className="header relative flex flex-col items-center justify-center sm:h-full "
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2] h-full" />

      <Navbar navbar={navbar} />
      <div className="container z-[3] flex justify-center">
        <ReactMarkdown className={" z-[3] heroContent"}>
          {hero.heroContent}
        </ReactMarkdown>
      </div>
    </header>
  );
};

export default Hero;
