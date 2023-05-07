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
    console.log(card.preview);

    return (
        <Link className="cursor-pointer" href={"/news/" + card.slug}>
            <div className="card bg-neutral-100 link py-4 flex flex-col gap-1.5 h-[400px] lg:h-[600px] max-w-[500px] min-w-[90%] md:min-w-[40%] xl:min-w-[30%]">
                <div className="flex flex-col md:flex-nowrap md:gap-3 justify-between items-start pb-1 px-2">
                    <span className="text-sm text-gray">{card.date}</span>
                    <h3 className="h3 p-0 truncate">{card.heading}</h3>
                </div>

                <ReactMarkdown
                    className={"fw-regular px-2"}
                    linkTarget="_blank"
                >
                    {card.preview}
                </ReactMarkdown>
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
                    <FiChevronRight className="text-2xl pt-1" />
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
