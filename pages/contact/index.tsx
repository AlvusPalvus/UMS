import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getMainPage } from "../../utils/contentful/getters";
import heroStyles from "../../styles/Header.module.css";

export async function getStaticProps() {
  const id = "1y1aMRbBn7nHGk68knlDG0";
  const page = await getMainPage(id);

  return {
    props: {
      header: page.header,
      sections: page.sections,
      footer: page.footer,
    },
  };
}

export default function Index({
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
            <h1>{heroText}</h1>
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
