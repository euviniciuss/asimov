import Image from 'next/image';
import { CustomLink } from './components/custom-link';
import { Button } from '@components/ui/button';

export function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <Image
        src="/assets/logo.svg"
        alt="Positivus"
        width={220}
        height={56}
        className="max-w-[220px] w-auto h-auto"
        priority
      />

      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-10">
          <CustomLink href="#about">About us</CustomLink>
          <CustomLink href="#services">Services</CustomLink>
          <CustomLink href="#cases">Use Cases</CustomLink>
          <CustomLink href="#pricing">Pricing</CustomLink>
          <CustomLink href="#blog">Blog</CustomLink>
        </nav>

        <Button variant="secondary">Request a quote</Button>
      </div>
    </header>
  );
}
