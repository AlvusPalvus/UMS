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
      <div className={styles.gallery + " even-columns"}>
        {gallery.images.map((logo, i) => (
          <Image
            src={"https:" + logo.url}
            width={logo.width}
            height={logo.height}
            alt={logo.filename}
            key={i}
          ></Image>
        ))}
      </div>
    </>
  );
};

export default Gallery;
