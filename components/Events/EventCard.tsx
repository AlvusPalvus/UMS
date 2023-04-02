import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import { EventCard } from "../../types/Topics";
import Gallery from "../Gallery";

type Props = {
  event: EventCard;
};

const EventCard = ({ event }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/event/" + event.slug);
  };

  return (
    <div
      className="card flex flex-row cursor-pointer h-2/4 md:max-w-[50%] my-12 m-8"
      onClick={handleClick}
    >
      <div className="relative min-w-[40%] lg:min-w-[30%] h-full">
        <Gallery
          gallery={{
            heading: "",
            images: [event.image],
          }}
        />
      </div>
      <div>
        <p className=" text-sm ">{event.date + " kl. " + event.time}</p>
        <h3 className="h3">{event.heading}</h3>

        <div className="link">
          <ReactMarkdown className={"fw-regular  "} linkTarget="_blank">
            {event.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
