import { devis } from './devis';
import { supplementalDevis } from './supplementalDevis';
import { categories } from './categories';
import { sixtyFourYoginis } from './yoginis64';
import { shodashaNityas } from './shodashaNityas';
import { chakraYoginis, ashtaVashinis, sixteenNityaKalas } from './guptaShakti';
import { dwadashaKalis } from './dwadashaKalis';
import { shaktiPeethas } from './shaktiPeethas';
import { odishaShaktaHeritage } from './odishaShakta';
import { pratyangiraTheology, pratyangiraForms, pratyangiraDevotionalTexts, pratyangiraTemples } from './pratyangira';
import { scriptures } from './scriptures';
import { sriChakraAvaranas } from './sriChakra';
import { acharaComparisons } from './acharas';
import {
  ashtaLakshmiList,
  navapatrikaList,
  shodashaMatrikasList,
  saptaSindhuList,
  panchaBhutaShaktisList,
  regionalMothersList
} from './specialGroupings';
import { groupDerivedDevis } from './groupDerivedDevis';
import { Devi, CategoryInfo } from '../types';

// Combine primary, supplemental, and group-derived Devis without duplicates
const deviMap = new Map<string, Devi>();
[...devis, ...supplementalDevis, ...groupDerivedDevis].forEach(devi => {
  deviMap.set(devi.id, devi);
});

export const allDevis: Devi[] = Array.from(deviMap.values());

export function getDeviById(id: string): Devi | undefined {
  return deviMap.get(id);
}

export function getDevisByCategory(categorySlug: string): Devi[] {
  const cat = categories.find(c => c.slug === categorySlug);
  if (!cat) return [];

  // Match by category name or classification tags
  return allDevis.filter(devi =>
    devi.classification.some(c =>
      c.toLowerCase().includes(cat.name.toLowerCase()) ||
      cat.name.toLowerCase().includes(c.toLowerCase()) ||
      c.toLowerCase().includes(cat.slug.toLowerCase())
    ) ||
    (cat.deviIds && cat.deviIds.includes(devi.id))
  );
}

export function searchDevis(query: string): Devi[] {
  if (!query || query.trim() === '') return allDevis;
  const q = query.toLowerCase().trim();

  return allDevis.filter(d =>
    d.primaryName.toLowerCase().includes(q) ||
    d.sanskritName.toLowerCase().includes(q) ||
    (d.odiaName && d.odiaName.toLowerCase().includes(q)) ||
    d.alternateNames.some(a => a.toLowerCase().includes(q)) ||
    d.shortIntro.toLowerCase().includes(q) ||
    d.philosophicalSignificance.toLowerCase().includes(q) ||
    d.classification.some(c => c.toLowerCase().includes(q)) ||
    d.traditions.some(t => t.toLowerCase().includes(q))
  );
}

export {
  categories,
  sixtyFourYoginis,
  shodashaNityas,
  chakraYoginis,
  ashtaVashinis,
  sixteenNityaKalas,
  dwadashaKalis,
  shaktiPeethas,
  odishaShaktaHeritage,
  pratyangiraTheology,
  pratyangiraForms,
  pratyangiraDevotionalTexts,
  pratyangiraTemples,
  scriptures,
  sriChakraAvaranas,
  acharaComparisons,
  ashtaLakshmiList,
  navapatrikaList,
  shodashaMatrikasList,
  saptaSindhuList,
  panchaBhutaShaktisList,
  regionalMothersList
};
