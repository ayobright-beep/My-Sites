import { useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import type { CaseStudy, InquiryTopic } from '../data/compassData';
import { EditorialImage } from './EditorialImage';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onStartSimilar: (topic: InquiryTopic, contextNote: string) => void;
}

export function CaseStudyModal({
  study,
  onClose,
  onStartSimilar,
}: CaseStudyModalProps) {
  useEffect(() => {
    if (!study) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0C0E]/82 p-4 backdrop-blur-sm sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-modal-title"
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-white/15 bg-[#131519] text-[#F4F3EF]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/[0.08] bg-[#131519]/95 px-6 py-4 backdrop-blur-sm">
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

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/12 text-[#F4F3EF] transition-colors duration-150 hover:border-white/30 cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h2
            id="case-study-modal-title"
            className="headline-balance font-display text-2xl font-bold tracking-tight text-[#F4F3EF] sm:text-3xl"
          >
            {study.title}
          </h2>
          <p className="mt-2 text-sm text-[#A3A8B2]">
            {study.format}
            <span aria-hidden="true" className="mx-2 text-white/30">
              /
            </span>
            {study.client}
          </p>

          <div className="mt-6 aspect-[16/10] overflow-hidden rounded-lg border border-white/[0.08] bg-[#191C22]">
            <EditorialImage
              src={study.image}
              alt={study.imageAlt}
              fallbackTitle={study.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-base font-semibold text-[#F4F3EF]">
                The Challenge
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A3A8B2]">
                {study.challenge}
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#F4F3EF]">
                Our Approach
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A3A8B2]">
                {study.approach}
              </p>
            </div>
          </div>

          <div className="mt-7 border-t border-white/[0.08] pt-6">
            <h3 className="font-display text-base font-semibold text-[#F4F3EF]">
              Technology &amp; Culture Intersection
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#A3A8B2]">
              {study.techCultureBridge}
            </p>
          </div>

          <div className="mt-7 border-t border-white/[0.08] pt-6">
            <h3 className="font-display text-base font-semibold text-[#F4F3EF]">
              Verified Outcomes
            </h3>
            <ul className="mt-3 space-y-2.5">
              {study.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-sm text-[#F4F3EF]/90 tabular-figures"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#E5A024]"
                    aria-hidden="true"
                  />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[42px] rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-[#F4F3EF] transition-colors duration-150 hover:border-white/35 cursor-pointer"
            >
              Back to Work
            </button>

            <button
              type="button"
              onClick={() => {
                const topic = study.inquiryTopic;
                const note = `Inspired by ${study.title}`;
                onClose();
                onStartSimilar(topic, note);
              }}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-md bg-[#E5A024] px-5 py-2.5 text-sm font-semibold text-[#0B0C0E] transition-colors duration-150 hover:bg-[#F2B43E] cursor-pointer"
            >
              <span>Start a Similar Project</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
