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

export async function getStaticProps() {
  const id = "74QQgki1QHDyN9rhvmZb81";
  const page = await getMainPage(id);

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
  console.log(sections[0].cards[0]);
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
        <Card
          heading={sections[0].cards[0].heading}
          body={sections[0].cards[0].body}
          buttons={sections[0].cards[0].buttons}
        />
        <h1> UMS hemsida kommer här! </h1>
        <div>
          {/*sections.map((section) => {
            if (section.cards !== null) {
              section.cards.map((card) => {
                <Card
                  heading={card.heading}
                  body={card.body}
                  buttons={card.buttons}
                ></Card>;
              });
            }
          })*/}
        </div>
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
