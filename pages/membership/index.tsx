import { createClient } from "contentful";
import React from "react";
import Header from "../../components/Header";

type Props = { hero_src };

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  const headerAssets = await client.getAssets({
    "metadata.tags.sys.id[in]": "header",
  });
  headerAssets.items.entries.name;
  const hero_src = headerAssets.items[0].fields.file.url;

  console.log(hero_src);

  return {
    props: {
      hero_src,
    },
  };
}

const index = ({ hero_src }: Props) => {
  return (
    <>
      <Header
        heroSrc={hero_src}
        heroContent={
          <div>
            <h1>Kårhuset Villan</h1>
          </div>
        }
      />
      <div>
        <h1>Här är villansidan</h1>
      </div>
    </>
  );
};

export default index;
