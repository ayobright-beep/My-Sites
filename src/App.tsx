import { useCallback, useEffect, useState } from 'react';
import { CornerDownRight } from 'lucide-react';
import type { CaseStudy, InquiryTopic, NewsArticle } from './data/compassData';
import { resolvePageFromPathname, type AppPage } from './utils/compassLogic';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { NewsSection } from './components/NewsSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { NewsArticleModal } from './components/NewsArticleModal';
import { TalentRosterSection } from './components/TalentRosterSection';
import { ConsultancyContactSection } from './components/ConsultancyContactSection';
import { MissionPage } from './components/MissionPage';
import { Footer } from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<AppPage>(() =>
    typeof window !== 'undefined'
      ? resolvePageFromPathname(window.location.pathname)
      : 'home'
  );
  const [pendingSectionId, setPendingSectionId] = useState<string | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [activeNewsArticle, setActiveNewsArticle] = useState<NewsArticle | null>(null);
  const [prefillState, setPrefillState] = useState<{
    topic: InquiryTopic | '';
    context: string;
    version: number;
  }>({
    topic: '',
    context: '',
    version: 0,
  });

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(resolvePageFromPathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (activePage !== 'home' || !pendingSectionId) return;
    const targetId = pendingSectionId;
    setPendingSectionId(null);
    requestAnimationFrame(() => {
      const targetEl = document.getElementById(targetId);
      targetEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [activePage, pendingSectionId]);

  const navigateHome = useCallback(() => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setActivePage('home');
    setPendingSectionId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateMission = useCallback(() => {
    if (window.location.pathname !== '/mission') {
      window.history.pushState({}, '', '/mission');
    }
    setActivePage('mission');
    setPendingSectionId(null);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const navigateToSection = useCallback(
    (sectionId: string) => {
      if (activePage !== 'home') {
        window.history.pushState({}, '', `/#${sectionId}`);
        setPendingSectionId(sectionId);
        setActivePage('home');
        return;
      }
      const targetEl = document.getElementById(sectionId);
      targetEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [activePage]
  );

  const scrollToContact = useCallback(
    (topic: InquiryTopic | '' = '', context = '') => {
      setPrefillState((prev) => ({
        topic,
        context,
        version: prev.version + 1,
      }));
      navigateToSection('contact');
    },
    [navigateToSection]
  );

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

      <Navbar
        activePage={activePage}
        onNavigateHome={navigateHome}
        onNavigateMission={navigateMission}
        onNavigateSection={navigateToSection}
        onStartProject={() => scrollToContact('', '')}
      />

      <main id="main-content">
        {activePage === 'mission' ? (
          <MissionPage
            onBackHome={navigateHome}
            onInquireTopic={(topic, note) => scrollToContact(topic, note ?? '')}
          />
        ) : (
          <>
            <HeroSection onStartProject={() => scrollToContact('', '')} />

            <NewsSection
              onSelectArticle={(article) => setActiveNewsArticle(article)}
              onOpenMissionPage={navigateMission}
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
          </>
        )}
      </main>

      <Footer
        onNavigateHome={navigateHome}
        onNavigateMission={navigateMission}
        onNavigateSection={navigateToSection}
      />

      <CaseStudyModal
        study={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onStartSimilar={(topic, note) => scrollToContact(topic, note)}
      />

      <NewsArticleModal
        article={activeNewsArticle}
        onClose={() => setActiveNewsArticle(null)}
        onInquireTopic={(topic, note) => scrollToContact(topic, note)}
      />
    </div>
  );
}
