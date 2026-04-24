'use client';

import { Heading } from '@components/ui/heading';
import { ArrowLink } from '@components/ui/arrow-link';
import { TitleSection } from '@components/ui/title-section';
import { ServiceCard } from './components/service-card';

import Image from 'next/image';
import { SERVICE_CARD_CONTENT } from './constants';

export function ServicesSection() {
  return (
    <section id="services" className="w-full flex flex-col gap-20 py-[70px]">
      <TitleSection
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {SERVICE_CARD_CONTENT.map((content) => (
          <ServiceCard.Root key={content.id} background={content.background}>
            <ServiceCard.Content>
              <div className="flex flex-col">
                <Heading size="h3" variant={content.headingVariant}>
                  {content.title}
                </Heading>
                <Heading size="h3" variant={content.headingVariant}>
                  {content.subtitle}
                </Heading>
              </div>

              <ArrowLink.Root
                href={content.href}
                background={content.backgroundArrowLink}
                variant="solid"
              >
                <ArrowLink.Icon />
                <ArrowLink.Text text="Learn more" />
              </ArrowLink.Root>
            </ServiceCard.Content>

            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
            />
          </ServiceCard.Root>
        ))}
      </div>
    </section>
  );
}
