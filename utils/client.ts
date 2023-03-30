import { createClient } from "contentful";

let client = null;

export const getContentfulClient = () => {
  if (!client) {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
    });
  }
  return client;
};
