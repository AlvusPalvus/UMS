import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { NewsCard } from "../../types/Topics";
import Gallery from "../Gallery";

type Props = {
  card: NewsCard;
  width: number;
};

const NewsCard = ({ card, width }: Props) => {
  const router = useRouter();

  let preview = card.body;
  if (preview.length > 160) {
    let str = card.body.slice(0, 100).split(" ");
    str.pop();
    preview = str.join(" ");

    if (preview.charAt(preview.length - 1) == ",") {
      preview = preview.slice(0, -1);
    }
    preview = preview + "...";
  }

  return (
    <div className="card bg-neutral-100  link py-4 flex flex-col gap-1.5 h-[400px] lg:h-[600px] max-w-[500px] min-w-[90%] md:min-w-[40%] xl:min-w-[30%]">
      <div className="flex md:flex-nowrap md:gap-3 justify-between items-start pb-1 px-2">
        <h3 className="h3 p-0 truncate">{card.heading}</h3>
        <span className="text-sm text-gray">{card.date}</span>
      </div>

      <ReactMarkdown className={"fw-regular px-2"} linkTarget="_blank">
        {preview}
      </ReactMarkdown>
      <div className="relative flex-grow ">
        <Gallery
          gallery={{
            heading: "",
            images: [card.image],
          }}
        />
      </div>
      <Link
        className=" cursor-pointer flex flex-nowrap items-center self-end"
        href={"/news/" + card.slug}
      >
        <span>Läs mer</span>
        <FiChevronRight className="text-2xl pt-1" />
      </Link>
    </div>
  );
};

export default NewsCard;
