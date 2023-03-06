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
        <div
            style={{
                backgroundImage: "url(https:" + hero.heroImage.url + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
            }}
            className="shadow-regular relative flex items-center justify-center bg-fixed bg-center sm:h-3/5 "
        >
            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2] h-full" />
            <Navbar navbar={navbar} />
            <div className="max-w-[1240px] p-5 text-white z-[2] mt-[10rem] mb-[10rem]">
                <ReactMarkdown
                    className={"max-w-[620px] heroContent buttonHome"}
                >
                    {hero.heroContent}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Hero;
