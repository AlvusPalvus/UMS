import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getMainPage } from "../../utils/contentful/pagesParser";
import Section from "../../components/Section";

export async function getStaticProps() {
    const id = "5loTBfNSntKIlJ7DWeXbD0";
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
    console.log(sections);
    return (
        <>
            <Header
                navbar={header.navbar}
                heroImage={header.heroImage}
                heroContent={header.heroContent}
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
