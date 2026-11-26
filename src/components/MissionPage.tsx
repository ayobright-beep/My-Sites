import { ArrowLeft } from 'lucide-react';
import type { InquiryTopic } from '../data/compassData';
import { MissionCapabilitiesSection } from './MissionCapabilitiesSection';

interface MissionPageProps {
  onBackHome: () => void;
  onInquireTopic: (topic: InquiryTopic, contextNote?: string) => void;
}

export function MissionPage({ onBackHome, onInquireTopic }: MissionPageProps) {
  return (
    <div data-testid="mission-page" className="min-h-[75vh]">
      <div className="border-b border-white/[0.08] bg-[#0B0C0E]">
        <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-8 lg:px-10">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-[#A3A8B2] transition-colors duration-150 hover:text-[#E5A024] cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <p className="mt-6 text-sm font-medium text-[#A3A8B2]">
            <span>The Compass</span>
            <span aria-hidden="true" className="mx-2 text-white/30">
              ·
            </span>
            <span>Mission &amp; Practices</span>
          </p>

          <h1
            className="headline-balance mt-3 max-w-3xl font-display font-bold tracking-tight text-[#F4F3EF] leading-[1.08]"
            style={{ fontSize: 'clamp(2.15rem, 3.8vw, 3.4rem)' }}
          >
            Combining technology and African culture to create experiences that connect and inspire.
          </h1>
        </div>
      </div>

      <MissionCapabilitiesSection onInquireTopic={onInquireTopic} />
    </div>
  );
}
