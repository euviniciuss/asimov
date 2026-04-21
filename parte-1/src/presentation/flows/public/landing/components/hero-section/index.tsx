import { Button } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { Typography } from "@components/ui/typography";

import { heroSectionStyles } from "./styles";
import type { IHeroSectionProps } from "./types";

export function HeroSection({ message = "Hello World" }: IHeroSectionProps) {
  return (
    <section className={heroSectionStyles()}>
      <Typography as="h1" variant="h1-mobile">
        {message}
      </Typography>

      <Button variant="primary">
        <Typography as="p" variant="p" color="gray">
          Book a consultation
        </Typography>
      </Button>

      <div className="w-full flex flex-col">
        <Heading variant="green">Search engine</Heading>
        <Heading variant="green">optimization</Heading>
      </div>

      <Heading variant="dark" size="h1">
        Search engine optimization
      </Heading>
      <Heading variant="white" size="h3">
        Social media marketing
      </Heading>
    </section>
  );
}
