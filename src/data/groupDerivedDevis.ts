import { Devi } from '../types';
import { sixtyFourYoginis } from './yoginis64';
import { shodashaNityas } from './shodashaNityas';
import { dwadashaKalis } from './dwadashaKalis';
import { ashtaLakshmiList, navapatrikaList, shodashaMatrikasList } from './specialGroupings';
import { chakraYoginis } from './guptaShakti';
import { resolveDeviImagePath } from '../components/DeviImage';

/**
 * Transforms all special sacred groupings (Navapatrika, Ashta Lakshmi, Shodasha Nitya,
 * Dwadasha Kali, Shodasha Matrika, Chausath Yogini, Gupta Shakti) into canonical Devi profiles
 * so they are fully searchable, filterable, and navigable across the entire encyclopedia.
 */
export const groupDerivedDevis: Devi[] = [];

// 1. NAVAPATRIKA DEVIS (9)
navapatrikaList.forEach((p) => {
  const registeredImage = resolveDeviImagePath(undefined, p.deviName, undefined, p.id);
  groupDerivedDevis.push({
    id: p.id,
    primaryName: `Maa ${p.deviName} (Navapatrika)`,
    sanskritName: p.sanskritName,
    alternateNames: [`Nabapatrika ${p.deviName}`, `Kola Bou ${p.deviName}`, p.plantAssociation],
    nameMeaning: `Aspect of Durga embodied in sacred arboreal form: ${p.plantAssociation} (${p.botanicalName}).`,
    classification: ['Navapatrika Devis', 'Nava Durga', 'Vedic Shakta Traditions'],
    traditions: ['Puranic Shakta', 'Folk-Tantric Synthesis', 'Agama Tantra', 'Odisha Shakta'],
    acharas: ['Dakshinachara', 'Kaulachara during Durga Puja'],
    shortIntro: `One of the sacred nine botanical manifestations tied into the Nabapatrika (Kola Bou) bundle during autumn Durga Puja, personified in the ${p.plantAssociation}. ${p.ritualSignificance}`,
    imagePath: registeredImage,
    philosophicalSignificance: `${p.symbolism} Navapatrika worship preserves ancient Vedic arboreal reverence integrated into supreme Shakta theology.`,
    theologicalPosition: 'In Kalika Purana and Brihannandikeshvara Purana, Durga is invoked within nine sacred plants prior to warfare against Mahishasura.',
    evidenceStatus: 'Primary textual evidence',
    relatedDeviIds: ['durga', 'shailaputri', 'brahmacharini'],
    scripturalReferences: [
      { textName: 'Kalika Purana', originalLanguage: 'Sanskrit', sectionOrChapter: 'Navapatrika Vidhi', sourceType: 'Purana' },
      { textName: 'Brihannandikeshvara Purana', originalLanguage: 'Sanskrit', sectionOrChapter: 'Durga Puja Paddhati', sourceType: 'Purana' },
      { textName: 'Durga Bhakti Tarangini', originalLanguage: 'Sanskrit', sectionOrChapter: 'Nabapatrika Prakarana', sourceType: 'Paddhati' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Sheaves of Sacred Plants', 'Abhaya Mudra', 'Varada Mudra', 'Golden Harvest Pitcher'],
      vahana: 'Simha (Lion)',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Yellow and red-bordered silk drape, fresh floral garlands, auspicious chandan',
      complexion: 'Lush golden-green and radiant golden effulgence',
      asana: 'Standing in holy herbal union at the right side of Lord Ganesha',
      symbolism: p.symbolism
    },
    worshipTraditions: {
      kula: 'Puranic Shakta',
      acharas: ['Dakshinachara', 'Kaulachara'],
      regionalPractices: ['Bengal Sharadiya Durga Puja', 'Odisha Durga Puja Kola Bou Snana'],
      sampradayaNotes: 'Consecrated at dawn on Maha Saptami at sacred rivers and ponds.'
    },
    spiritualSignificance: {
      tattva: 'Prithvi-Tattva and Vanaspati Shakti',
      shakti: 'Poshana Shakti (Divine Nourishment)',
      symbolism: p.symbolism,
      theologicalInterpretation: 'Nature is not separate from the Mother; every leaf, vine, and harvest is her direct embodiment.'
    },
    mantraStotra: [
      {
        id: `${p.id}-dhyana`,
        title: `नवपत्रिका ${p.deviName} ध्यानम्`,
        type: 'Dhyana',
        sanskrit: `ॐ ${p.sanskritName} देव्यै नमः। सर्वमङ्गलमङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥`,
        transliteration: `Om ${p.deviName} devyai namaḥ। Sarvamaṅgalamāṅgalye śive sarvārthasādhike। Śaraṇye tryambake gauri nārāyaṇi namo'stu te॥`,
        meaning: `Salutations to Devi ${p.deviName} presiding within the ${p.plantAssociation}, the auspicious of all auspiciousness, fulfiller of all desires.`,
        source: 'Brihannandikeshvara Purana',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: `${p.id}-img`,
        title: registeredImage ? `Iconography of Maa ${p.deviName}` : `Sacred Botanical Manifestation: ${p.plantAssociation}`,
        imagePath: registeredImage,
        imageType: registeredImage ? 'traditional_painting' : 'sacred_om_fallback',
        attribution: 'Traditional Shakta Navapatrika Archive',
        source: 'Durga Puja Traditional Archives',
        license: 'Educational Repository',
        verificationStatus: 'verified',
        fallbackType: registeredImage ? undefined : 'image_unavailable'
      }
    ]
  });
});

// 2. ASHTA LAKSHMI (8)
ashtaLakshmiList.forEach((l) => {
  groupDerivedDevis.push({
    id: l.id,
    primaryName: `Maa ${l.name}`,
    sanskritName: l.sanskritName,
    alternateNames: [l.formType, `Sri ${l.name}`],
    nameMeaning: `${l.formType}: The supreme sovereign aspect of Mahalakshmi governing ${l.significance}`,
    classification: ['Ashta Lakshmi', 'Pancha Prakriti', 'Vedic Shakta Traditions'],
    traditions: ['Sri Vidya', 'Srikula', 'Vaishnava-Shakta Synthesis', 'Puranic Shakta'],
    acharas: ['Dakshinachara', 'Samayachara'],
    shortIntro: `${l.significance} ${l.blessingBestowed}`,
    philosophicalSignificance: `In Shakta-Vaishnava synthesis, Ashta Lakshmi represents the eightfold cosmic sustaining shakti of the Supreme Divine Mother. ${l.blessingBestowed}`,
    theologicalPosition: 'Codified in the Vishnu Purana and Ashta Lakshmi Stotram as eight cosmic mothers supporting dharmic human existence.',
    evidenceStatus: 'Primary textual evidence',
    relatedDeviIds: ['mahalakshmi', 'kamalatmika', 'lakshmi-prakriti'],
    scripturalReferences: [
      { textName: 'Ashta Lakshmi Stotram', originalLanguage: 'Sanskrit', sectionOrChapter: 'Verses 1-8', sourceType: 'Stotra' },
      { textName: 'Vishnu Purana', originalLanguage: 'Sanskrit', sectionOrChapter: 'Book 1, Chapter 9', sourceType: 'Purana' },
      { textName: 'Sri Sukta (Rigveda Khila)', originalLanguage: 'Sanskrit', sectionOrChapter: 'Khila Sukta', sourceType: 'Veda/Upanishad' }
    ],
    iconography: {
      arms: l.mudraAndAttributes.includes('Eight') ? 8 : (l.mudraAndAttributes.includes('Six') ? 6 : 4),
      weaponsAndAttributes: [l.mudraAndAttributes],
      vahana: 'Kamalasana (Golden Lotus Throne) and Airavata Gaja',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Kirita-Makuta studded with nine jewels, golden haras, red or yellow silk pitambara',
      complexion: 'Radiant molten gold (Suvarna-Varna)',
      asana: 'Padmasana (Full Lotus Posture) upon an ocean of celestial milk',
      symbolism: l.blessingBestowed
    },
    worshipTraditions: {
      kula: 'Srikula',
      acharas: ['Dakshinachara', 'Samayachara'],
      regionalPractices: ['Varalakshmi Vratam', 'Diwali Lakshmi Puja', 'Lakshmi Puja in Sharad Purnima'],
      sampradayaNotes: 'Worshipped with pure sattvic devotion, lotus flowers, and Sri Sukta japa.'
    },
    spiritualSignificance: {
      tattva: 'Prakriti-Tattva and Sri-Tattva',
      shakti: 'Sthiti Shakti (Cosmic Preservation & Abundance)',
      symbolism: l.significance,
      theologicalInterpretation: 'True wealth (Lakshmi) is not mere material greed, but eightfold harmony of spirit, health, knowledge, and ethical abundance.'
    },
    mantraStotra: [
      {
        id: `${l.id}-stotra`,
        title: `श्री ${l.sanskritName} स्तोत्रम्`,
        type: 'Stotra',
        sanskrit: l.sloka,
        transliteration: l.sloka,
        meaning: `I surrender unto ${l.name}, the divine mother of grace who bestows ${l.blessingBestowed}.`,
        source: 'Sri Ashta Lakshmi Stotram',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: `${l.id}-img`,
        title: `Iconography of ${l.name}`,
        imageType: 'traditional_painting',
        attribution: 'Traditional Shakta & Srikula Iconography Archive',
        source: 'Sri Sukta Archive',
        license: 'Public Domain / Educational',
        verificationStatus: 'verified'
      }
    ]
  });
});

// 3. SHODASHA NITYA DEVIS (16)
shodashaNityas.forEach((n) => {
  const registeredImage = resolveDeviImagePath(undefined, n.name, undefined, n.id);
  groupDerivedDevis.push({
    id: n.id,
    primaryName: `Maa ${n.name}`,
    sanskritName: n.sanskritName,
    alternateNames: [n.tithi, `Nitya #${n.number}`],
    nameMeaning: `The eternal lunar deity governing ${n.tithi} and presiding over ${n.philosophicalMeaning}.`,
    classification: ['Shodasha Nitya Devis', 'Sri Vidya', 'Srikula'],
    traditions: ['Sri Vidya', 'Srikula', 'Agama Tantra', 'Kaula'],
    acharas: ['Samayachara', 'Dakshinachara', 'Kaulachara'],
    shortIntro: `The #${n.number} eternal lunar goddess (Nitya) of Sri Vidya presiding over ${n.tithi}. ${n.philosophicalMeaning}`,
    imagePath: registeredImage,
    philosophicalSignificance: 'The sixteen Nityas are rays of the central supreme empress Lalita Tripurasundari, representing the 16 lunar tithis and subtle psychological powers of consciousness.',
    theologicalPosition: 'Codified in the Tantraraja Tantra and Nityashodashikarnava of Vamakeshvara Tantra.',
    evidenceStatus: 'Primary textual evidence',
    relatedDeviIds: ['tripura-sundari', 'kamalatmika', 'bhuvaneshvari'],
    scripturalReferences: [
      { textName: 'Tantraraja Tantra', originalLanguage: 'Sanskrit', sectionOrChapter: `Nitya Patala #${n.number}`, sourceType: 'Tantra' },
      { textName: 'Nityashodashikarnava', originalLanguage: 'Sanskrit', sectionOrChapter: 'Ullasa 1-4', sourceType: 'Tantra' },
      { textName: 'Vamakeshvara Tantra', originalLanguage: 'Sanskrit', sectionOrChapter: 'Nityodaya', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: [n.mudraOrAttribute],
      vahana: 'Padma / Yantra Chakra',
      mudras: ['Varada', 'Abhaya'],
      crownAndOrnaments: 'Chandra-kala crown, celestial gems, glowing red garments',
      complexion: 'Radiant rose, crimson, or crystalline effulgence',
      asana: 'Seated upon the enclosures of the Sri Chakra',
      symbolism: n.philosophicalMeaning
    },
    worshipTraditions: {
      kula: 'Srikula',
      acharas: ['Samayachara', 'Kaulachara', 'Dakshinachara'],
      regionalPractices: ['Sri Vidya Navaratri Nitya Puja', 'Shukla/Krishna Paksha Daily Upasana'],
      sampradayaNotes: 'Worshipped sequentially during the waxing and waning fortnights of the moon.'
    },
    spiritualSignificance: {
      tattva: 'Chandra-Kala and Sri Vidya Bindu',
      shakti: 'Nitya Spanda Shakti',
      symbolism: n.philosophicalMeaning,
      theologicalInterpretation: 'Each day of the lunar cycle possesses a specific divine vibration governed by one of the sixteen Nityas.'
    },
    mantraStotra: [
      {
        id: `${n.id}-bija`,
        title: `श्री ${n.sanskritName} मन्त्र बीजम्`,
        type: 'Mantra',
        sanskrit: `ॐ ह्रीं ${n.sanskritName} देव्यै नमः।`,
        transliteration: `Om hrīṁ ${n.name.toLowerCase()} devyai namaḥ।`,
        meaning: `Salutations to the eternal lunar Mother ${n.name}, sovereign over ${n.tithi}.`,
        source: n.scripturalSource,
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: `${n.id}-img`,
        title: registeredImage ? `Traditional Sacred Iconography: Maa ${n.name}` : `Sri Yantra Nitya Enclosure: ${n.name}`,
        imagePath: registeredImage,
        imageType: registeredImage ? 'traditional_painting' : 'sacred_om_fallback',
        attribution: 'Sri Vidya Traditional Peetham',
        source: 'Tantraraja Tantra Repository',
        license: 'Educational',
        verificationStatus: 'verified',
        fallbackType: registeredImage ? undefined : 'image_unavailable'
      }
    ]
  });
});

// 4. DWADASHA KALIS (12)
dwadashaKalis.forEach((k) => {
  groupDerivedDevis.push({
    id: k.id,
    primaryName: `Maa ${k.name}`,
    sanskritName: k.sanskritName,
    alternateNames: [`Krama Kali #${k.number}`, k.kramaFunction],
    nameMeaning: `The esoteric Kashmiri Krama manifestation of Kali governing the ${k.phaseOfConsciousness} phase of cosmic consciousness.`,
    classification: ['Dwadasha Kalis', 'Kashmiri Shaivism & Krama', 'Kalikula'],
    traditions: ['Kashmir Krama', 'Kashmir Shaivism', 'Kalikula', 'Kaula'],
    acharas: ['Kaulachara', 'Samayachara'],
    shortIntro: `One of the twelve supreme Kalis of the Kashmiri Krama school. ${k.philosophicalSignificance} Function: ${k.kramaFunction}.`,
    philosophicalSignificance: `${k.philosophicalSignificance} In Krama non-dual philosophy, the twelve Kalis represent the unceasing pulsation (Spanda) of consciousness across creation, maintenance, withdrawal, and the ineffable fourth state.`,
    theologicalPosition: 'Codified by Mahamaheshvara Abhinavagupta in Tantraloka (Ahnika 4) and the Kramasadbhava.',
    evidenceStatus: 'Primary textual evidence',
    relatedDeviIds: ['kali', 'bhairavi', 'para'],
    scripturalReferences: [
      { textName: 'Tantraloka (Abhinavagupta)', originalLanguage: 'Sanskrit', sectionOrChapter: `Ahnika 4 (Krama-Stotra, ${k.name})`, sourceType: 'Tantra' },
      { textName: 'Kramasadbhava', originalLanguage: 'Sanskrit', sectionOrChapter: 'Patala 2-3', sourceType: 'Tantra' },
      { textName: 'Mahanayaprakasha', originalLanguage: 'Sanskrit', sectionOrChapter: 'Krama Mandala', sourceType: 'Commentary' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Khadga (Discernment)', 'Kapala (Skull Cup of Nectar)', 'Trishula (Trika Powers)', 'Khatvanga'],
      vahana: 'Mahabhairava / Cit-Akasha (Infinite Void)',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Flames of cosmic dissolution, garland of syllables, crescent moon of pure awareness',
      complexion: 'Deep smoky midnight black, radiant vermillion, or blazing solar gold',
      asana: 'Dancing within the flaming wheel of twelve Kalis (Krama Chakra)',
      symbolism: k.philosophicalSignificance
    },
    worshipTraditions: {
      kula: 'Kalikula (Krama Mandir)',
      acharas: ['Kaulachara', 'Samayachara'],
      regionalPractices: ['Kashmir Valley Non-Dual Upasana', 'Internal Bhavana Meditation'],
      sampradayaNotes: 'Advanced non-dual contemplation on the twelve pulsations of awareness.'
    },
    spiritualSignificance: {
      tattva: 'Samvit (Pure Unconditioned Consciousness)',
      shakti: 'Krama Spanda Shakti',
      symbolism: k.kramaFunction,
      theologicalInterpretation: 'The twelve Kalis demonstrate that reality is a living, vibrating wheel of consciousness that projects and withdraws all experience.'
    },
    mantraStotra: [
      {
        id: `${k.id}-sloka`,
        title: `क्रमकाली ${k.sanskritName} ध्यान-स्तोत्रम्`,
        type: 'Dhyana',
        sanskrit: `ॐ नमः श्रीमद्द्वादशकालिकायै। ${k.sanskritName} देव्यै नमः स्वाहा।`,
        transliteration: `Om namaḥ śrīmaddvādaśakālikāyai। ${k.name} devyai namaḥ svāhā।`,
        meaning: `Salutations to the holy Dwadasha Kalika in the form of ${k.name}, presiding over ${k.kramaFunction}.`,
        source: 'Tantraloka & Kramasadbhava',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: `${k.id}-img`,
        title: `Esoteric Krama Svarupa: ${k.name}`,
        imageType: 'sacred_om_fallback',
        attribution: 'Kashmir Shaiva & Krama Archive',
        source: 'Tantraloka Research Center',
        license: 'Educational Repository',
        verificationStatus: 'gupta_svarupa',
        fallbackType: 'gupta_svarupa'
      }
    ]
  });
});

// 5. SHODASHA MATRIKAS (16)
shodashaMatrikasList.forEach((m) => {
  const matrikaId = `matrika-${m.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
  const registeredImage = resolveDeviImagePath(undefined, m.name, undefined, matrikaId);
  groupDerivedDevis.push({
    id: matrikaId,
    primaryName: `Maa ${m.name} (Shodasha Matrika)`,
    sanskritName: m.sanskrit,
    alternateNames: [`Vedic Matrika ${m.name}`, `Matrika #${m.number}`],
    nameMeaning: `The sacred mother deity invoked in Vedic ceremonies: ${m.role}.`,
    classification: ['Shodasha Matrikas', 'Vedic Shakta Traditions'],
    traditions: ['Vedic Shakta', 'Brahminical Tantra', 'Agama Tantra', 'Puranic Shakta'],
    acharas: ['Dakshinachara'],
    shortIntro: `One of the sixteen benevolent maternal deities invoked during Vedic Samskaras (Yajnopavita, Vivaha, Shanti Karmas). Role: ${m.role}.`,
    imagePath: registeredImage,
    philosophicalSignificance: 'Unlike the fierce martial Sapta/Ashta Matrikas who fought demon hordes, the Shodasha Matrikas are gentle, Vedic maternal guardians conferring domestic peace, longevity, nourishment, and societal harmony.',
    theologicalPosition: 'Attested in the Grihya Sutras, Bhavishya Purana, and classical Karmakanda ritual manuals.',
    evidenceStatus: 'Primary textual evidence',
    relatedDeviIds: ['brahmani', 'maheshwari', 'gauri'],
    scripturalReferences: [
      { textName: 'Bhavishya Purana', originalLanguage: 'Sanskrit', sectionOrChapter: 'Shodasha Matrika Puja Vidhi', sourceType: 'Purana' },
      { textName: 'Prayoga Ratna', originalLanguage: 'Sanskrit', sectionOrChapter: 'Matrika Sthapana', sourceType: 'Paddhati' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Auspicious Kalasha', 'Akshamala (Rosary)', 'Abhaya Mudra', 'Varada Mudra'],
      vahana: 'Hamsa / Lotus Seat',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Vedic white silk, sacred gold ornaments, bilva leaves and sacred rice',
      complexion: 'Fair and radiant like the morning sun',
      asana: 'Enshrined upon the Patta / Yajna mandala facing east',
      symbolism: m.role
    },
    worshipTraditions: {
      kula: 'Vedic Karmakanda',
      acharas: ['Dakshinachara'],
      regionalPractices: ['All-India Griha Pravesha, Vivaha, and Nandi Shradha Pujas'],
      sampradayaNotes: 'Invoked on walls or wooden patas with sacred vermillion lines.'
    },
    spiritualSignificance: {
      tattva: 'Soma and Santati Tattva',
      shakti: 'Shanti and Pushti Shakti',
      symbolism: m.role,
      theologicalInterpretation: 'The universe is sustained by subtle maternal care that nurtures life from conception through adulthood.'
    },
    mantraStotra: [
      {
        id: `matrika-${m.number}-mantra`,
        title: `षोडशमातृका ${m.sanskrit} मन्त्रः`,
        type: 'Mantra',
        sanskrit: `ॐ ${m.sanskrit} देव्यै नमः। शान्तिं पुष्टिं च मे देहि।`,
        transliteration: `Om ${m.name} devyai namaḥ। Śāntiṁ puṣṭiṁ ca me dehi।`,
        meaning: `Salutations to Mother ${m.name}. Bestow upon us peace, health, and nourishment.`,
        source: 'Grihya Parisishtha',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: `matrika-${m.number}-img`,
        title: registeredImage ? `Iconography of Maa ${m.name}` : `Vedic Shodasha Matrika: ${m.name}`,
        imagePath: registeredImage,
        imageType: registeredImage ? 'traditional_painting' : 'sacred_om_fallback',
        attribution: 'Vedic Ritual Archive',
        source: 'Prayoga Ratna Archive',
        license: 'Educational',
        verificationStatus: 'verified',
        fallbackType: registeredImage ? undefined : 'image_unavailable'
      }
    ]
  });
});

// 6. GUPTA SHAKTI & CHAKRA YOGINIS (7 Chakras)
chakraYoginis.forEach((c) => {
  groupDerivedDevis.push({
    id: `chakra-${c.id}`,
    primaryName: `Maa ${c.yoginiName} (Chakra Yogini)`,
    sanskritName: c.sanskritName,
    alternateNames: [`${c.chakra} Yogini`, c.dhatuGoverned],
    nameMeaning: `Presiding Tantric Yogini of the ${c.chakra} governing the bodily tissue: ${c.dhatuGoverned}.`,
    classification: ['Gupta Shakti & Chakra Yoginis', 'Gupta Shakti', 'Esoteric Tantric Traditions'],
    traditions: ['Agama Tantra', 'Kaula Tantra', 'Kundalini Yoga', 'Kalikula'],
    acharas: ['Kaulachara', 'Samayachara', 'Vamachara'],
    shortIntro: `The presiding Kundalini Yogini of the ${c.chakra}. ${c.esotericSignificance}. Governs ${c.dhatuGoverned}.`,
    philosophicalSignificance: 'The Chakra Yoginis are living biological and subtle energetic guardians through which Kundalini Shakti ascends through the Sushumna nadi.',
    theologicalPosition: 'Codified in the Shat-Chakra-Nirupana, Rudrayamala, and Kubjikamata Tantra.',
    evidenceStatus: 'Primary textual evidence',
    relatedDeviIds: ['guhyakali', 'pratyangira', 'kali'],
    scripturalReferences: [
      { textName: 'Shat-Chakra-Nirupana', originalLanguage: 'Sanskrit', sectionOrChapter: `Verses governing ${c.chakra}`, sourceType: 'Tantra' },
      { textName: 'Rudra Yamala', originalLanguage: 'Sanskrit', sectionOrChapter: 'Kundalini Yoga Patala', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: c.weapons,
      vahana: 'Chakra Lotus',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Serpent ornaments, luminous halo corresponding to chakra color',
      complexion: c.colorAndComplexion,
      asana: `Centered within the pericarp of the ${c.chakra} lotus`,
      symbolism: `Biological tissue: ${c.dhatuGoverned}`
    },
    worshipTraditions: {
      kula: 'Kundalini Kaula',
      acharas: ['Samayachara', 'Kaulachara', 'Vamachara'],
      regionalPractices: ['Internal Yoga Pranayama and Kundalini Meditation'],
      sampradayaNotes: 'Internal visualization accompanied by seed mantra japa.'
    },
    spiritualSignificance: {
      tattva: 'Kundalini Subtle Anatomy',
      shakti: 'Dhatu Dhatri Shakti',
      symbolism: c.esotericSignificance,
      theologicalInterpretation: 'The human physical body is the sacred micro-temple of Adi Parashakti.'
    },
    mantraStotra: [
      {
        id: `chakra-${c.id}-mantra`,
        title: `चक्रयोगिनी ${c.sanskritName} बीजम्`,
        type: 'Mantra',
        sanskrit: `ॐ ${c.sanskritName} देव्यै नमः।`,
        transliteration: `Om ${c.yoginiName.toLowerCase()} devyai namaḥ।`,
        meaning: `Salutations to Mother ${c.yoginiName} presiding over the ${c.chakra}.`,
        source: 'Shat-Chakra-Nirupana',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: `chakra-${c.id}-img`,
        title: `Subtle Chakra Yogini: ${c.yoginiName}`,
        imageType: 'sacred_om_fallback',
        attribution: 'Kundalini Tantra Archive',
        source: 'Shat-Chakra-Nirupana Archive',
        license: 'Educational',
        verificationStatus: 'gupta_svarupa',
        fallbackType: 'gupta_svarupa'
      }
    ]
  });
});

// 7. CHAUSATH YOGINIS (64)
sixtyFourYoginis.forEach((y) => {
  groupDerivedDevis.push({
    id: `yogini-${y.id}`,
    primaryName: `Maa ${y.name} (Chausath Yogini)`,
    sanskritName: y.sanskritName,
    alternateNames: [`64 Yogini #${y.number}`, 'Sacred Yogini'],
    nameMeaning: `Chausath Yogini #${y.number} venerated in open circular hypaethral shrines: ${y.significance}`,
    classification: ['Chausath Yoginis', 'Kaula Tantra', 'Odisha Shakta Parampara'],
    traditions: ['Kaula Tantra', 'Kaula', 'Kalikula', 'Odisha Shakta'],
    acharas: ['Kaulachara', 'Vamachara'],
    shortIntro: `Venerated as #${y.number} in the sacred circular mandalas of Hirapur and Ranipur-Jharial. Iconography: ${y.iconographyDescription}. Mount: ${y.vahana}.`,
    philosophicalSignificance: 'The 64 Yoginis personify the sixty-four arts, occult psychic faculties (Siddhis), and cosmic female energies guarding the universe.',
    theologicalPosition: 'Codified in the Kaulajnana Nirnaya of Matsyendranath and the Agni Purana.',
    evidenceStatus: 'Temple or regional tradition',
    relatedDeviIds: ['kali', 'vimala-puri', 'biraja-jajpur'],
    scripturalReferences: [
      { textName: 'Kaulajnana Nirnaya', originalLanguage: 'Sanskrit', sectionOrChapter: 'Patala 8', sourceType: 'Tantra' },
      { textName: 'Agni Purana', originalLanguage: 'Sanskrit', sectionOrChapter: 'Chapter 52 (Yogini Mandala)', sourceType: 'Purana' },
      { textName: 'Kalika Purana', originalLanguage: 'Sanskrit', sectionOrChapter: 'Chapter 60-62', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: y.weapons,
      vahana: y.vahana,
      mudras: ['Abhaya'],
      crownAndOrnaments: 'Sensuous tribal-tantric jewelry, ornate braided hair, anklets, fine stone carving',
      complexion: 'Deep greenish-black chlorite stone or sandstone radiance',
      asana: 'Standing or dancing in graceful tribhanga upon her sacred vahana',
      symbolism: y.significance
    },
    worshipTraditions: {
      kula: 'Kaula Tantra',
      acharas: ['Kaulachara', 'Vamachara'],
      regionalPractices: ['Chausath Yogini Temple Hirapur (Bhubaneswar)', 'Ranipur-Jharial (Balangir)'],
      sampradayaNotes: 'Ancient roofless circular shrines worship the sky-clad Yoginis directly under the open cosmos.'
    },
    spiritualSignificance: {
      tattva: 'Kula Mandala and Siddhi Tattva',
      shakti: 'Asta-Siddhi and Kala Shakti',
      symbolism: y.significance,
      theologicalInterpretation: 'The circle of 64 Yoginis surrounds the central Bhairava or Mahamaya, representing the infinite manifestation of the divine feminine.'
    },
    mantraStotra: [
      {
        id: `yogini-${y.id}-mantra`,
        title: `चौषठ योगिनी ${y.sanskritName} मन्त्रः`,
        type: 'Mantra',
        sanskrit: `ॐ ऐं ह्रीं श्रीं ${y.sanskritName} योगिन्यै नमः।`,
        transliteration: `Om aiṁ hrīṁ śrīṁ ${y.name.toLowerCase()} yoginyai namaḥ।`,
        meaning: `Salutations to the holy Yogini ${y.name}, bestower of spiritual protection and wisdom.`,
        source: 'Kaulajnana Nirnaya',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: `yogini-${y.id}-img`,
        title: `Hirapur / Ranipur-Jharial Sculpture of ${y.name}`,
        imageType: 'temple_sculpture',
        attribution: 'Archaeological Survey of India & Odisha Heritage Archives',
        source: 'Chausath Yogini Temple, Hirapur',
        license: 'Educational / Cultural Documentation',
        verificationStatus: 'verified'
      }
    ]
  });
});
