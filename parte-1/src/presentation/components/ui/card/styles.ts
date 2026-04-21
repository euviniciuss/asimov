import { cva } from "class-variance-authority";

export const cardStyles = cva("rounded-3xl border border-dark/20 bg-white p-6 md:p-8");
export const cardTitleStyles = cva("text-h4-mobile md:text-h4");
export const cardDescriptionStyles = cva("mt-3 text-p-mobile md:text-p text-dark/80");
