import React from "react";
import { NewsSection } from "../../types/Assemblies";
import NewsCard from "./NewsCard";
import Image from "next/image";
import Slider from "../Slider";

type Props = {
  section: NewsSection;
};

const NewsSection = ({ section }: Props) => {
  return (
    <section className="section border" id={section.slug} >
      {section.image ? (
        <div className="relative w-full 2xl:container m-auto">
          <Image
            style={{ objectFit: "cover", zIndex: -1 }}
            src={"https:" + section.image.url}
            alt={""}
            fill
          />
          <div className="z-[1] pt-36 lg:pt-72">
            <br />
          </div>
          <h2 className="z-10 container pt-12 px-12 pb-4 fs-secondary-heading text-neutral-900 bg-white bg-opacity-70">
            {section.heading}
          </h2>
        </div>
      ) : (
        <h2 className="fs-secondary-heading">{section.heading}</h2>
      )}
      <Slider news={section.news} />


    </section>
  );
};

export default NewsSection;
