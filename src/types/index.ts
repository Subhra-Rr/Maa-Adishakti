export type EvidenceStatus =
  | 'Primary textual evidence'
  | 'Traditional lineage account'
  | 'Temple or regional tradition'
  | 'Scholarly interpretation'
  | 'Contemporary devotional interpretation'
  | 'Unverified / disputed';

export type AcharaType = 'Dakshinachara' | 'Vamachara' | 'Samayachara' | 'Kaulachara' | string;

export type VerificationStatus =
  | 'verified'
  | 'unverified'
  | 'iconography_varies'
  | 'gupta_svarupa'
  | 'not_publicly_documented';

export type FallbackType =
  | 'gupta_svarupa'
  | 'image_unavailable'
  | 'iconography_varies'
  | 'not_publicly_documented';

export interface ImageAsset {
  id: string;
  title: string;
  imagePath?: string;
  imageType: 'temple_sculpture' | 'traditional_painting' | 'verified_iconography' | 'devotional_art' | 'sacred_om_fallback';
  attribution: string;
  source: string;
  license: string;
  verificationStatus: VerificationStatus;
  fallbackType?: FallbackType;
}

export interface ScripturalReference {
  textName: string;
  originalLanguage: string;
  sectionOrChapter?: string;
  verseOrExcerpt?: string;
  sourceType: 'Purana' | 'Tantra' | 'Agama' | 'Veda/Upanishad' | 'Stotra' | 'Commentary' | 'Devotional & Philosophical' | 'Temple or regional tradition' | 'Scholarly interpretation' | string;
  attribution?: string;
}

export interface MantraStotraItem {
  id: string;
  title: string;
  type: 'Dhyana' | 'Mantra' | 'Stotra' | 'Kavacha' | 'Gayatri' | 'Nama' | 'Sahasranama';
  sanskrit: string;
  transliteration: string;
  meaning: string;
  source: string;
  isPublicDevotional: boolean;
  cautionNotice?: string;
}

export interface YantraInfo {
  name: string;
  geometricalDescription: string;
  scripturalReference: string;
  documentedSignificance: string;
  svgRepresentation?: string;
}

export interface Devi {
  id: string;
  primaryName: string;
  sanskritName: string;
  odiaName?: string;
  alternateNames: string[];
  nameMeaning: string;
  classification: string[];
  traditions: string[];
  acharas: AcharaType[];
  shortIntro: string;
  philosophicalSignificance: string;
  theologicalPosition: string;
  scripturalReferences: ScripturalReference[];
  iconography: {
    arms: number | string;
    weaponsAndAttributes: string[];
    vahana: string;
    mudras: string[];
    crownAndOrnaments: string;
    complexion: string;
    asana: string;
    surroundingDeities?: string[];
    symbolism: string;
  };
  worshipTraditions: {
    kula?: string;
    acharas: string[];
    regionalPractices?: string[];
    sampradayaNotes?: string;
  };
  spiritualSignificance: {
    tattva: string;
    shakti: string;
    symbolism: string;
    theologicalInterpretation: string;
  };
  mantraStotra: MantraStotraItem[];
  yantra?: YantraInfo;
  imageAssets: ImageAsset[];
  relatedDeviIds: string[];
  relatedPeethaIds?: string[];
  relatedTempleIds?: string[];
  relatedTextIds?: string[];
  evidenceStatus: EvidenceStatus;
  region?: string[];
  tithiOrLunarDay?: string;
  chakraAssociation?: string;
  directionOrDikpala?: string;
  planetOrGraha?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  sanskritName: string;
  odiaName?: string;
  slug: string;
  description: string;
  traditionalContext: string;
  scripturalFoundations: string[];
  deviCount: number;
  iconName: string;
  deviIds: string[];
}

export interface ShaktiPeetha {
  id: string;
  name: string;
  devi: string;
  bhairava: string;
  bodyPartOrOrnament: string;
  location: string;
  state: string;
  country: string;
  classification: 'Adi Shakti Peetha' | 'Maha Shakti Peetha' | '51 Shakti Peetha';
  scripturalSources: string[];
  historicalBackground: string;
  significance: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  deviId?: string;
}

export interface ScriptureItem {
  id: string;
  title: string;
  sanskritTitle: string;
  category: 'Puranic' | 'Tantric & Agamic' | 'Devotional & Stotras' | 'Kashmir Shaivism & Philosophical';
  authorOrAttribution: string;
  approximatePeriod: string;
  subject: string;
  relevantDevis: string[];
  sectionInfo: string;
  summary: string;
  excerpts: {
    title: string;
    sanskrit: string;
    transliteration: string;
    translation: string;
    context: string;
  }[];
  sourcesAndEditions: string[];
}

export interface YoginiEntry {
  number: number;
  id: string;
  name: string;
  sanskritName: string;
  vahana: string;
  weapons: string[];
  iconographyDescription: string;
  significance: string;
  templeSite: string; // e.g. Hirapur 64 Yogini Temple, Odisha
  imageStatus: VerificationStatus;
}

export interface NityaDeviEntry {
  number: number;
  id: string;
  name: string;
  sanskritName: string;
  tithi: string;
  lunarPhase: string;
  mudraOrAttribute: string;
  sriChakraPlacement: string;
  philosophicalMeaning: string;
  associatedMantraType: string;
  scripturalSource: string;
}

export interface ChakraYoginiEntry {
  id: string;
  chakra: string;
  sanskritChakra: string;
  yoginiName: string;
  sanskritName: string;
  dhatuGoverned: string;
  colorAndComplexion: string;
  weapons: string[];
  iconography: string;
  esotericSignificance: string;
  sourceText: string;
}

export interface AshtaVashiniEntry {
  number: number;
  id: string;
  name: string;
  sanskritName: string;
  speechAspect: string;
  sriChakraAvarana: string;
  significance: string;
}

export interface DwadashaKaliEntry {
  number: number;
  id: string;
  name: string;
  sanskritName: string;
  phaseOfConsciousness: string;
  kramaFunction: string;
  philosophicalSignificance: string;
  scripturalSource: string;
}

export interface PratyangiraFormEntry {
  id: string;
  name: string;
  sanskritName: string;
  alternativeNames: string[];
  scripturalReference: string;
  iconographicDescription: string;
  regionalAssociation: string;
  confidenceLevel: EvidenceStatus;
  philosophicalRole: string;
}

export interface OdishaTempleEntry {
  id: string;
  deviName: string;
  sanskritName: string;
  odiaName: string;
  templeName: string;
  location: string;
  district: string;
  historicalEra: string;
  architecturalStyle: string;
  significance: string;
  tantricTradition: string;
  festivals: string[];
  isPeetha: boolean;
  peethaDetails?: string;
  description: string;
}
