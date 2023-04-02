import React from "react";
import { NewsSection } from "../../types/Assemblies";
import NewsCard from "./NewsCard";
import Image from "next/image";

type Props = {
  section: NewsSection;
};

const Slider = ({ section }: Props) => {
  return (
    <section className="section" id={section.slug}>
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

      <div className="bg-accent-100 ">
        <div className="container  h-fit overflow-hidden bg-white bg-opacity-70">
          <div className="h-fit bg-white flex p-2 gap-2 lg:p-8 lg:gap-8 overflow-x-scroll lg:my-12 lg:mx-8 ">
            {section.news.map((card) => (
              <NewsCard card={card} width={300} key={card.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
