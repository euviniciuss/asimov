import Image from 'next/image';
import { COMPANIES_LOGO } from './constants';

export function CompanySection() {
  return (
    <section className="w-full flex justify-between items-center">
      {COMPANIES_LOGO.map((company) => (
        <div key={company.name} className="flex items-center justify-center">
          <Image
            src={company.src}
            alt={company.alt}
            width={120}
            height={40}
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </section>
  );
}
