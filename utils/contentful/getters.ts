import { ContentfulClientApi } from "contentful"
import { getContentfulClient } from "./client"

// export type NavigationItem = {
//     parentPage: string,
//     children: string[]
// }
// export type Header = {
//     logoUrl: string,
//     navigationItems: []
// }

// export type MainPage = {
//     header: Header
//     sections: 
// }

const client = getContentfulClient()
export const getPage = async (id: string) => {
    
    const res = await client.getEntry(id, { include: 4 })
     const sections = res.fields.sections;
  const footer = res.fields.footer;
  const header_content = res.fields.header.fields;
  const hero_src = res.fields.heroImage.fields.file.url;
  const hero_text = res.fields.heroText.split("\n");

    
    gm

}
