import Head from "next/head";
import Header from "../components/Header";
import { getMainPage } from "../utils/contentful/pagesParser";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Link from "next/link";

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

export default function Home({ header, sections, footer }) {
    return (
        <>
            <Head>
                <title>Umeå medicinska studentkår - home</title>
                <meta
                    property="og:title"
                    content="Umeå medicinska studentkår - home"
                    key="title"
                />
            </Head>
            <Header
                navbar={header.navbar}
                heroImage={header.heroImage}
                heroContent={header.heroContent}
            />
            <main className="">
                <h1 className="fs-primary-heading">UMS hemsida kommer här!</h1>
                {sections.map((section) => (
                    <Section
                        heading={section.heading}
                        columns={section.columns}
                    />
                ))}
                <Link href={"/membership"} className="button">
                    Press me!
                </Link>
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
