import type { MouseEvent } from 'react';
import { CompassLogoMark } from './CompassLogoMark';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateMission: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function Footer({
  onNavigateHome,
  onNavigateMission,
  onNavigateSection,
}: FooterProps) {
  const handleHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigateHome();
  };

  const handleMission = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigateMission();
  };

  const handleSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    onNavigateSection(sectionId);
  };

  return (
    <footer className="bg-[#0B0C0E] py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="/"
              onClick={handleHome}
              className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-[#F4F3EF] transition-colors hover:text-[#E5A024]"
            >
              <CompassLogoMark size="sm" />
              <span>The Compass</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#A3A8B2]">
              A Nigerian media company combining technology and culture to redefine storytelling, amplify African culture, develop talent, and advise ambitious partners.
            </p>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-display text-sm font-semibold text-[#F4F3EF]">
              Navigation
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-y-2.5 text-sm text-[#A3A8B2]">
              <li>
                <a
                  href="#news"
                  onClick={(e) => handleSection(e, 'news')}
                  className="transition-colors hover:text-[#F4F3EF]"
                >
                  News &amp; Dispatches
                </a>
              </li>
              <li>
                <a
                  href="/mission"
                  onClick={handleMission}
                  className="transition-colors hover:text-[#F4F3EF]"
                >
                  Mission &amp; Practices
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleSection(e, 'work')}
                  className="transition-colors hover:text-[#F4F3EF]"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#talent"
                  onClick={(e) => handleSection(e, 'talent')}
                  className="transition-colors hover:text-[#F4F3EF]"
                >
                  Talent Roster
                </a>
              </li>
              <li>
                <a
                  href="#consultancy"
                  onClick={(e) => handleSection(e, 'consultancy')}
                  className="transition-colors hover:text-[#F4F3EF]"
                >
                  Consultancy
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSection(e, 'contact')}
                  className="transition-colors hover:text-[#F4F3EF]"
                >
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold text-[#F4F3EF]">
              Lagos Headquarters
            </h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-[#A3A8B2]">
              14 Adeola Odeku Street
              <br />
              Victoria Island, Lagos
              <br />
              Nigeria
            </address>
            <p className="mt-3 text-sm">
              <a
                href="mailto:hello@thecompass.ng"
                className="text-[#E5A024] transition-colors hover:text-[#F2B43E]"
              >
                hello@thecompass.ng
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-[#A3A8B2] sm:flex-row sm:items-center">
          <p>© 2026 The Compass Media Ltd. Registered in Lagos, Nigeria.</p>
          <p>Storytelling · Culture · Talent · Consultancy</p>
        </div>
      </div>
    </footer>
  );
}
