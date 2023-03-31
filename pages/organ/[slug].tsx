import React from "react";
import Hero from "../../components/Header/Hero";
import Navbar from "../../components/Header/Navbar";
import { Navbar as NavbarType, Page } from "../../types/Pages";
import { parseNewsCard } from "../../utils/contentful/assembliesParser";
import { getContentfulClient } from "../../utils/client";
import { getMainPage, parseNavbar } from "../../utils/contentful/pagesParser";
import Image from "next/image";
import { NewsCard } from "../../types/Topics";
import ReactMarkdown from "react-markdown";
import Section from "../../components/Section";
import { FiArrowLeft } from "react-icons/fi";
import router, { useRouter } from "next/router";

const client = getContentfulClient();

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "subPage",
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
    content_type: "subPage",
    "fields.slug": params.slug,
  });
  console.log(items[0].sys.id);
  const page = await getMainPage(items[0].sys.id);
  console.log(page);

  return {
    props: { page, navbar: page.header.navbar },
    revalidate: 10,
  };
};

type Props = {
  page: Page;
  navbar: NavbarType;
};

const Organ = ({ page, navbar }: Props) => {
  const router = useRouter();
  const hero = {
    heroImage: null,
    heroContent: null,
  };

  return (
    <>
      <Hero hero={hero} navbar={navbar} idFirstSection="noId" />
      <div className="container even-columns card m-4 lg:min-h-[70vh]">
        <main className="">
          <button
            className="button flex flex-row justify-center items-center gap-3"
            type="button"
            onClick={() => router.back()}
          >
            <FiArrowLeft />
            Tillbaka
          </button>
          {page.sections.map((section, i) => (
            <Section section={section} key={i} />
          ))}
        </main>
      </div>
    </>
  );
};

export default Organ;
