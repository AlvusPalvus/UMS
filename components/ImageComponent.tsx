import React from "react";
import { ImageComponent as ImageComponentType } from "../types/Topics";

import Image from "next/image";

type Props = {
    imageComponent: ImageComponentType;
};

const ImageComponent = ({ imageComponent }: Props) => {
    if (imageComponent.displaySettings === "Maintain aspect ratio") {
        return (
            <div
                className={
                    " relative w-full min-h-[20vh] min-w-[20vw] md:min-w-0 "
                }
            >
                <Image
                    className=" "
                    src={"https:" + imageComponent.image.url}
                    height={imageComponent.image.height}
                    width={imageComponent.image.width}
                    alt={imageComponent.image.filename}
                ></Image>
            </div>
        );
    } else
        return (
            <div
                className={
                    " relative w-full min-h-[20vh] min-w-[20vw] md:min-w-0 "
                }
                style={{ height: "100%" }}
            >
                <Image
                    className="object-cover "
                    src={"https:" + imageComponent.image.url}
                    fill
                    alt={imageComponent.image.filename}
                ></Image>
            </div>
        );
};

export default ImageComponent;
