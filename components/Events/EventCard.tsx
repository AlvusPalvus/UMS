import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import { EventCard } from "../../types/Topics";

type Props = {
  event: EventCard;
};

const EventCard = ({ event }: Props) => {
  return (
    <div className="card">
      <p className="text-gray-500 text-sm ">{event.date}</p>
      <h3 className="h3">{event.heading}</h3>
      <div className="relative w-64 h-32">
        <Image
          className="object-cover self-center"
          src={"https:" + event.image.url}
          alt={event.image.filename}
          fill
        />
      </div>

      <div className="link">
        <ReactMarkdown className={"fw-regular  "}>{event.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default EventCard;
