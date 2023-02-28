import React from "react";
import { NewsSection } from "../../types/Assemblies";
import NewsCard from "./NewsCard";

type Props = {
  section: NewsSection;
};

const Slider = ({ section }: Props) => {
  return (
    <div>
      <h2 className="h2">{section.heading}</h2>
      {section.news.map((card) => (
        <NewsCard card={card} width={300} />
      ))}
    </div>
  );
};

export default Slider;
