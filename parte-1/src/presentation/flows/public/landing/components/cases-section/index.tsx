
import { TitleSection } from '@components/ui/title-section';

export function CasesSection() {
  return (
    <section className="w-full flex-col gap-20">
      <TitleSection 
        title="Case Studies" 
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className='w-full flex py-[70px] px-[60px] bg-dark rounded-[45px]'>
        {/* Case Study Content */}
      </div>
    </section>
  );
}
