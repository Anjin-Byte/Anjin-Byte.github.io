import { parseFrontMatter, validateMeta } from '../data/notebook-parse';

function assert(cond: unknown, message: string): void {
  if (!cond) throw new Error(message);
}
function assertThrows(fn: () => unknown, message: string): void {
  let threw = false;
  try {
    fn();
  } catch {
    threw = true;
  }
  if (!threw) throw new Error(message);
}

const SAMPLE = `---
title: Cut and laid
date: 2026-06-11
summary: How surfaces became paper: cut and laid.
tags: [design, css]
---
Body line one.

Body line two.`;

// Front-matter is split out; values keep inner colons (split on the first only).
function testParse(): void {
  const { data, body } = parseFrontMatter(SAMPLE);
  assert(data.title === 'Cut and laid', 'title parsed');
  assert(data.date === '2026-06-11', 'date parsed');
  assert(data.summary === 'How surfaces became paper: cut and laid.', 'summary keeps inner colon');
  assert(body.startsWith('Body line one.'), 'body separated from front-matter');
}

// Input without a front-matter block is all body.
function testNoFrontMatter(): void {
  const { data, body } = parseFrontMatter('# Just a body\n');
  assert(Object.keys(data).length === 0, 'no front-matter → empty data');
  assert(body === '# Just a body\n', 'no front-matter → whole input is body');
}

// Valid front-matter validates into a typed NoteMeta with a parsed tag array.
function testValidateOk(): void {
  const { data } = parseFrontMatter(SAMPLE);
  const meta = validateMeta('cut-paper', data);
  assert(meta.title === 'Cut and laid', 'meta title');
  assert(meta.tags.length === 2 && meta.tags[0] === 'design', 'tags parsed to array');
}

// Authoring errors throw (process-fatal): missing required field, malformed date.
function testValidateThrows(): void {
  assertThrows(() => validateMeta('x', { title: 'T', summary: 'S' }), 'missing date throws');
  assertThrows(() => validateMeta('x', { title: 'T', summary: 'S', date: '2026/06/11' }), 'bad date format throws');
  assertThrows(() => validateMeta('x', { date: '2026-06-11', summary: 'S' }), 'missing title throws');
}

function run(): void {
  testParse();
  testNoFrontMatter();
  testValidateOk();
  testValidateThrows();
  // eslint-disable-next-line no-console
  console.log('notebook.test.ts passed');
}

run();
