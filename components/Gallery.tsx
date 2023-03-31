import { Gallery as GalleryType } from "../types/Topics";
import styles from "../styles/Components.module.css";
import Image from "next/image";

type Props = {
  gallery: GalleryType;
};

const Gallery = ({ gallery }: Props) => {
  const nrImages = gallery.images.length;
  const height = "h-[" + Math.round((1 / nrImages) * 100).toString() + "%] ";
  const height2 = Math.round((1 / nrImages) * 100) + "%";
  console.log(height);
  return (
    <>
      {gallery.heading && (
        <h2 className="fs-secondary-heading">{gallery.heading}</h2>
      )}

      <div className={"h-full flex flex-row md:flex-col md:align-center "}>
        {gallery.images.map((logo, i) => (
          <div
            key={i}
            className={" relative w-full min-h-[20vh] min-w-[20vw] " + height}
          >
            <Image
              className="object-cover p-0.5 md:p-2 "
              src={"https:" + logo.url}
              fill
              alt={logo.filename}
            ></Image>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
