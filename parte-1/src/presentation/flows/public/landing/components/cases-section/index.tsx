
'use client'

import { TitleSection } from '@components/ui/title-section';
import { Divider } from './components/divider';
import { CASES_ITEMS_CONTENT } from './constants';
import { CaseItem } from './components/case-item';
import { Fragment } from 'react';

export function CasesSection() {
  return (
    <section id="cases" className="w-full flex flex-col gap-20 py-[70px]">
      <TitleSection 
        title="Case Studies" 
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className='w-full flex justify-between gap-16 py-[70px] px-[60px] bg-dark rounded-[45px]'>
        {
          CASES_ITEMS_CONTENT.map((item, index) => (
            <Fragment key={item.id}>
              <CaseItem
                description={item.description}
                href={item.href}
              />
              {index < CASES_ITEMS_CONTENT.length - 1 && <Divider />}
            </Fragment>
          ))
        }
      </div>
    </section>
  );
}
