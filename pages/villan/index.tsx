import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Header/Hero";
import Navbar from "../../components/Header/Navbar";
import Section from "../../components/Section";
import { getMainPage } from "../../utils/contentful/pagesParser";

export async function getStaticProps() {
    const id = "3BOvEe3AJr5m8zDOaWCnAx";
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
            <Hero hero={header.hero} navbar={header.navbar} />
            <main className="">
                <h1> UMS hemsida kommer här! </h1>
                {sections.map((section) => (
                    <Section section={section} />
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
