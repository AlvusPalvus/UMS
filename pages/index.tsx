import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  const res = await client.getEntries({ content_type: "nyhet" });

  return {
    props: {
      nyheter: res.items,
    },
  };
}

export default function Home({ nyheter }) {
  //console.log(nyheter)
  return (
    <div>
      {" "}
      <h1>UMS hemsida kommer här! </h1>
    </div>
  );
}
