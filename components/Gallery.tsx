import { Gallery as GalleryType } from "../types/Topics";
import styles from "../styles/Components.module.css";
import Image from "next/image";

type Props = {
  gallery: GalleryType;
};

const Gallery = ({ gallery }: Props) => {
  return (
    <>
      {gallery.heading && (
        <h2 className="fs-secondary-heading">{gallery.heading}</h2>
      )}

      <div className="field flex flex-row h-96 md:flex-col justify-center align-center items-center md:h-full ">
        {gallery.images.map((logo, i) => (
          <div
            key={i}
            className=" relative flex-grow items-stretch min-h-[200px] w-full md:h-full "
          >
            <Image
              className="object-cover lg:p-2"
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
