import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { HERO_IMAGE, PROOF_METRICS } from '../data/compassData';
import { EditorialImage } from './EditorialImage';

interface HeroSectionProps {
  onStartProject: () => void;
}

export function HeroSection({ onStartProject }: HeroSectionProps) {
  return (
    <section id="top" className="relative border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-12 lg:px-10 lg:pt-12 lg:pb-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left editorial proposition */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-sm font-medium text-[#A3A8B2]">
                <span>Lagos, Nigeria</span>
                <span aria-hidden="true" className="mx-2 text-white/30">
                  ·
                </span>
                <span>Media &amp; Cultural Technology</span>
              </p>

              <h1
                className="headline-balance mt-4 font-display font-bold tracking-tight text-[#F4F3EF] leading-[1.06]"
                style={{ fontSize: 'clamp(2.25rem, 3.9vw, 3.65rem)' }}
              >
                Where technology and African culture build what comes next.
              </h1>

              <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-[#A3A8B2] lg:text-[16px]">
                The Compass is a Nigerian media company combining creative technology and cultural craft to produce original stories, amplify African voices, develop creative talent, and advise organizations across the continent and beyond.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex min-h-[46px] items-center gap-2.5 rounded-md bg-[#E5A024] px-6 py-3 text-sm font-semibold text-[#0B0C0E] transition-colors duration-150 hover:bg-[#F2B43E] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#work"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#F4F3EF] transition-colors duration-150 hover:text-[#E5A024] whitespace-nowrap shrink-0"
              >
                <span>View Selected Work</span>
                <ArrowDownRight className="h-4 w-4 text-[#E5A024]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right dominant visual carrier */}
          <div className="lg:col-span-7">
            <figure className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-white/[0.09] bg-[#131519] sm:min-h-[360px] lg:min-h-[410px]">
              <EditorialImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fallbackTitle="The Compass Lagos Production Studio"
                priority
                className="h-full w-full object-cover object-center lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/85 via-[#0B0C0E]/20 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 px-5 py-4 text-xs text-[#F4F3EF]/90">
                <span>{HERO_IMAGE.caption}</span>
                <span className="font-mono tabular-figures text-[#E5A024]">6.4281° N, 3.4219° E</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-width 4-column quantified proof strip below hero split */}
        <div
          aria-label="Company impact summary"
          className="mt-10 grid grid-cols-1 gap-6 border-t border-white/[0.08] pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {PROOF_METRICS.map((metric) => (
            <div key={metric.id} className="space-y-1.5">
              <p className="font-mono tabular-figures text-3xl font-medium tracking-tight text-[#F4F3EF] lg:text-4xl">
                {metric.value}
              </p>
              <p className="font-display text-sm font-semibold text-[#F4F3EF]">
                {metric.label}
              </p>
              <p className="text-xs leading-relaxed text-[#A3A8B2]">{metric.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
