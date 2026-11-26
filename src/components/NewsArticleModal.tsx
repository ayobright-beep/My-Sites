import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import type { InquiryTopic, NewsArticle } from '../data/compassData';
import { EditorialImage } from './EditorialImage';

interface NewsArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  onInquireTopic: (topic: InquiryTopic, contextNote: string) => void;
}

export function NewsArticleModal({
  article,
  onClose,
  onInquireTopic,
}: NewsArticleModalProps) {
  useEffect(() => {
    if (!article) return;
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
  }, [article, onClose]);

  if (!article) return null;

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
        aria-labelledby="news-article-modal-title"
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-white/15 bg-[#131519] text-[#F4F3EF]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/[0.08] bg-[#131519]/95 px-6 py-4 backdrop-blur-sm">
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

          <button
            type="button"
            onClick={onClose}
            aria-label="Close news article"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/12 text-[#F4F3EF] transition-colors duration-150 hover:border-white/30 cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <article className="p-6 sm:p-8">
          <h2
            id="news-article-modal-title"
            className="headline-balance font-display text-2xl font-bold tracking-tight text-[#F4F3EF] sm:text-3xl"
          >
            {article.title}
          </h2>

          <p className="mt-3 text-xs text-[#A3A8B2]">
            <span className="font-semibold text-[#F4F3EF]">{article.author}</span>
            <span aria-hidden="true" className="mx-2 text-white/30">
              ·
            </span>
            <span>{article.authorRole}</span>
            <span aria-hidden="true" className="mx-2 text-white/30">
              ·
            </span>
            <span>{article.location}</span>
          </p>

          {article.image && (
            <div className="mt-6 aspect-[16/9] overflow-hidden rounded-lg border border-white/[0.08] bg-[#191C22]">
              <EditorialImage
                src={article.image}
                alt={article.imageAlt ?? article.title}
                fallbackTitle={article.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-[#F4F3EF]/88">
            {article.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[42px] rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-[#F4F3EF] transition-colors duration-150 hover:border-white/35 cursor-pointer"
            >
              Back to News
            </button>

            <button
              type="button"
              onClick={() => {
                const topic = article.relatedTopic;
                const note = `Regarding article: ${article.title}`;
                onClose();
                onInquireTopic(topic, note);
              }}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-md bg-[#E5A024] px-5 py-2.5 text-sm font-semibold text-[#0B0C0E] transition-colors duration-150 hover:bg-[#F2B43E] cursor-pointer"
            >
              <span>Discuss {article.relatedTopic}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
