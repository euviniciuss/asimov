import { Heading } from "@components/ui/heading";
import { Typography } from "@components/ui/typography";
import { ITitleSectionProps } from "./types";

export function TitleSection({ title, description }: ITitleSectionProps) {
  return (
    <div className="w-full flex gap-10">
      <Heading size="h2" variant="green">
        {title}
      </Heading>
      <Typography as="p" variant="p" className="text-black max-w-[580px]">
        {description}
      </Typography>
    </div>
  );
}