import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Header/Hero";
import Navbar from "../../components/Header/Navbar";
import Section from "../../components/Section";
import { getMainPage } from "../../utils/contentful/pagesParser";

export async function getStaticProps() {
    const id = "1y1aMRbBn7nHGk68knlDG0";
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
                {sections.map((section, i) => {
                    if (i === 1) {
                        return (
                            <>
                                <section className="container self-center">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.5390984631736!2d20.2963778!3d63.815828399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5afe324f399f%3A0x7d9e34bc5973b1f9!2sK%C3%A5rhuset%20Villan!5e0!3m2!1sen!2sse!4v1683545043124!5m2!1sen!2sse"
                                        width="600"
                                        height="450"
                                        className="border:0;"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </section>
                                <Section section={section} key={i} />
                            </>
                        );
                    }
                    return <Section section={section} key={i} />;
                })}
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
