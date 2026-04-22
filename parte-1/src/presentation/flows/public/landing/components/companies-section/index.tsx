import { ArrowLink } from '@components/ui/arrow-link';
import { ArrowBigDown } from 'lucide-react';

const companies = [
  { name: 'Company 1', href: '/company-1' },
  { name: 'Company 2', href: '/company-2' },
  { name: 'Company 3', href: '/company-3' },
];

export function CompaniesSection() {
  return (
    <section className="w-full flex flex-wrap gap-3">
      {companies.map((company) => (
        <ArrowLink key={company.href} href={company.href}>
          <ArrowLink.Icon variant="green">
            <ArrowBigDown className="w-6 h-6" />
          </ArrowLink.Icon>
          <ArrowLink.Text className="ml-2">{company.name}</ArrowLink.Text>
        </ArrowLink>
      ))}
    </section>
  );
}
