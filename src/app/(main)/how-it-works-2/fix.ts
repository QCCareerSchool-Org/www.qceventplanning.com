import fs from 'fs';
import path from 'path';

const COMPONENT_DIR = path.join(process.cwd(), 'src/components');

const replaceRules = [
  { search: /text-qc-primary/g, replace: 'text-qc-headings' },
  { search: /bg-qc-primary/g, replace: 'bg-qc-headings' },
  { search: /border-qc-primary/g, replace: 'border-qc-headings' },
  { search: /from-qc-primary/g, replace: 'from-qc-headings' },
  { search: /via-qc-primary/g, replace: 'via-qc-headings' },
  { search: /text-qc-accent/g, replace: 'text-qc-primary' },
  { search: /bg-qc-accent/g, replace: 'bg-qc-primary' },
  { search: /border-qc-accent/g, replace: 'border-qc-primary' },
  { search: /hover:bg-qc-accent-hover/g, replace: 'hover:bg-qc-primary/90' },
  { search: /text-qc-ink/g, replace: 'text-qc-text' },
  { search: /border-qc-ink/g, replace: 'border-qc-text' },
  { search: /divide-qc-ink/g, replace: 'divide-qc-text' },
  { search: /bg-qc-bg/g, replace: 'bg-qc-light' },
  { search: /text-\[\#010025\]/g, replace: 'text-qc-navy' },
  { search: /bg-\[\#010025\]/g, replace: 'bg-qc-navy' },
  { search: /text-\[\#23D7BC\]/g, replace: 'text-qc-primary' },
  { search: /bg-\[\#F8F9FA\]/g, replace: 'bg-qc-light' },
  { search: /text-\[\#E1C59A\]/g, replace: 'text-qc-gold' },
  { search: /text-\[\#3A4A5A\]/g, replace: 'text-qc-text' },
  { search: /bg-\[\#091534\]/g, replace: 'bg-qc-dark-blue' },
  { search: /bg-\[\#BCC1C9\]/g, replace: 'bg-qc-cobal-grey' },
  { search: /text-\[\#02013F\]/g, replace: 'text-qc-headings' }
];

const files = fs.readdirSync(COMPONENT_DIR).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(COMPONENT_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  for (const rule of replaceRules) {
    content = content.replace(rule.search, rule.replace);
  }
  fs.writeFileSync(filePath, content, 'utf-8');
}
console.log('Replaced colors successfully!');
