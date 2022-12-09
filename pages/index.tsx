import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import heroStyles from "../styles/Header.module.css";
import Link from "next/link";
import Header from "../components/Header";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  const res = await client.getEntry("HDZTWw3xASIbiFDQOeh2W", { include: 4 });
  console.log(res);

  const hero_src = res.fields.hero.fields.file.url;
  const page_title = res.fields.pageTitle;
  const sections = res.fields.sections;

  return {
    props: {
      hero_src,
      page_title,
      sections,
    },
  };
}

export default function Home({ hero_src, page_title, sections }) {
  return (
    <>
      <Header
        heroSrc={hero_src}
        heroContent={
          <div>
            <h1>{page_title}</h1>
          </div>
        }
      />
      <div>
        {" "}
        <h1> UMS hemsida kommer här! </h1>
      </div>
    </>
  );
}

/*
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { title, description } = node.data.target.fields;
      return <Button title={title} description={description} />
    }
  }
};
*/

// documentToReactComponents(document, options); // Används för rich text
