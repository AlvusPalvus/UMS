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
    };
}

export default function Home({ header, sections, footer }) {
    return (
        <>
            <Navbar
                logo={header.navbar.logo}
                navigationItems={header.navbar.navigationItems}
            />
            <Hero
                heroImage={header.hero.heroImage}
                heroContent={header.hero.heroContent}
            />
            <main className="">
                <h1> UMS hemsida kommer här! </h1>
                {sections.map((section) => (
                    <Section
                        heading={section.heading}
                        columns={section.columns}
                    />
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
