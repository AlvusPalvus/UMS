import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import heroStyles from "../styles/Header.module.css";
import Link from "next/link";
import Header from "../components/Header";
import { getMainPage } from "../utils/contentful/getters";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Section from "../components/Section";

export async function getStaticProps() {
  const id = "74QQgki1QHDyN9rhvmZb81";
  const page = await getMainPage(id);
  //console.log(page);
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
  //console.log(sections);
  return (
    <>
      <Header
        logoSrc={navbar.logoSrc}
        navigationItems={navbar.navigationItems}
        heroSrc={heroSrc}
        heroContent={
          <div className={heroStyles.heroContent}>
            <h1>{heroText}</h1>
          </div>
        }
      />
      <main className="">
        <h1> UMS hemsida kommer här! </h1>
        {sections.map((section) => (
          <Section
            key={section.toString()}
            heading={section.heading}
            columns={section.columns}
            backgroundColor={""}
          />
        ))}
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

<Header
        logoSrc={navbar.logoSrc}
        navigationItems={navbar.navigationItems}
        heroSrc={heroSrc}
        heroContent={
          <div className={heroStyles.heroContent}>
            <h1>{heroText}</h1>
          </div>
        }
      />
    


*/

// documentToReactComponents(document, options); // Används för rich text
