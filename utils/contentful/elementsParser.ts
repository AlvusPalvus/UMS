import { CfImage } from "../../types/Elements";

export const parseImage = (image): CfImage => {
    return {
        url: image.fields.file.url,
        width: image.fields.file.details.image.width,
        height: image.fields.file.details.image.height,
        filename: image.fields.title,
    };
};
