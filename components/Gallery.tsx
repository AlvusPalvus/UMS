import { Gallery as GalleryType } from "../types/Topics";
import styles from "../styles/Components.module.css";
import Image from "next/image";

const Gallery = ({ heading, images }: GalleryType) => {
    return (
        <div className={styles.gallery}>
            <h2>{heading}</h2> <hr />
            {images.map((logo) => (
                <Image
                    src={"https:" + logo.url}
                    width={logo.width}
                    height={logo.height}
                    alt={logo.filename}
                ></Image>
            ))}
        </div>
    );
};

export default Gallery;
