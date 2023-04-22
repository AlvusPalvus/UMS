import { CfImage } from "../../types/Elements";

export const parseCfImage = (image): CfImage => {
    if (image !== undefined && image.fields !== undefined) {
        return {
            url: image.fields.file.url,
            width: image.fields.file.details.image.width,
            height: image.fields.file.details.image.height,
            filename: image.fields.title,
        };
    } else {
        return null;
    }
};
