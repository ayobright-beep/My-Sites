import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  MISSION_PILLARS,
  type InquiryTopic,
  type MissionPillar,
} from '../data/compassData';
import { getCapabilityById } from '../utils/compassLogic';

interface MissionCapabilitiesSectionProps {
  onInquireTopic: (topic: InquiryTopic, contextNote?: string) => void;
}

export function MissionCapabilitiesSection({
  onInquireTopic,
}: MissionCapabilitiesSectionProps) {
  const [selectedId, setSelectedId] = useState<string>(MISSION_PILLARS[0].id);

  const activePillar: MissionPillar =
    getCapabilityById(MISSION_PILLARS, selectedId) ?? MISSION_PILLARS[0];

  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="border-b border-white/[0.08] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#E5A024]">Our Mission &amp; Practices</p>
            <h2
              id="mission-heading"
              className="headline-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#F4F3EF] lg:text-4xl"
            >
              Five integrated practices connecting culture, craft, and technology.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#A3A8B2] lg:col-span-5">
            Every project at The Compass operates at the intersection of editorial rigor and modern digital infrastructure. Select any mission pillar to inspect its scope and outcomes.
          </p>
        </div>

        {/* Asymmetric Bento + Interactive Practice Detail Panel */}
        <div
          id="capabilities"
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start"
        >
          {/* Left 7 columns: Asymmetric 5-pillar bento selector */}
          <div
            role="list"
            aria-label="The Compass mission pillars"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7"
          >
            {MISSION_PILLARS.map((pillar, idx) => {
              const isSelected = pillar.id === activePillar.id;
              const spanClass = idx === 0 ? 'sm:col-span-2' : 'sm:col-span-1';

              return (
                <button
                  key={pillar.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(pillar.id)}
                  className={`group flex flex-col justify-between rounded-xl border p-6 text-left transition-colors duration-150 cursor-pointer ${spanClass} ${
                    isSelected
                      ? 'border-[#E5A024]/75 bg-[#191C22]'
                      : 'border-white/[0.09] bg-[#131519] hover:border-white/25 hover:bg-[#171A20]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`font-mono tabular-figures text-sm font-medium ${
                          isSelected ? 'text-[#E5A024]' : 'text-[#A3A8B2]'
                        }`}
                      >
                        {pillar.index}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          isSelected ? 'text-[#E5A024]' : 'text-[#A3A8B2] group-hover:text-[#F4F3EF]'
                        }`}
                      >
                        {isSelected ? 'Active' : 'Inspect'}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-[#F4F3EF]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#A3A8B2]">
                      {pillar.summary}
                    </p>
                  </div>

                  <p className="mt-5 border-t border-white/[0.07] pt-3.5 text-xs text-[#F4F3EF]/85">
                    {pillar.featuredOutcome}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right 5 columns: Sticky Active Practice Brief Panel */}
          <aside
            aria-live="polite"
            data-testid="active-pillar-panel"
            className="rounded-xl border border-white/[0.11] bg-[#131519] p-7 lg:sticky lg:top-24 lg:col-span-5 lg:p-8"
          >
            <div className="flex items-center gap-2 text-xs text-[#A3A8B2]">
              <span className="font-mono tabular-figures text-[#E5A024]">
                Practice {activePillar.index.replace('.', '')}
              </span>
              <span aria-hidden="true">·</span>
              <span>Scope &amp; Deliverables</span>
            </div>

            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#F4F3EF]">
              {activePillar.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#A3A8B2] lg:text-[15px]">
              {activePillar.detail}
            </p>

            <div className="mt-7 border-t border-white/[0.08] pt-6">
              <h4 className="text-xs font-semibold tracking-wide text-[#F4F3EF]">
                Core Deliverables
              </h4>
              <ul className="mt-4 space-y-3">
                {activePillar.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#F4F3EF]/90">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#E5A024]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 border-t border-white/[0.08] pt-6">
              <p className="text-xs text-[#A3A8B2]">Verified Benchmark</p>
              <p className="mt-1.5 font-display text-base font-semibold text-[#F4F3EF]">
                {activePillar.featuredOutcome}
              </p>
            </div>

            <div className="mt-7">
              <button
                type="button"
                onClick={() =>
                  onInquireTopic(
                    activePillar.inquiryTopic,
                    `Inquiry regarding ${activePillar.title}`
                  )
                }
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-[#E5A024] px-5 py-3 text-sm font-semibold text-[#0B0C0E] transition-colors duration-150 hover:bg-[#F2B43E] cursor-pointer"
              >
                <span>Inquire About {activePillar.title}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
