import { useEffect, useRef, useState, type FormEvent } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  BUDGET_RANGES,
  CLIENT_TESTIMONIAL,
  CONSULTANCY_MODELS,
  INQUIRY_TOPICS,
  type InquiryTopic,
} from '../data/compassData';
import {
  createInquirySubmission,
  validateInquiryForm,
  type InquiryFieldErrors,
  type InquiryFormValues,
  type SubmittedInquiry,
} from '../utils/compassLogic';

const STORAGE_KEY = 'the_compass_submitted_inquiries_v1';

interface ConsultancyContactSectionProps {
  prefillTopic: InquiryTopic | '';
  prefillContext: string;
  prefillVersion: number;
}

function loadStoredInquiries(): SubmittedInquiry[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function ConsultancyContactSection({
  prefillTopic,
  prefillContext,
  prefillVersion,
}: ConsultancyContactSectionProps) {
  const [formValues, setFormValues] = useState<InquiryFormValues>({
    name: '',
    email: '',
    organization: '',
    topic: prefillTopic || '',
    budget: BUDGET_RANGES[1],
    brief: '',
  });
  const [errors, setErrors] = useState<InquiryFieldErrors>({});
  const [submittedInquiries, setSubmittedInquiries] = useState<SubmittedInquiry[]>(() =>
    typeof window !== 'undefined' ? loadStoredInquiries() : []
  );
  const [latestSubmission, setLatestSubmission] = useState<SubmittedInquiry | null>(null);
  const [contextBanner, setContextBanner] = useState<string>('');
  const nameInputRef = useRef<HTMLInputElement>(null);
  const contactCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefillVersion === 0) return;
    setLatestSubmission(null);
    setFormValues((prev) => ({
      ...prev,
      topic: prefillTopic || prev.topic,
      brief:
        prefillContext && !prev.brief.trim()
          ? `${prefillContext}. We would like to discuss scope, timeline, and potential collaboration.`
          : prev.brief,
    }));
    setContextBanner(prefillContext);
    setErrors((prev) => ({ ...prev, topic: undefined }));
    nameInputRef.current?.focus({ preventScroll: true });
  }, [prefillTopic, prefillContext, prefillVersion]);

  const handleChange = <K extends keyof InquiryFormValues>(
    field: K,
    value: InquiryFormValues[K]
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateInquiryForm(formValues);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const record = createInquirySubmission(formValues, submittedInquiries.length);
    const updated = [record, ...submittedInquiries];
    setSubmittedInquiries(updated);
    setLatestSubmission(record);
    setErrors({});
    setContextBanner('');

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage quota restrictions
    }

    requestAnimationFrame(() => {
      contactCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleResetForNewBrief = () => {
    setLatestSubmission(null);
    setFormValues({
      name: '',
      email: '',
      organization: '',
      topic: '',
      budget: BUDGET_RANGES[1],
      brief: '',
    });
    setErrors({});
    setContextBanner('');
    setTimeout(() => nameInputRef.current?.focus({ preventScroll: true }), 0);
  };

  return (
    <section
      id="consultancy"
      aria-labelledby="consultancy-heading"
      className="border-b border-white/[0.08] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left column: Consultancy models, attributable testimonial, and Lagos Studio details */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-sm font-medium text-[#E5A024]">
                Consultancy &amp; Partnerships
              </p>
              <h2
                id="consultancy-heading"
                className="headline-balance mt-3 font-display text-3xl font-bold tracking-tight text-[#F4F3EF] lg:text-4xl"
              >
                Cultural fluency backed by research and execution.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#A3A8B2]">
                We work directly with founders, brand leaders, cultural institutions, and media platforms to shape strategies that resonate authentically across Nigeria, West Africa, and global diaspora audiences.
              </p>

              {/* Engagement models separated cleanly with hairline dividers */}
              <div className="mt-9 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {CONSULTANCY_MODELS.map((model) => (
                  <div key={model.id} className="py-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg font-semibold text-[#F4F3EF]">
                        <span className="mr-2 font-mono tabular-figures text-sm text-[#E5A024]">
                          {model.index}
                        </span>
                        {model.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-[#A3A8B2]">{model.timeline}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#A3A8B2]">
                      {model.description}
                    </p>
                    <p className="mt-2.5 text-xs text-[#F4F3EF]/85">
                      Output: {model.deliverable}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Attributable client proof */}
            <figure className="mt-10 border-t border-white/[0.08] pt-8">
              <blockquote className="text-sm leading-relaxed text-[#F4F3EF]/90">
                “{CLIENT_TESTIMONIAL.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs text-[#A3A8B2]">
                <span className="font-semibold text-[#F4F3EF]">
                  {CLIENT_TESTIMONIAL.author}
                </span>
                <span aria-hidden="true" className="mx-2 text-white/30">
                  ·
                </span>
                <span>{CLIENT_TESTIMONIAL.role}</span>
                <span aria-hidden="true" className="mx-2 text-white/30">
                  ·
                </span>
                <span>{CLIENT_TESTIMONIAL.organization}</span>
              </figcaption>
            </figure>

            {/* Lagos studio presence */}
            <div className="mt-8 border-t border-white/[0.08] pt-6 text-sm text-[#A3A8B2]">
              <p className="font-display font-semibold text-[#F4F3EF]">
                Lagos Studio &amp; Advisory Desk
              </p>
              <p className="mt-1">
                14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
              </p>
              <p className="mt-1">
                <a
                  href="mailto:hello@thecompass.ng"
                  className="text-[#E5A024] transition-colors duration-150 hover:text-[#F2B43E]"
                >
                  hello@thecompass.ng
                </a>
                <span aria-hidden="true" className="mx-2 text-white/30">
                  ·
                </span>
                <span className="font-mono tabular-figures text-xs">WAT (UTC+1)</span>
              </p>
            </div>
          </div>

          {/* Right column: Interactive Lead Capture & Brief Form */}
          <div id="contact" ref={contactCardRef} className="scroll-mt-24 lg:col-span-7">
            <div className="rounded-xl border border-white/[0.11] bg-[#131519] p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#F4F3EF]">
                    Start a Conversation
                  </h3>
                  <p className="mt-1.5 text-sm text-[#A3A8B2]">
                    Share your objectives across storytelling, culture, talent, or consultancy. Our Lagos partners respond within two business days.
                  </p>
                </div>
              </div>

              {contextBanner && !latestSubmission && (
                <div className="mt-5 rounded-lg border border-[#E5A024]/35 bg-[#191C22] px-4 py-3 text-xs text-[#F4F3EF]">
                  <span className="font-semibold text-[#E5A024]">Selected Context:</span>{' '}
                  {contextBanner}
                </div>
              )}

              {latestSubmission ? (
                <div
                  role="status"
                  aria-live="polite"
                  data-testid="inquiry-confirmation"
                  className="mt-8 space-y-6"
                >
                  <div className="flex items-start gap-3.5 border-b border-white/[0.08] pb-6">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-[#E5A024]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-mono tabular-figures text-[#E5A024]">
                        Brief Received · Ref {latestSubmission.referenceId}
                      </p>
                      <h4 className="mt-1 font-display text-xl font-bold text-[#F4F3EF]">
                        Thank you, {latestSubmission.name}.
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#A3A8B2]">
                        Your brief for <strong className="text-[#F4F3EF]">{latestSubmission.topic}</strong> has been logged with our Lagos desk. A confirmation copy is prepared for{' '}
                        <span className="text-[#F4F3EF]">{latestSubmission.email}</span>.
                      </p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-xs text-[#A3A8B2]">Organization</dt>
                      <dd className="mt-1 font-medium text-[#F4F3EF]">
                        {latestSubmission.organization}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#A3A8B2]">Estimated Scope</dt>
                      <dd className="mt-1 font-medium text-[#F4F3EF]">
                        {latestSubmission.budget}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-xs text-[#A3A8B2]">Project Summary</dt>
                      <dd className="mt-1 leading-relaxed text-[#F4F3EF]/90">
                        {latestSubmission.brief}
                      </dd>
                    </div>
                  </dl>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetForNewBrief}
                      className="inline-flex min-h-[42px] items-center justify-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-[#F4F3EF] transition-colors duration-150 hover:border-white/35 cursor-pointer"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-8 space-y-5"
                  aria-label="Project and consultancy inquiry form"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-xs font-medium text-[#F4F3EF]"
                      >
                        Full Name <span className="text-[#E5A024]">*</span>
                      </label>
                      <input
                        ref={nameInputRef}
                        id="inquiry-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formValues.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Adaeze Okafor"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'inquiry-name-error' : undefined}
                        className="mt-2 w-full rounded-md border border-white/14 bg-[#0B0C0E] px-3.5 py-2.5 text-sm text-[#F4F3EF] placeholder:text-[#A3A8B2]/55 transition-colors duration-150 focus:border-[#E5A024] focus:outline-none"
                      />
                      {errors.name && (
                        <p
                          id="inquiry-name-error"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-medium text-[#F4F3EF]"
                      >
                        Work or Studio Email <span className="text-[#E5A024]">*</span>
                      </label>
                      <input
                        id="inquiry-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formValues.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="adaeze@company.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'inquiry-email-error' : undefined}
                        className="mt-2 w-full rounded-md border border-white/14 bg-[#0B0C0E] px-3.5 py-2.5 text-sm text-[#F4F3EF] placeholder:text-[#A3A8B2]/55 transition-colors duration-150 focus:border-[#E5A024] focus:outline-none"
                      />
                      {errors.email && (
                        <p
                          id="inquiry-email-error"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="inquiry-org"
                        className="block text-xs font-medium text-[#F4F3EF]"
                      >
                        Organization or Collective
                      </label>
                      <input
                        id="inquiry-org"
                        name="organization"
                        type="text"
                        autoComplete="organization"
                        value={formValues.organization}
                        onChange={(e) => handleChange('organization', e.target.value)}
                        placeholder="Brand, studio, or institution"
                        className="mt-2 w-full rounded-md border border-white/14 bg-[#0B0C0E] px-3.5 py-2.5 text-sm text-[#F4F3EF] placeholder:text-[#A3A8B2]/55 transition-colors duration-150 focus:border-[#E5A024] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-topic"
                        className="block text-xs font-medium text-[#F4F3EF]"
                      >
                        Focus Area <span className="text-[#E5A024]">*</span>
                      </label>
                      <select
                        id="inquiry-topic"
                        name="topic"
                        required
                        value={formValues.topic}
                        onChange={(e) =>
                          handleChange('topic', e.target.value as InquiryTopic | '')
                        }
                        aria-invalid={Boolean(errors.topic)}
                        aria-describedby={errors.topic ? 'inquiry-topic-error' : undefined}
                        className="mt-2 w-full rounded-md border border-white/14 bg-[#0B0C0E] px-3.5 py-2.5 text-sm text-[#F4F3EF] transition-colors duration-150 focus:border-[#E5A024] focus:outline-none"
                      >
                        <option value="">Select a mission practice</option>
                        {INQUIRY_TOPICS.map((topic) => (
                          <option key={topic} value={topic}>
                            {topic}
                          </option>
                        ))}
                      </select>
                      {errors.topic && (
                        <p
                          id="inquiry-topic-error"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.topic}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-budget"
                      className="block text-xs font-medium text-[#F4F3EF]"
                    >
                      Indicative Engagement Scope
                    </label>
                    <select
                      id="inquiry-budget"
                      name="budget"
                      value={formValues.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className="mt-2 w-full rounded-md border border-white/14 bg-[#0B0C0E] px-3.5 py-2.5 text-sm text-[#F4F3EF] transition-colors duration-150 focus:border-[#E5A024] focus:outline-none"
                    >
                      {BUDGET_RANGES.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-brief"
                      className="block text-xs font-medium text-[#F4F3EF]"
                    >
                      Project Brief &amp; Timeline <span className="text-[#E5A024]">*</span>
                    </label>
                    <textarea
                      id="inquiry-brief"
                      name="brief"
                      rows={4}
                      required
                      value={formValues.brief}
                      onChange={(e) => handleChange('brief', e.target.value)}
                      placeholder="Describe the story, cultural experience, talent inquiry, or consultancy challenge you are exploring..."
                      aria-invalid={Boolean(errors.brief)}
                      aria-describedby={errors.brief ? 'inquiry-brief-error' : undefined}
                      className="mt-2 w-full rounded-md border border-white/14 bg-[#0B0C0E] px-3.5 py-2.5 text-sm leading-relaxed text-[#F4F3EF] placeholder:text-[#A3A8B2]/55 transition-colors duration-150 focus:border-[#E5A024] focus:outline-none"
                    />
                    {errors.brief && (
                      <p
                        id="inquiry-brief-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.brief}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-md bg-[#E5A024] px-6 py-3 text-sm font-semibold text-[#0B0C0E] transition-colors duration-150 hover:bg-[#F2B43E] sm:w-auto cursor-pointer"
                    >
                      <span>Send Project Brief</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}

              {/* Persistent log of submitted briefs in this session */}
              {submittedInquiries.length > 0 && (
                <div
                  data-testid="submitted-briefs-log"
                  className="mt-8 border-t border-white/[0.08] pt-6"
                >
                  <p className="text-xs font-medium text-[#A3A8B2] tabular-figures">
                    Your Logged Briefs ({submittedInquiries.length})
                  </p>
                  <ul className="mt-3 divide-y divide-white/[0.07]">
                    {submittedInquiries.slice(0, 3).map((item) => (
                      <li
                        key={item.referenceId}
                        className="flex flex-wrap items-center justify-between gap-2 py-2.5 text-xs"
                      >
                        <div className="min-w-0">
                          <span className="font-mono tabular-figures text-[#E5A024]">
                            {item.referenceId}
                          </span>
                          <span aria-hidden="true" className="mx-2 text-white/30">
                            ·
                          </span>
                          <span className="font-medium text-[#F4F3EF]">
                            {item.topic}
                          </span>
                        </div>
                        <span className="text-[#A3A8B2]">{item.organization}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
