import { Button } from '@components/ui/button';
import { Typography } from '@components/ui/typography';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="about" className='w-full'>
      <div className="w-full flex flex-co justify-between md:flex-row gap-8">
        <div className='flex-1 max-w-[531px]'>
          <div className="flex flex-col gap-[35px]">
            <Typography as="h1" variant="h1" className="text-black">
              Navigating the digital landscape for success
            </Typography>

            <Typography as="p" variant="p" className="text-black max-w-[498px] text-xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </Typography>

            <Button variant="primary">
              Book a consultation
            </Button>
          </div>
        </div>

        <Image
          src="/illustrations/hero-illustration.webp"
          alt="Digital marketing illustration"
          width={600}
          height={515}
          priority
        />
      </div>
    </section>
  );
}
