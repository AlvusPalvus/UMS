import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import heroStyles from "../styles/Header.module.css";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  //const res = await client.getEntries({ content_type: "nyhet" });
  const hero_img = await client.getEntry("4hiqPvQpvgfuZmOFgPcrtl");

  console.log(hero_img);
  /*
  const asset = client
    .getAsset("4hiqPvQpvgfuZmOFgPcrtl")
    .then((asset) => console.log(asset.fields.file.url));
    */
  return {
    props: {
      hero_src: hero_img,
    },
  };
}

export default function Home({ nyheter, hero_src }) {
  return (
    <>
      <div className={styles.heroWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={"https:" + hero_src}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="hero image example"
          ></Image>
        </div>
      </div>
      <div>
        {" "}
        <h1> UMS hemsida kommer här! </h1>
      </div>
    </>
  );
}
