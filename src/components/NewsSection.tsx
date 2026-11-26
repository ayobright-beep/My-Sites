import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  NEWS_ARTICLES,
  NEWS_CATEGORIES,
  type NewsArticle,
  type NewsCategory,
} from '../data/compassData';
import { filterNewsArticles } from '../utils/compassLogic';
import { EditorialImage } from './EditorialImage';

interface NewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
  onOpenMissionPage: () => void;
}

export function NewsSection({
  onSelectArticle,
  onOpenMissionPage,
}: NewsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('All');
  const filteredArticles = filterNewsArticles(NEWS_ARTICLES, activeCategory);
  const leadArticle = filteredArticles[0];
  const secondaryArticles = filteredArticles.slice(1);

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="border-b border-white/[0.08] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section header & interactive category filter */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#E5A024]">News &amp; Dispatches</p>
            <h2
              id="news-heading"
              className="headline-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#F4F3EF] lg:text-4xl"
            >
              Stories, announcements, and field notes from our Lagos desk.
            </h2>
          </div>

          <div
            role="group"
            aria-label="Filter news articles by topic"
            className="flex flex-wrap items-center gap-1 rounded-lg border border-white/[0.09] bg-[#131519] p-1"
          >
            {NEWS_CATEGORIES.map((category) => {
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
                  {category === 'All' ? 'All News' : category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial News Grid: Lead Feature + Secondary Dispatch Stack */}
        <div
          data-testid="news-articles-list"
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch"
        >
          {leadArticle && (
            <article
              className={`group flex flex-col overflow-hidden rounded-xl border border-white/[0.09] bg-[#131519] transition-colors duration-150 hover:border-white/25 ${
                secondaryArticles.length > 0 ? 'lg:col-span-7' : 'lg:col-span-12'
              }`}
            >
              {leadArticle.image && (
                <div className="relative aspect-[16/9] overflow-hidden bg-[#191C22]">
                  <EditorialImage
                    src={leadArticle.image}
                    alt={leadArticle.imageAlt ?? leadArticle.title}
                    fallbackTitle={leadArticle.title}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#131519]/75 via-transparent to-transparent"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
                <div>
                  <p className="text-xs text-[#A3A8B2]">
                    <span className="font-medium text-[#E5A024]">{leadArticle.category}</span>
                    <span aria-hidden="true" className="mx-2 text-white/30">
                      ·
                    </span>
                    <span className="tabular-figures">{leadArticle.date}</span>
                    <span aria-hidden="true" className="mx-2 text-white/30">
                      ·
                    </span>
                    <span>{leadArticle.readTime}</span>
                  </p>

                  <h3 className="headline-balance mt-3 font-display text-2xl font-bold tracking-tight text-[#F4F3EF] lg:text-[28px] lg:leading-tight">
                    {leadArticle.title}
                  </h3>

                  <p className="mt-3.5 text-sm leading-relaxed text-[#A3A8B2] lg:text-[15px]">
                    {leadArticle.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                  <p className="text-xs text-[#A3A8B2]">
                    <span className="font-medium text-[#F4F3EF]">{leadArticle.author}</span>
                    <span aria-hidden="true" className="mx-2 text-white/30">
                      ·
                    </span>
                    <span>{leadArticle.location}</span>
                  </p>

                  <button
                    type="button"
                    onClick={() => onSelectArticle(leadArticle)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#E5A024] transition-colors duration-150 hover:text-[#F2B43E] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Read Article — {leadArticle.title.split(':')[0]}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          )}

          {secondaryArticles.length > 0 && (
            <div className="flex flex-col justify-between divide-y divide-white/[0.08] rounded-xl border border-white/[0.09] bg-[#131519] lg:col-span-5">
              {secondaryArticles.map((article) => (
                <article
                  key={article.id}
                  className="flex flex-1 flex-col justify-between p-6 transition-colors duration-150 hover:bg-[#171A20]"
                >
                  <div>
                    <p className="text-xs text-[#A3A8B2]">
                      <span className="font-medium text-[#E5A024]">{article.category}</span>
                      <span aria-hidden="true" className="mx-2 text-white/30">
                        ·
                      </span>
                      <span className="tabular-figures">{article.date}</span>
                      <span aria-hidden="true" className="mx-2 text-white/30">
                        ·
                      </span>
                      <span>{article.readTime}</span>
                    </p>

                    <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug tracking-tight text-[#F4F3EF]">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#A3A8B2]">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs text-[#A3A8B2]">{article.location}</span>
                    <button
                      type="button"
                      onClick={() => onSelectArticle(article)}
                      className="inline-flex min-h-[38px] items-center gap-1.5 text-xs font-semibold text-[#E5A024] transition-colors duration-150 hover:text-[#F2B43E] whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Read Dispatch — {article.category}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Quiet inline link pointing to the dedicated Mission & Practices page */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-7">
          <p className="text-sm text-[#A3A8B2]">
            Explore how our storytelling, cultural technology, talent, and consultancy practices operate.
          </p>
          <button
            type="button"
            onClick={onOpenMissionPage}
            className="inline-flex min-h-[42px] items-center gap-2 text-sm font-semibold text-[#F4F3EF] transition-colors duration-150 hover:text-[#E5A024] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Explore Mission &amp; Practices</span>
            <ArrowUpRight className="h-4 w-4 text-[#E5A024]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
