import { useState, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import type { AppPage } from '../utils/compassLogic';
import { CompassLogoMark } from './CompassLogoMark';

interface NavbarProps {
  activePage: AppPage;
  onNavigateHome: () => void;
  onNavigateMission: () => void;
  onNavigateSection: (sectionId: string) => void;
  onStartProject: () => void;
}

const NAV_ITEMS: Array<
  | { type: 'section'; id: string; href: string; label: string }
  | { type: 'mission'; href: string; label: string }
> = [
  { type: 'section', id: 'news', href: '#news', label: 'News' },
  { type: 'mission', href: '/mission', label: 'Mission' },
  { type: 'section', id: 'work', href: '#work', label: 'Work' },
  { type: 'section', id: 'talent', href: '#talent', label: 'Talent' },
  { type: 'section', id: 'consultancy', href: '#consultancy', label: 'Consultancy' },
];

export function Navbar({
  activePage,
  onNavigateHome,
  onNavigateMission,
  onNavigateSection,
  onStartProject,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMobileOpen(false);
    onNavigateHome();
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: (typeof NAV_ITEMS)[number]
  ) => {
    event.preventDefault();
    setMobileOpen(false);
    if (item.type === 'mission') {
      onNavigateMission();
    } else {
      onNavigateSection(item.id);
    }
  };

  const handleMobileAction = () => {
    setMobileOpen(false);
    onStartProject();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0B0C0E]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-6 py-4 lg:px-10">
        {/* Zone 1: Small logo emblem + single-line wordmark */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-[#F4F3EF] transition-colors duration-150 hover:text-[#E5A024] whitespace-nowrap shrink-0"
        >
          <CompassLogoMark size="sm" />
          <span>The Compass</span>
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A3A8B2]"
        >
          {NAV_ITEMS.map((item) => {
            const isCurrent = item.type === 'mission' && activePage === 'mission';
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, item)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-[#E5A024] after:transition-transform after:duration-150 ${
                  isCurrent
                    ? 'text-[#F4F3EF] after:scale-x-100'
                    : 'hover:text-[#F4F3EF] after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action (desktop) + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onStartProject}
            className="hidden md:inline-flex min-h-[40px] items-center justify-center rounded-md bg-[#E5A024] px-5 py-2 text-sm font-semibold text-[#0B0C0E] transition-colors duration-150 hover:bg-[#F2B43E] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start a Project
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/12 text-[#F4F3EF] transition-colors duration-150 hover:border-white/25 md:hidden cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-white/[0.08] bg-[#131519] px-6 py-5 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isCurrent = item.type === 'mission' && activePage === 'mission';
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isCurrent ? 'page' : undefined}
                  onClick={(event) => handleNavClick(event, item)}
                  className={`flex min-h-[44px] items-center text-base font-medium transition-colors duration-150 ${
                    isCurrent
                      ? 'text-[#E5A024]'
                      : 'text-[#F4F3EF] hover:text-[#E5A024]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 border-t border-white/[0.08] pt-4">
            <button
              type="button"
              onClick={handleMobileAction}
              className="flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#E5A024] px-5 py-2.5 text-sm font-semibold text-[#0B0C0E] transition-colors duration-150 hover:bg-[#F2B43E] cursor-pointer"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
