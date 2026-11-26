import type {
  CaseStudy,
  InquiryTopic,
  MissionPillar,
  WorkCategory,
} from '../data/compassData';

export interface InquiryFormValues {
  name: string;
  email: string;
  organization: string;
  topic: InquiryTopic | '';
  budget: string;
  brief: string;
}

export interface InquiryFieldErrors {
  name?: string;
  email?: string;
  topic?: string;
  brief?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: InquiryFieldErrors;
}

export interface SubmittedInquiry {
  referenceId: string;
  name: string;
  email: string;
  organization: string;
  topic: InquiryTopic;
  budget: string;
  brief: string;
  submittedAt: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function filterCaseStudies(
  studies: CaseStudy[],
  category: WorkCategory
): CaseStudy[] {
  if (category === 'All') {
    return studies;
  }
  return studies.filter((study) => study.category === category);
}

export function getCapabilityById(
  pillars: MissionPillar[],
  id: string
): MissionPillar | undefined {
  return pillars.find((pillar) => pillar.id === id);
}

export function validateInquiryForm(values: InquiryFormValues): ValidationResult {
  const errors: InquiryFieldErrors = {};

  const trimmedName = values.name.trim();
  if (!trimmedName) {
    errors.name = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = values.email.trim();
  if (!trimmedEmail) {
    errors.email = 'Please enter a valid work or studio email.';
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'Enter a valid email address (for example, name@company.com).';
  }

  if (!values.topic) {
    errors.topic = 'Select a primary focus area for your brief.';
  }

  const trimmedBrief = values.brief.trim();
  if (!trimmedBrief) {
    errors.brief = 'Tell us briefly about your project, goals, or timeline.';
  } else if (trimmedBrief.length < 20) {
    errors.brief = 'Please share at least 20 characters so our Lagos team can prepare a thoughtful response.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function createInquirySubmission(
  values: InquiryFormValues,
  existingCount: number,
  now: Date = new Date()
): SubmittedInquiry {
  const validation = validateInquiryForm(values);
  if (!validation.valid || !values.topic) {
    throw new Error('Cannot create submission from invalid inquiry form values.');
  }

  const year = now.getUTCFullYear();
  const sequence = String(existingCount + 1).padStart(3, '0');

  return {
    referenceId: `CMP-${year}-${sequence}`,
    name: values.name.trim(),
    email: values.email.trim(),
    organization: values.organization.trim() || 'Independent / Studio Inquiry',
    topic: values.topic,
    budget: values.budget || 'To be scoped on discovery call',
    brief: values.brief.trim(),
    submittedAt: now.toISOString(),
  };
}

export function calculateScrollProgress(
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number
): number {
  const maxScroll = scrollHeight - clientHeight;
  if (maxScroll <= 0) {
    return 0;
  }
  const ratio = scrollTop / maxScroll;
  if (ratio <= 0) return 0;
  if (ratio >= 1) return 1;
  return ratio;
}

