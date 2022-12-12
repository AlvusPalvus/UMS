import { createClient } from "contentful";
import React from "react";
import Header from "../../components/Header";
import { getContentfulClient } from "../../utils/contentful/client";
import { getPage } from "../../utils/contentful/getters";

type Props = { hero_src };

export async function getStaticProps() {
  const id = "5HUEuYQiInetG7p51V3ol4";
  const page = getPage(id);
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  const headerAssets = await client.getAssets({
    "metadata.tags.sys.id[in]": "header",
  });
  headerAssets.items.entries.name;
  const hero_src = headerAssets.items[0].fields.file.url;

  console.log(headerAssets.items);

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
            <h1>Utbildningsfrågor</h1>
          </div>
        }
      />
      <div>
        <h1>Här är utbildningssidan</h1>
      </div>
    </>
  );
};

export default index;
