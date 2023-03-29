import Image from "next/image";
import { useRouter } from "next/router";
import { relative } from "path";
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
    <div
      className="card cursor-pointer h-fit md:max-w-[25%] my-12 m-8"
      onClick={handleClick}
    >
      <div className=" p-2">
        <p className="text-gray-500 text-sm ">{card.date}</p>
        <h3 className="h3">{card.heading}</h3>

        <Image
          style={{ objectFit: "cover", position: "relative" }}
          src={"https:" + card.image.url}
          alt={card.image.filename}
          width={card.image.width}
          height={card.image.height}
        />
        <div className="link">
          <ReactMarkdown className={"fw-regular  "}>{card.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
