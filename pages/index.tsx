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
import { getMainPage } from "../utils/contentful/getters";
import { CLIENT_RENEG_LIMIT } from "tls";
import Footer from "../components/Footer";

export async function getStaticProps() {
  const id = "74QQgki1QHDyN9rhvmZb81";
  const page = await getMainPage(id);
  //console.log(page)

  return {
    props: {
      header: page.header,
      sections: page.sections,
      footer: page.footer,
    },
  };
}

export default function Home({
  header: { navbar, heroSrc, heroText },
  sections,
  footer,
}) {
  return (
    <>
      <Header
        logoSrc={navbar.logoSrc}
        navigationItems={navbar.navigationItems}
        heroSrc={heroSrc}
        heroContent={
          <div className={heroStyles.heroContent}>
            <h1>{heroText.at(0)}</h1>
            <p>{heroText.at(1)}</p>

            <Link href={"https://localhost:3000"}>
              {heroText.at(2).split("]{").at(0)}
            </Link>
          </div>
        }
      />
      <main className="">
        <h1> UMS hemsida kommer här! </h1>
      </main>
      <Footer
        logoSrc={footer.logoSrc}
        footerImageSrc={footer.footerImageSrc}
        sponsors={footer.sponsors}
        contact={footer.contact}
        socials={footer.socials}
      />
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
