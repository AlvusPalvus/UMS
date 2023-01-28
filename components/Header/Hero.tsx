import React from "react";
import ReactMarkdown from "react-markdown";
import headerStyles from "../../styles/Header.module.css";
import { Hero as HeroType } from "../../types/Pages";

const Hero = ({ heroImage, heroContent }: HeroType) => {
    console.log(heroImage);
    return (
        <div
            style={{
                backgroundImage: "url(https:" + heroImage.url + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
            }}
            className="relative flex items-center justify-center bg-fixed bg-center h-screen sm:h-3/5"
        >
            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2] h-full" />
            <div className="p-5 text-white z-[2] mt-[10rem] mb-[10rem]">
                <ReactMarkdown className={"heroContent container"}>
                    {heroContent}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Hero;
