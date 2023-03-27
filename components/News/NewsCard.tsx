import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import { NewsCard } from "../../types/Topics";

type Props = {
  card: NewsCard;
  width: number;
};

const NewsCard = ({ card, width }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/news/" + card.slug);
  };

  return (
    <div className="card border cursor-pointer w-4/6" onClick={handleClick}>
      <div
        style={{ width: "200px", minHeight: "100px", position: "relative" }}
        className="grid-span-1"
      >
        <Image
          style={{ objectFit: "cover" }}
          src={"https:" + card.image.url}
          alt={card.image.filename}
          fill
        />
      </div>
      <div className="flex flex-col space-between grid-span-4">
        <p className="text-gray-500 text-sm ">{card.date}</p>
        <h3 className="h3">{card.heading}</h3>
        <div className="">
          <ReactMarkdown className={"fw-regular  "}>{card.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
