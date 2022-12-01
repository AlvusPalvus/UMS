import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import heroStyles from "../styles/Header.module.css";
import Link from "next/link";
import Header from "../../components/Header";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  const res = await client.getEntry("XVTbmJUSKIRwWeqywnG3i", { include: 4 });
  console.log(res);

  const res2 = await client.getEntry("4L7GTW67KIHIuXP1iTDjR5");
  //console.log(res2);

  const hero_src = res.fields.hero.fields.file.url;
  const page_title = res.fields.pageTitle;
  const sections = res.fields.sections;

  return {
    props: {
      hero_src,
      page_title,
      sections,
    },
  };
}
/*<Header
        heroSrc={hero_src}
        heroContent={
          <div>
            <h1>Gå med i UMS</h1>
            <p>Umeå Medicinska studentkår .....</p>
            <button> Bli medlem! </button>
          </div>
        }
      />*/

export default function ContactPage({ hero_src, page_title, sections }) {
  console.log(sections[0].fields.entries);
  return (
    <>
      <Header
        heroSrc={hero_src}
        heroContent={
          <div>
            <h1>{page_title}</h1>
          </div>
        }
      />
      <div>
        {" "}
        <h1> UMS hemsida kommer här! </h1>
        {sections.map((section) => (
          <>
            <h2>{section.fields.sectionTitle}</h2>
            <p>{section.fields.content}</p>
          </>
        ))}
      </div>
    </>
  );
}
