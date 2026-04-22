import { Typography } from '@components/ui/typography';
import { Heading } from '@/presentation/components/ui/heading';
import { servicesSectionStyles } from './styles';

export function ServicesSection() {
  return (
    <section className={servicesSectionStyles()}>
      {/* Services Title */}
      <div className="w-full flex gap-10">
        <Heading size="h2" variant="green">
          Services
        </Heading>
        <Typography as="p" variant="p" className="text-black max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </Typography>
      </div>

      {/* Services Content */}
    </section>
  );
}
