import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { NewsCard } from "../../types/Topics";
import Gallery from "../Gallery";

type Props = {
    card: NewsCard;
    width: number;
    index: number
};

const NewsCard = ({ card, width, index }: Props) => {


    return (
        <Link id={`news-index-${index}`} className="cursor-pointer shrink-0 lg:basis-2/6  md:basis-1/2 basis-full snap-start" href={"/news/" + card.slug}>
            <div className="card bg-neutral-100 link p-4 flex flex-col gap-1.5 h-full">

                <span className="text-sm text-gray">{card.date}</span>
                <h3 className="h3 whitespace-pre-wrap p-0 ">{card.heading}</h3>
                <p>
                    {card.preview}
                </p>

                {card.image ? (
                    <div className="relative flex-grow m-4 ">
                        <Gallery
                            gallery={{
                                heading: "",
                                images: [card.image],
                            }}
                        />
                    </div>
                ) : (
                    <div className="relative flex-grow m-4 "> </div>
                )}
                <div className=" cursor-pointer flex flex-nowrap items-center self-end">
                    <span>Läs mer</span>
                    <FiChevronRight className="text-2xl" />
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
