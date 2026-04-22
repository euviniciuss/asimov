import { Button } from '@components/ui/button';
import { Typography } from '@components/ui/typography';
import Image from 'next/image';

import {
  heroContentStyles,
  heroImageStyles,
  heroSectionStyles,
} from './styles';

export function HeroSection() {
  return (
    <section className={heroSectionStyles()}>
      <div className="flex flex-col md:flex-row gap-8">
        <div className={heroContentStyles()}>
          <div className="flex flex-col gap-[35px]">
            <Typography as="h1" variant="h1" className="text-black">
              Navigating the digital landscape for success
            </Typography>

            <Typography as="p" variant="p" className="text-black max-w-[498px]">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </Typography>

            <Button variant="primary">
              Book a consultation
            </Button>
          </div>
        </div>

        <div className={heroImageStyles()}>
          <Image
            src="/illustrations/hero-Illustration.png"
            alt="Digital marketing illustration"
            width={600}
            height={515}
            className="w-full max-w-[600px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
