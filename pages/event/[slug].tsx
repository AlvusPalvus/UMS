import React from "react";
import Hero from "../../components/Header/Hero";
import Navbar from "../../components/Header/Navbar";
import { Navbar as NavbarType } from "../../types/Pages";
import {
  parseEventCard,
  parseNewsCard,
} from "../../utils/contentful/assembliesParser";
import { getContentfulClient } from "../../utils/client";
import { parseNavbar } from "../../utils/contentful/pagesParser";
import Image from "next/image";
import { EventCard } from "../../types/Topics";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";

const client = getContentfulClient();
const headerId = "P9esTtWGWhuwPzLPePJ0X";

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "eventCard",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "eventCard",
    "fields.slug": params.slug,
  });

  const event = parseEventCard(items[0]);
  const navbar = await parseNavbar();

  return {
    props: { event, navbar },
  };
};

type Props = {
  event: EventCard;
  navbar: NavbarType;
};

function Event({ event, navbar }: Props) {
  const router = useRouter();
  const hero = {
    heroImage: null,
    heroContent: null,
  };

  return (
    <>
      <Hero hero={hero} navbar={navbar} idFirstSection="noId" />
      <div className="container">
        <button
          className="button flex flex-row justify-center items-center gap-3"
          type="button"
          onClick={() => router.back()}
        >
          <FiArrowLeft />
          Tillbaka
        </button>

        <div className=" even-columns card m-4 lg:min-h-[70vh]">
          <div className="relative">
            <Image
              className="object-cover self-center"
              src={
                event.image
                  ? "https:" + event.image.url
                  : "publicUMS_logo_white.png"
              }
              alt={event.image.filename}
              fill
            />
          </div>
          <div className="p-8">
            <h1 className="fs-primary-heading">{event.heading}</h1>
            <p className="text-sm">{event.date}</p>
            <div className="field link">
              <ReactMarkdown className={"fw-regular  "}>
                {event.body}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
