import { Button } from '@components/ui/button';
import { Typography } from '@components/ui/typography';
import Image from 'next/image';

export function CTASection() {
  return (
    <section className="w-full">
      <div className="relative w-full bg-gray rounded-[45px] p-[60px] flex">
        <div className="max-w-[500px] flex flex-col gap-[26px]">
          <Typography as="h3" variant="h3" className="text-black">
            Let’s make things happen
          </Typography>

          <Typography as="p" variant="p" className="text-black">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </Typography>

          <Button variant="primary">Get your free proposal</Button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-[135px]">
          <Image
            src="/illustrations/cta.webp"
            alt="Call to Action Illustration"
            width={359}
            height={394}
          />
        </div>
      </div>
    </section>
  );
}
