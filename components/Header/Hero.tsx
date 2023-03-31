import React from "react";
import ReactMarkdown from "react-markdown";
import { FiChevronDown } from "react-icons/fi";
import { Hero as HeroType, Navbar as NavbarType } from "../../types/Pages";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

type Props = {
  hero: HeroType;
  navbar: NavbarType;
  idFirstSection: string;
};

const Hero = ({ hero, navbar, idFirstSection }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    let path = router.pathname + "/#" + idFirstSection;
    router.push(path, path, { scroll: false });
  };
  return (
    <>
      {hero.heroImage ? (
        <header
          style={{
            backgroundImage: "url(https:" + hero.heroImage.url + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
          className="relative flex flex-col items-center justify-center max-h-[120vh] sm:h-fit "
        >
          {/* Overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2] h-full" />

          <Navbar navbar={navbar} />
          <div className="container z-[3] flex justify-center">
            <ReactMarkdown className={"heroContent"}>
              {hero.heroContent}
            </ReactMarkdown>
          </div>
          <FiChevronDown
            onClick={handleClick}
            className="relative bottom-0 text-2xl text-white z-[3] mb-1 cursor-pointer hover:opacity-75"
          />
        </header>
      ) : (
        <header className="bg-primaryGreen p-4 relative w-[100vw] min-h-[120px] lg:min-h-[200px] z-[1]">
          <Navbar navbar={navbar} />
          <div className="h-full"> </div>
        </header>
      )}{" "}
    </>
  );
};

export default Hero;
