import { useState } from 'react';
import { CornerDownRight } from 'lucide-react';
import type { CaseStudy, InquiryTopic } from './data/compassData';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MissionCapabilitiesSection } from './components/MissionCapabilitiesSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { TalentRosterSection } from './components/TalentRosterSection';
import { ConsultancyContactSection } from './components/ConsultancyContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [prefillState, setPrefillState] = useState<{
    topic: InquiryTopic | '';
    context: string;
    version: number;
  }>({
    topic: '',
    context: '',
    version: 0,
  });

  const scrollToContact = (topic: InquiryTopic | '' = '', context = '') => {
    setPrefillState((prev) => ({
      topic,
      context,
      version: prev.version + 1,
    }));
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F4F3EF]">
      <ScrollProgressBar />

      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:inline-flex focus:items-center focus:gap-2 focus:rounded-md focus:border focus:border-[#F4F3EF]/85 focus:bg-[#E5A024] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#0B0C0E] focus:outline-none"
      >
        <CornerDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Skip to main content</span>
      </a>

      <Navbar onStartProject={() => scrollToContact('', '')} />

      <main id="main-content">
        <HeroSection onStartProject={() => scrollToContact('', '')} />

        <MissionCapabilitiesSection
          onInquireTopic={(topic, note) => scrollToContact(topic, note ?? '')}
        />

        <SelectedWorkSection
          onSelectCaseStudy={(study) => setActiveCaseStudy(study)}
        />

        <TalentRosterSection
          onRequestTalent={(topic, note) => scrollToContact(topic, note)}
        />

        <ConsultancyContactSection
          prefillTopic={prefillState.topic}
          prefillContext={prefillState.context}
          prefillVersion={prefillState.version}
        />
      </main>

      <Footer />

      <CaseStudyModal
        study={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onStartSimilar={(topic, note) => scrollToContact(topic, note)}
      />
    </div>
  );
}
