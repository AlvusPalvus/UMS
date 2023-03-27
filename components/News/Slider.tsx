import React from "react";
import { NewsSection } from "../../types/Assemblies";
import NewsCard from "./NewsCard";

type Props = {
  section: NewsSection;
};

const Slider = ({ section }: Props) => {
  return (
    <div className="container ">
      <h2 className="fs-secondary-heading">{section.heading}</h2>
      <div className="grid grid-cols-5 gap-1 ">
        {section.news.map((card) => (
          <NewsCard card={card} width={300} key={card.slug} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
