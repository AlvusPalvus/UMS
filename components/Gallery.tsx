import { Gallery as GalleryType } from "../types/Topics";
import styles from "../styles/Components.module.css";
import Image from "next/image";

const Gallery = ({ heading, images }: GalleryType) => {
    return (
        <>
            <h2 className="fs-secondary-heading">{heading}</h2> <hr />
            <div className={styles.gallery + " even-columns"}>
                {images.map((logo) => (
                    <Image
                        src={"https:" + logo.url}
                        width={logo.width}
                        height={logo.height}
                        alt={logo.filename}
                    ></Image>
                ))}
            </div>
        </>
    );
};

export default Gallery;
