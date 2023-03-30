import { Gallery as GalleryType } from "../types/Topics";
import styles from "../styles/Components.module.css";
import Image from "next/image";

type Props = {
  gallery: GalleryType;
};

const Gallery = ({ gallery }: Props) => {
  return (
    <>
      <h2 className="fs-secondary-heading">{gallery.heading}</h2> <hr />
      <div className="flex flex-col items-center">
        {gallery.images.map((logo, i) => (
          <div className="flex">
            <Image
              className="cover p-1"
              src={"https:" + logo.url}
              width={logo.width}
              height={logo.height}
              alt={logo.filename}
              key={i}
            ></Image>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
