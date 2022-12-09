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

  const res = await client.getEntry("74QQgki1QHDyN9rhvmZb81", { include: 4 });

  const sections = res.fields.sections;
  const footer = res.fields.footer;
  const header_content = res.fields.header.fields;
  const hero_src = res.fields.heroImage.fields.file.url;
  console.log(hero_src);
  const hero_text = res.fields.heroText.split("\n");

  console.log(hero_text);
  return {
    props: {
      headerData: {
        header_content,
        hero_src,
        hero_text,
      },
      sections,
      footer,
    },
  };
}

export default function Home({
  headerData: { header_content, hero_src, hero_text },
  sections,
  footer,
}) {
  return (
    <>
      <Header
        headerContent={header_content}
        heroSrc={hero_src}
        heroContent={
          <div>
            <h1>{hero_text}</h1>
          </div>
        }
      />
      <div className="p5">
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
