import { categories, allDevis } from './src/data';

console.log('Total allDevis count:', allDevis.length);
let failCount = 0;

for (const cat of categories) {
  const matches = allDevis.filter(devi =>
    devi.classification.some(c =>
      c.toLowerCase().includes(cat.name.toLowerCase()) ||
      cat.name.toLowerCase().includes(c.toLowerCase()) ||
      c.toLowerCase().includes(cat.slug.toLowerCase())
    ) ||
    (cat.deviIds && cat.deviIds.includes(devi.id))
  );
  const status = matches.length > 0 ? 'PASS' : 'FAIL';
  if (matches.length === 0) failCount++;
  console.log(`[${status}] ${cat.name} (${cat.slug}): ${matches.length} matching devis`);
}

console.log(`\nAudit Complete: ${categories.length - failCount}/${categories.length} categories passed.`);
