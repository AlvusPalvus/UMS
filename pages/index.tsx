import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import heroStyles from "../styles/Header.module.css";
import Link from "next/link";
import Header from "../components/Header";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getContentfulClient } from "../utils/contentful/client";
import { getPage } from "../utils/contentful/getters";

export async function getStaticProps() {
  const id = "74QQgki1QHDyN9rhvmZb81";
  const page = getMainPage(id);

  const sections = page.fields.sections;
  const footer = page.fields.footer;
  const header_content = page.fields.header.fields;
  const hero_src = page.fields.heroImage.fields.file.url;
  console.log(hero_src);
  const hero_text = page.fields.heroText.split("\n");

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
          <div className={heroStyles.heroContent}>
            <h1>{hero_text.at(0)}</h1>
            <p>{hero_text.at(1)}</p>

            <Link href={"https://localhost:3000"}>
              {hero_text.at(2).split("]{").at(0)}
            </Link>
          </div>
        }
      />
      <div className="">
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
