import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import heroStyles from "../styles/Header.module.css";
import Link from "next/link";
import Header from "../components/Header";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  //const res = await client.getEntries({ content_type: "nyhet" });

  // const hero_img = await client.getEntry("4hiqPvQpvgfuZmOFgPcrtl");
  // const res = await client.getEntries()
  // console.log(res)

  // const hero_img = await client.getAsset("4hiqPvQpvgfuZmOFgPcrtl")

  //Hämta alla assets med taggen header
  const headerAssets = await client.getAssets({
    "metadata.tags.sys.id[in]": "header",
  });
  const hero_src = headerAssets.items[1].fields.file.url;

  console.log(hero_src);

  return {
    props: {
      hero_src,
    },
  };
}

export default function Home({ nyheter, res, hero_src }) {
  console.log(res);
  console.log(hero_src);
  return (
    <>
      <Header
        heroSrc={hero_src}
        heroContent={
          <div>
            <h1>Gå med i UMS</h1>
            <p>Umeå Medicinska studentkår .....</p>
            <button> Bli medlem! </button>
          </div>
        }
      />
      <div>
        {" "}
        <h1> UMS hemsida kommer här! </h1>
      </div>
    </>
  );
}
