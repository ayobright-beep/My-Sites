import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  TALENT_FEATURE_IMAGE,
  TALENT_ROSTER,
  type InquiryTopic,
  type TalentProfile,
} from '../data/compassData';
import { EditorialImage } from './EditorialImage';

interface TalentRosterSectionProps {
  onRequestTalent: (topic: InquiryTopic, contextNote: string) => void;
}

export function TalentRosterSection({
  onRequestTalent,
}: TalentRosterSectionProps) {
  const [selectedTalentId, setSelectedTalentId] = useState<string>(
    TALENT_ROSTER[0].id
  );

  const activeTalent: TalentProfile =
    TALENT_ROSTER.find((item) => item.id === selectedTalentId) ??
    TALENT_ROSTER[0];

  return (
    <section
      id="talent"
      aria-labelledby="talent-heading"
      className="border-b border-white/[0.08] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#E5A024]">
            Talent Management &amp; Development
          </p>
          <h2
            id="talent-heading"
            className="headline-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#F4F3EF] lg:text-4xl"
          >
            Building durable global careers for Africa’s defining creative voices.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#A3A8B2]">
            We represent directors, composers, creative technologists, and cultural producers—handling creative strategy, international commissions, studio mentorship, and rights-first licensing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left portrait visual */}
          <div className="lg:col-span-5">
            <figure className="relative h-full min-h-[360px] max-h-[640px] overflow-hidden rounded-xl border border-white/[0.09] bg-[#131519]">
              <EditorialImage
                src={TALENT_FEATURE_IMAGE.src}
                alt={TALENT_FEATURE_IMAGE.alt}
                fallbackTitle="The Compass Talent Roster"
                className="h-full w-full object-cover object-top lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/92 via-[#0B0C0E]/25 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-medium text-[#E5A024]">Roster Philosophy</p>
                <p className="mt-1.5 font-display text-lg font-semibold leading-snug text-[#F4F3EF]">
                  100% creator-retained master and publishing ownership across every co-developed slate.
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Right interactive roster directory & profile view */}
          <div className="flex flex-col justify-between lg:col-span-7">
            {/* Roster selector rows */}
            <div
              role="list"
              aria-label="Represented talent roster"
              className="space-y-2"
            >
              {TALENT_ROSTER.map((creator) => {
                const isSelected = creator.id === activeTalent.id;
                return (
                  <button
                    key={creator.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedTalentId(creator.id)}
                    className={`flex w-full items-center justify-between gap-4 rounded-lg border px-4 py-3.5 text-left transition-colors duration-150 cursor-pointer ${
                      isSelected
                        ? 'border-[#E5A024]/70 bg-[#191C22]'
                        : 'border-white/[0.08] bg-[#131519]/70 hover:border-white/25 hover:bg-[#131519]'
                    }`}
                  >
                    <div className="min-w-0">
                      <p
                        className={`font-display text-lg font-semibold tracking-tight ${
                          isSelected ? 'text-[#E5A024]' : 'text-[#F4F3EF]'
                        }`}
                      >
                        {creator.name}
                      </p>
                      <p className="mt-0.5 text-sm text-[#A3A8B2]">
                        {creator.discipline}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="block text-xs text-[#A3A8B2] whitespace-nowrap">
                        {creator.baseCity}
                      </span>
                      {isSelected && (
                        <span className="mt-0.5 block text-[11px] font-medium text-[#E5A024]">
                          Viewing
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active creator profile detail */}
            <div
              aria-live="polite"
              data-testid="active-talent-profile"
              className="mt-8 rounded-xl border border-white/[0.09] bg-[#131519] p-6 lg:p-7"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#F4F3EF]">
                  {activeTalent.name}
                </h3>
                <span className="text-xs font-medium text-[#E5A024]">
                  {activeTalent.baseCity}
                </span>
              </div>

              <p className="mt-1 text-sm text-[#A3A8B2]">
                {activeTalent.discipline}
                <span aria-hidden="true" className="mx-2 text-white/30">
                  ·
                </span>
                <span>{activeTalent.focusAreas.join(' / ')}</span>
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#F4F3EF]/85">
                {activeTalent.bio}
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-5">
                <h4 className="text-xs font-semibold text-[#A3A8B2]">
                  Selected Credits
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-[#F4F3EF]/90">
                  {activeTalent.recentCredits.map((credit) => (
                    <li key={credit}>{credit}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#A3A8B2]">{activeTalent.availability}</p>

                <button
                  type="button"
                  onClick={() =>
                    onRequestTalent(
                      'Talent Management & Development',
                      `Booking or collaboration inquiry for ${activeTalent.name} (${activeTalent.discipline})`
                    )
                  }
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md border border-[#E5A024]/70 px-4 py-2 text-sm font-semibold text-[#E5A024] transition-colors duration-150 hover:bg-[#E5A024] hover:text-[#0B0C0E] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Request Booking — {activeTalent.name.split(' ')[0]}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
