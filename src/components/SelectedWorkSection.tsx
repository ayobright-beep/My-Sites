import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  CASE_STUDIES,
  WORK_CATEGORIES,
  type CaseStudy,
  type WorkCategory,
} from '../data/compassData';
import { filterCaseStudies } from '../utils/compassLogic';
import { EditorialImage } from './EditorialImage';

interface SelectedWorkSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export function SelectedWorkSection({
  onSelectCaseStudy,
}: SelectedWorkSectionProps) {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('All');
  const filteredStudies = filterCaseStudies(CASE_STUDIES, activeCategory);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-white/[0.08] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header & interactive filter bar */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#E5A024]">Selected Work &amp; Proof</p>
            <h2
              id="work-heading"
              className="headline-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#F4F3EF] lg:text-4xl"
            >
              Experiences built to move audiences and leave a cultural mark.
            </h2>
          </div>

          <div
            role="group"
            aria-label="Filter projects by practice"
            className="flex flex-wrap items-center gap-1 rounded-lg border border-white/[0.09] bg-[#131519] p-1"
          >
            {WORK_CATEGORIES.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#E5A024] text-[#0B0C0E] font-semibold'
                      : 'text-[#A3A8B2] hover:text-[#F4F3EF]'
                  }`}
                >
                  {category === 'All' ? 'All Work' : category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case study grid */}
        <div
          data-testid="case-studies-grid"
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/[0.09] bg-[#131519] transition-colors duration-150 hover:border-white/25"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#191C22]">
                <EditorialImage
                  src={study.image}
                  alt={study.imageAlt}
                  fallbackTitle={study.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#131519]/70 via-transparent to-transparent"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 lg:p-7">
                <div>
                  {/* Clean unboxed metadata (zero pills) */}
                  <p className="text-xs text-[#A3A8B2]">
                    <span className="font-medium text-[#E5A024]">{study.category}</span>
                    <span aria-hidden="true" className="mx-2 text-white/30">
                      ·
                    </span>
                    <span>{study.location}</span>
                    <span aria-hidden="true" className="mx-2 text-white/30">
                      ·
                    </span>
                    <span className="font-mono tabular-figures">{study.year}</span>
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#F4F3EF]">
                    {study.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#A3A8B2]">
                    {study.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="text-xs text-[#A3A8B2]">Measured Outcome</p>
                  <p className="mt-1 font-display text-sm font-semibold text-[#F4F3EF] tabular-figures">
                    {study.headlineMetric}
                  </p>

                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(study)}
                    className="mt-5 inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#E5A024] transition-colors duration-150 hover:text-[#F2B43E] cursor-pointer"
                  >
                    <span>Read Case Study — {study.title.split(':')[0]}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
