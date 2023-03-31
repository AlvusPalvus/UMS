import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Header/Hero";
import Navbar from "../../components/Header/Navbar";
import Section from "../../components/Section";
import { getMainPage } from "../../utils/contentful/pagesParser";

export async function getStaticProps() {
  const id = "6PDYseETiMsgEPBLGziilb";
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
