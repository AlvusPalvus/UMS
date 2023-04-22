import React from "react";
import Hero from "../../components/Header/Hero";
import Navbar from "../../components/Header/Navbar";
import { Navbar as NavbarType } from "../../types/Pages";
import { parseNewsCard } from "../../utils/contentful/assembliesParser";
import { getContentfulClient } from "../../utils/client";
import { parseNavbar } from "../../utils/contentful/pagesParser";
import Image from "next/image";
import { NewsCard } from "../../types/Topics";
import ReactMarkdown from "react-markdown";
import { FiArrowLeft } from "react-icons/fi";
import router, { useRouter } from "next/router";

const client = getContentfulClient();

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "newsCard",
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
        content_type: "newsCard",
        "fields.slug": params.slug,
    });

    const news = parseNewsCard(items[0]);
    const navbar = await parseNavbar();

    return {
        props: { news, navbar },
        revalidate: 10,
    };
};

type Props = {
    news: NewsCard;
    navbar: NavbarType;
};

function Nyhet({ news, navbar }: Props) {
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
                <div className=" even-columns  m-4 lg:min-h-[70vh]">
                    <div className="relative">
                        <Image
                            className="object-cover self-center"
                            src={"https:" + news.image.url}
                            alt={news.image.filename}
                            fill
                        />
                    </div>
                    <div className="p-8">
                        <h1 className="fs-primary-heading">{news.heading}</h1>
                        <p className="text-sm">{news.date}</p>
                        <div className="field link">
                            <ReactMarkdown
                                className={"fw-regular  "}
                                linkTarget="_blank"
                            >
                                {news.body}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nyhet;
