export type CfLink = {
    text: string;
    link: string;
    linkType?: "External link" | "Form";
};

export type CfImage = {
    url: string;
    width: number;
    height: number;
    filename: string;
};

export type CfDocument = {};
