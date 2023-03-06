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
        <div className="container border cursor-pointer" onClick={handleClick}>
            <p className="text-gray-500 text-sm ">{card.date}</p>
            <h3 className="h3">{card.heading}</h3>
            <div className="">
                <ReactMarkdown className={"fw-regular  "}>
                    {card.body}
                </ReactMarkdown>
            </div>
            <Image
                src={"https:" + card.image.url}
                alt={card.image.filename}
                width={width}
                height={100}
            />
        </div>
    );
};

export default NewsCard;
