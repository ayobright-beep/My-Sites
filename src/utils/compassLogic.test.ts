import test from 'node:test';
import assert from 'node:assert/strict';
import { CASE_STUDIES, MISSION_PILLARS } from '../data/compassData';
import {
  createInquirySubmission,
  filterCaseStudies,
  getCapabilityById,
  validateInquiryForm,
  type InquiryFormValues,
} from './compassLogic';

test('filterCaseStudies returns all items for All category', () => {
  const result = filterCaseStudies(CASE_STUDIES, 'All');
  assert.equal(result.length, CASE_STUDIES.length);
});

test('filterCaseStudies filters accurately by specific category', () => {
  const techStudies = filterCaseStudies(CASE_STUDIES, 'Culture & Tech');
  assert.equal(techStudies.length, 1);
  assert.equal(techStudies[0].id, 'eko-digital-pavilion');

  const consultancyStudies = filterCaseStudies(CASE_STUDIES, 'Consultancy');
  assert.equal(consultancyStudies.length, 1);
  assert.equal(consultancyStudies[0].id, 'west-africa-youth-index');
});

test('getCapabilityById locates mission pillars cleanly', () => {
  const pillar = getCapabilityById(MISSION_PILLARS, 'consultancy');
  assert.ok(pillar);
  assert.equal(pillar.title, 'Strategic Consultancy');
  assert.equal(getCapabilityById(MISSION_PILLARS, 'nonexistent'), undefined);
});

test('validateInquiryForm catches missing and malformed inputs', () => {
  const emptyValues: InquiryFormValues = {
    name: '',
    email: 'invalid-email',
    organization: '',
    topic: '',
    budget: '',
    brief: 'Too short',
  };

  const result = validateInquiryForm(emptyValues);
  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.topic);
  assert.ok(result.errors.brief);
});

test('validateInquiryForm accepts complete valid form and creates deterministic submission', () => {
  const validValues: InquiryFormValues = {
    name: '  Ayo Adewale  ',
    email: 'ayo@studio.ng',
    organization: 'Lagos Design Collective',
    topic: 'Strategic Consultancy',
    budget: '$25,000 – $75,000 (Production / Campaign)',
    brief: 'We are preparing a pan-African documentary and live listening tour for Q3 2026.',
  };

  const validation = validateInquiryForm(validValues);
  assert.equal(validation.valid, true);
  assert.deepEqual(validation.errors, {});

  const fixedDate = new Date('2026-11-23T12:00:00.000Z');
  const submission = createInquirySubmission(validValues, 2, fixedDate);
  assert.equal(submission.referenceId, 'CMP-2026-003');
  assert.equal(submission.name, 'Ayo Adewale');
  assert.equal(submission.topic, 'Strategic Consultancy');
  assert.equal(submission.submittedAt, '2026-11-23T12:00:00.000Z');
});
