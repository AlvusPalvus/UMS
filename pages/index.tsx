import Head from "next/head";
import { getMainPage } from "../utils/contentful/pagesParser";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section";
import Link from "next/link";
import Hero from "../components/Header/Hero";
import Navbar from "../components/Header/Navbar";

export async function getStaticProps() {
  const id = "74QQgki1QHDyN9rhvmZb81";
  const page = await getMainPage(id);

  return {
    props: {
      header: page.header,
      sections: page.sections,
      footer: page.footer,
    },
    revalidate: 10,
  };
}

export default function Home({ header, sections, footer }) {
  return (
    <>
      <Head>
        <title>Umeå medicinska studentkår - home</title>
        <meta
          property="og:title"
          content="Umeå medicinska studentkår - start"
          key="title"
        />
      </Head>

      <Hero
        hero={header.hero}
        navbar={header.navbar}
        idFirstSection={sections[0].slug}
      />
      <main className="">
        {sections.map((section, i) => (
          <Section section={section} key={i} />
        ))}
      </main>

      <Footer
        logo={footer.logo}
        backgroundImage={footer.backgroundImage}
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
