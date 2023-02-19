import React from "react";
import Hero from "../../components/Header/Hero";
import Navbar from "../../components/Header/Navbar";
import { Navbar as NavbarType } from "../../types/Pages";
import { parseNewsCard } from "../../utils/contentful/assembliesParser";
import { getContentfulClient } from "../../utils/contentful/client";
import { parseNavbar } from "../../utils/contentful/pagesParser";

const client = getContentfulClient();
const headerId = "P9esTtWGWhuwPzLPePJ0X";

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

  const res = await client.getEntries(
    { content_type: "header" },
    { include: 4 }
  );

  const nav_res = await client.getEntry(res.items[0].sys.id, { include: 4 });
  const news = parseNewsCard(items[0]);
  const navbar = parseNavbar(nav_res);

  return {
    props: { news, navbar },
  };
};

type Props = {
  news: any;
  navbar: NavbarType;
};

function Nyhet({ news, navbar }: Props) {
  return (
    <div>
      <Navbar logo={navbar.logo} navigationItems={navbar.navigationItems} />
      <Hero
        heroImage={{
          url: "https://images.ctfassets.net/bd3towj90lhq/2bN6DNrhWTFpX4NIMXPzOA/b0788bf27bd64980586414857b11771f/homepage-hero.png",
          width: 1400,
          height: 600,
          filename: "",
        }}
        heroContent={""}
      />
      Nyhet detaljer
      <h1>{news.heading}</h1>
      <p>{news.date}</p>
    </div>
  );
}

export default Nyhet;
