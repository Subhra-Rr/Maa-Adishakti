import { Devi } from '../types';

export const supplementalDevis: Devi[] = [
  // ==========================================
  // SAPTA & ASHTA MATRIKAS (8)
  // ==========================================
  {
    id: 'brahmani',
    primaryName: 'Matrika Brahmani',
    sanskritName: 'श्री ब्राह्मणी मातृका',
    odiaName: 'ମା ବ୍ରାହ୍ମଣୀ',
    alternateNames: ['Brahmi', 'Shakti of Brahma'],
    nameMeaning: 'The divine feminine power (Shakti) of Brahma, the creator; personification of primordial sound and creative intellect.',
    classification: ['Sapta & Ashta Matrikas', 'Matrika Mandala'],
    traditions: ['Puranic Shakta', 'Tantric Matrika System'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The first of the Sapta/Ashta Matrikas who emerged from the body of Brahma during the great battle against the demons in the Devi Mahatmya. Depicted four-headed, riding a celestial swan (Hamsa), and carrying Vedic scrolls and a water ladle.',
    philosophicalSignificance: 'Represents the power of the primordial creative word (Vak) and cosmic formulation.',
    theologicalPosition: 'Leader of the Matrika mandala representing the East or northeastern quarter.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Chapter 8, Verses 14-15)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Varaha Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Kamandalu', 'Akshamala', 'Pustaka', 'Sruk / Sruva (Sacrificial ladles)'],
      vahana: 'Hamsa (Swan)',
      mudras: ['Varada', 'Abhaya'],
      crownAndOrnaments: 'Four heads adorned with ascetic matted locks, wearing yellow silks and antelope skin',
      complexion: 'Radiant golden or pale yellow',
      asana: 'Mounted upon the swan or seated on lotus',
      surroundingDeities: ['Brahma', 'Matrika collective'],
      symbolism: 'Four faces symbolize mastery of the four Vedas and the four directions.'
    },
    worshipTraditions: {
      kula: 'Matrika Mandala',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Sapta Matrika shrines of Odisha (Baitarani ghat, Jajpur)', 'Chola Matrika shrines of Tamil Nadu'],
      sampradayaNotes: 'Invoked during Yajnas and temple consecrations.'
    },
    spiritualSignificance: {
      tattva: 'Creative Consciousness',
      shakti: 'Srishti-Shakti',
      symbolism: 'Cosmic design and intellectual purity.',
      theologicalInterpretation: 'The feminine wisdom without which creation cannot be structured.'
    },
    mantraStotra: [
      {
        id: 'brahmani-stuti',
        title: 'ब्राह्मणी स्तुति (Devi Mahatmya Narayani Stuti)',
        type: 'Stotra',
        sanskrit: `हंसयुक्तविमानस्थे ब्रह्माणीरूपधारिणी।
कौशाम्भःक्षरिके देवि नारायणि नमोऽस्तु ते॥`,
        transliteration: `Haṁsayuktavimānasthe brahmāṇīrūpadhāriṇī।
Kauśāmbhaḥkṣarike devi nārāyaṇi namo’stu te॥`,
        meaning: 'Mounted upon the celestial aerial chariot drawn by swans, bearing the form of Brahmani and sprinkling sanctified water from the kusha vessel, O Devi Narayani, salutations unto you!',
        source: 'Devi Mahatmya, Chapter 11, Verse 13',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'brahmani-img-1',
        title: 'Traditional Sculpture of Matrika Brahmani',
        imageType: 'temple_sculpture',
        attribution: 'Jajpur Baitarani Matrika Complex Archive',
        source: 'Archaeological Survey of India',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['maheshwari', 'kaumari', 'vaishnavi', 'varahi', 'indrani', 'chamunda', 'narasimhi'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Odisha (Jajpur)', 'Tamil Nadu', 'Karnataka', 'Madhya Pradesh']
  },

  {
    id: 'maheshwari',
    primaryName: 'Matrika Maheshwari',
    sanskritName: 'श्री माहेश्वरी मातृका',
    odiaName: 'ମା ମାହେଶ୍ୱରୀ',
    alternateNames: ['Raudri', 'Shankari', 'Shakti of Shiva'],
    nameMeaning: 'The supreme feminine power of Shiva/Maheshvara; wielder of the trident and rider of the great bull Nandi.',
    classification: ['Sapta & Ashta Matrikas', 'Matrika Mandala'],
    traditions: ['Puranic Shakta', 'Shaiva-Shakta Matrika System'],
    acharas: ['Dakshinachara'],
    shortIntro: 'Emanated from the body of Lord Shiva in the Devi Mahatmya, riding the bull Nandi, adorned with the crescent moon and coiled serpents, wielding the trident.',
    philosophicalSignificance: 'Represents the stillness of supreme consciousness armed with the power of spiritual dissolution (Samhara).',
    theologicalPosition: 'The Shaivite matriarch of the Matrika circle.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Chapter 8)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Matsya Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Trishula', 'Damaru', 'Kapala', 'Akshamala / Abhaya'],
      vahana: 'Vrishabha (Sacred Bull Nandi)',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Jata-mukuta adorned with crescent moon and serpents, wearing ash-grey or white garments',
      complexion: 'Immaculate white like camphor or snow (Karpura-gaura)',
      asana: 'Mounted on Nandi',
      surroundingDeities: ['Lord Shiva', 'Bhairavas'],
      symbolism: 'Serpents represent mastery over the ego and Kundalini energy.'
    },
    worshipTraditions: {
      kula: 'Matrika Mandala',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Medieval rock-cut caves of Ellora and Aihole', 'Odisha Sapta Matrika temples'],
      sampradayaNotes: 'Worshipped for destruction of spiritual arrogance.'
    },
    spiritualSignificance: {
      tattva: 'Shiva-Tattva',
      shakti: 'Samhara & Jnana Shakti',
      symbolism: 'Cosmic stillness and transcendent detachment.',
      theologicalInterpretation: 'The kinetic counterpart of the silent witness.'
    },
    mantraStotra: [
      {
        id: 'maheshwari-stuti',
        title: 'माहेश्वरी स्तुति (Narayani Stuti)',
        type: 'Stotra',
        sanskrit: `त्रिशूलचन्द्राहिधरे वृषभारूढरूपिणि।
माहेश्वरीस्वरूपेण नारायणि नमोऽस्तु ते॥`,
        transliteration: `Triśūlacandrāhidhare vṛṣabhārūḍharūpiṇi।
Māheśvarīsvarūpeṇa nārāyaṇi namo’stu te॥`,
        meaning: 'Bearing the trident, the crescent moon, and serpents, mounted upon the sacred bull, O Devi Narayani in the form of Maheshwari, salutations unto you!',
        source: 'Devi Mahatmya, Chapter 11, Verse 14',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'maheshwari-img-1',
        title: 'Traditional Sculpture of Matrika Maheshwari',
        imageType: 'temple_sculpture',
        attribution: 'Ellora Cave 21 / Jajpur Matrika Archive',
        source: 'Archaeological Survey of India',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['brahmani', 'kaumari', 'vaishnavi', 'varahi', 'chamunda'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Odisha', 'Maharashtra', 'Karnataka']
  },

  {
    id: 'kaumari',
    primaryName: 'Matrika Kaumari',
    sanskritName: 'श्री कौमारी मातृका',
    odiaName: 'ମା କୌମାରୀ',
    alternateNames: ['Kartikeyi', 'Shakti of Kumara / Skanda', 'Shaktidharini'],
    nameMeaning: 'The ever-youthful warrior maiden; the divine feminine power of Lord Kumara/Skanda.',
    classification: ['Sapta & Ashta Matrikas', 'Matrika Mandala'],
    traditions: ['Puranic Shakta', 'Matrika Upasana'],
    acharas: ['Dakshinachara'],
    shortIntro: 'Emanated from the body of Lord Kartikeya, riding a magnificent peacock (Shikhi) and brandishing the invincible spear (Shakti). She personifies spiritual youthfulness, discipline, and unswerving focus.',
    philosophicalSignificance: 'Represents the preservation of vital life force (Brahmacharya) transformed into spiritual focus.',
    theologicalPosition: 'Guardian of the southern or southeastern sector of the Matrika mandala.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Chapter 8)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Agni Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Shakti (Spear/Lance)', 'Danda', 'Dhanus', 'Bana'],
      vahana: 'Mayura (Peacock)',
      mudras: ['Varada', 'Abhaya'],
      crownAndOrnaments: 'Youthful golden crown adorned with peacock feathers and red silks',
      complexion: 'Effulgent saffron-red or molten gold',
      asana: 'Mounted on the peacock',
      surroundingDeities: ['Skanda', 'Peacock attendants'],
      symbolism: 'The peacock destroys poisonous snakes, symbolizing the eradication of toxic mental vices.'
    },
    worshipTraditions: {
      kula: 'Matrika Mandala',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Tamil Nadu Murugan-Shakti temples', 'Jajpur Matrika ghat'],
      sampradayaNotes: 'Worshipped for courage, physical vitality, and triumph in righteous struggles.'
    },
    spiritualSignificance: {
      tattva: 'Tejas & Ojas',
      shakti: 'Shakti-Dhara (Spear of Discernment)',
      symbolism: 'Focused spiritual will cutting through distraction.',
      theologicalInterpretation: 'The eternal youth of divine awareness.'
    },
    mantraStotra: [
      {
        id: 'kaumari-stuti',
        title: 'कौमारी स्तुति (Narayani Stuti)',
        type: 'Stotra',
        sanskrit: `मयूरवरवाहने महाशक्तिधरेऽनघे।
कौमारीरूपसंस्थाने नारायणि नमोऽस्तु ते॥`,
        transliteration: `Mayūravaravāhane mahāśaktidhare’naghe।
Kaumārīrūpasaṁsthāne nārāyaṇi namo’stu te॥`,
        meaning: 'Mounted upon the noble peacock, wielding the mighty spear, sinless and pure, O Devi Narayani manifest as Kaumari, salutations unto you!',
        source: 'Devi Mahatmya, Chapter 11, Verse 15',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'kaumari-img-1',
        title: 'Traditional Sculpture of Matrika Kaumari',
        imageType: 'temple_sculpture',
        attribution: 'Jajpur & Aihole Archaeological Archive',
        source: 'Archaeological Survey of India',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['brahmani', 'maheshwari', 'vaishnavi', 'skandamata'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Odisha', 'Tamil Nadu']
  },

  {
    id: 'vaishnavi',
    primaryName: 'Matrika Vaishnavi',
    sanskritName: 'श्री वैष्णवी मातृका',
    odiaName: 'ମା ବୈଷ୍ଣବୀ',
    alternateNames: ['Shakti of Vishnu', 'Garudarudha'],
    nameMeaning: 'The divine sustaining power of Lord Vishnu; preserver of universal dharma and cosmic order.',
    classification: ['Sapta & Ashta Matrikas', 'Matrika Mandala'],
    traditions: ['Puranic Shakta', 'Vaishnava-Shakta Synthesis'],
    acharas: ['Dakshinachara'],
    shortIntro: 'Emanated from the body of Lord Vishnu, riding upon Garuda, holding the conch, discus, mace, and sword. She embodies the all-sustaining maternal grace that protects righteousness across the cosmos.',
    philosophicalSignificance: 'Represents the preservation of life and the cosmic balance of universal energies (Sthiti Shakti).',
    theologicalPosition: 'The central sustaining force within the Matrika enclosure.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Chapter 8)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Vishnu Dharmottara Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Shankha (Conch)', 'Chakra (Discus)', 'Gada (Mace)', 'Padma (Lotus)'],
      vahana: 'Garuda (Celestial Eagle)',
      mudras: ['Varada', 'Abhaya'],
      crownAndOrnaments: 'Kirita-mukuta crowned with jewels, wearing yellow pitambara silks and Vanamaala garland',
      complexion: 'Deep blue or dark cloud hue (Shyama-varna)',
      asana: 'Mounted upon the soaring wings of Garuda',
      surroundingDeities: ['Garuda', 'Vishnu'],
      symbolism: 'The Sudarshana discus cuts through demonic tendencies while the conch proclaims spiritual victory.'
    },
    worshipTraditions: {
      kula: 'Matrika Mandala',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Matrika temples across India', 'Odisha and Karnataka heritage shrines'],
      sampradayaNotes: 'Worshipped for family well-being, righteous livelihood, and protection against negative forces.'
    },
    spiritualSignificance: {
      tattva: 'Sthiti-Tattva / Preservation',
      shakti: 'Palana-Shakti',
      symbolism: 'Cosmic order and benevolent protection.',
      theologicalInterpretation: 'The maternal shield of the universe.'
    },
    mantraStotra: [
      {
        id: 'vaishnavi-stuti',
        title: 'वैष्णवी स्तुति (Narayani Stuti)',
        type: 'Stotra',
        sanskrit: `शङ्खचक्रगदाशार्ङ्गगृहीतपरमायुधे।
प्रसीद वैष्णवीरूपे नारायणि नमोऽस्तु ते॥`,
        transliteration: `Śaṅkhacakragadāśārṅgagṛhītaparamāyudhe।
Prasīda vaiṣṇavīrūpe nārāyaṇi namo’stu te॥`,
        meaning: 'Holding the supreme weapons of conch, discus, mace, and the Sarnga bow, be gracious unto us, O Devi Narayani in the form of Vaishnavi! Salutations unto you!',
        source: 'Devi Mahatmya, Chapter 11, Verse 16',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'vaishnavi-img-1',
        title: 'Traditional Sculpture of Matrika Vaishnavi',
        imageType: 'temple_sculpture',
        attribution: 'Jajpur & Khajuraho Matrika Archive',
        source: 'Archaeological Survey of India',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['brahmani', 'maheshwari', 'varahi', 'mahalakshmi'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Odisha', 'Madhya Pradesh']
  },

  {
    id: 'varahi',
    primaryName: 'Matrika Varahi',
    sanskritName: 'श्री वाराही मातृका',
    odiaName: 'ମା ବାରାହୀ',
    alternateNames: ['Dandanatha', 'Panchami', 'Boar-Faced Mother', 'Kaula Varahi', 'Barahi of Chaurasi'],
    nameMeaning: 'The feminine power of Varaha (the cosmic boar incarnation who rescued Mother Earth from the cosmic depths).',
    classification: ['Sapta & Ashta Matrikas', 'Srikula', 'Sri Vidya'],
    traditions: ['Sri Vidya', 'Kaula Tantra', 'Odisha Shakta Heritage'],
    acharas: ['Kaulachara', 'Dakshinachara', 'Vamachara'],
    shortIntro: 'Boar-faced fierce goddess holding the plow (Hala), pestle (Musala), skull-cup, and sword. In Sri Vidya, she is revered as Dandanatha, the commander-in-chief of Lalita Tripura Sundari’s cosmic armies, riding a chariot drawn by wild boars.',
    philosophicalSignificance: 'Represents the power to uproot subconscious mental conditioning (Samskaras) buried deep in the mud of the animalistic mind.',
    theologicalPosition: 'One of the most celebrated Matrikas, having independent temples such as the renowned 9th-century Chaurasi Varahi temple in the Prachi Valley of Odisha.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Chapter 8)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Varahi Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Lalita Sahasranama', originalLanguage: 'Sanskrit', sourceType: 'Stotra' }
    ],
    iconography: {
      arms: 4, // Up to 8 or 12 arms in esoteric texts
      weaponsAndAttributes: ['Hala (Plow)', 'Musala (Pestle)', 'Khadga', 'Kapala / Fish (Matsya)'],
      vahana: 'Mahisha (Buffalo), Sukara (Boar), or Garuda',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Karanda-mukuta, dark garments, adorned with skull ornaments and wild garlands',
      complexion: 'Deep smoky black or molten gold',
      asana: 'Seated in Lalitasana or mounted on a charging boar',
      surroundingDeities: ['Lalita Tripura Sundari', 'Boar retinue'],
      symbolism: 'The plow breaks the hard soil of the ego, and the pestle crushes stubborn dualistic attachments.'
    },
    worshipTraditions: {
      kula: 'Srikula and Kaula lineages',
      acharas: ['Kaulachara', 'Dakshinachara'],
      regionalPractices: ['Chaurasi Varahi temple in Odisha (Prachi Valley)', 'Varanasi Varahi nocturnal shrine at Mir Ghat', 'Thanjavur Brihadisvara Varahi shrine'],
      sampradayaNotes: 'Worshipped during the auspicious twilight hours or Brahmamuhurta for protection against adversaries and spiritual stagnation.'
    },
    spiritualSignificance: {
      tattva: 'Prithvi-Uddharana (Rescuing consciousness from lower density)',
      shakti: 'Dandanatha Shakti',
      symbolism: 'Fierce spiritual focus that digs beneath superficial reality to recover the soul.',
      theologicalInterpretation: 'The generalissimo of consciousness destroying spiritual lethargy.'
    },
    mantraStotra: [
      {
        id: 'varahi-stuti',
        title: 'वाराही स्तुति (Narayani Stuti)',
        type: 'Stotra',
        sanskrit: `गृहीतमहाचक्रे दंष्ट्रोद्धृतवसुन्धरे।
वराहरूपिणि शिवे नारायणि नमोऽस्तु ते॥`,
        transliteration: `Gṛhītamahācakre daṁṣṭroddhṛtavasundhare।
Varāharūpiṇi śive nārāyaṇi namo’stu te॥`,
        meaning: 'Holding the great discus, lifting the earth upon your tusk, O auspicious Goddess in the form of Varahi, salutations unto you!',
        source: 'Devi Mahatmya, Chapter 11, Verse 17',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'varahi-img-1',
        title: 'Verified Traditional Shrine Representation of Maa Varahi (Chaurasi, Odisha)',
        imageType: 'temple_sculpture',
        attribution: 'Archaeological Survey of India & Chaurasi Temple Trust Archive',
        source: 'Prachi Valley Archaeological Survey',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['tripura-sundari', 'vaishnavi', 'chamunda', 'indrani'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Odisha (Chaurasi / Prachi Valley)', 'Tamil Nadu (Thanjavur)', 'Varanasi']
  },

  {
    id: 'indrani',
    primaryName: 'Matrika Indrani / Aindri',
    sanskritName: 'श्री इन्द्राणी / ऐन्द्री मातृका',
    odiaName: 'ମା ଇନ୍ଦ୍ରାଣୀ',
    alternateNames: ['Aindri', 'Shachi', 'Mahendri', 'Shakti of Indra'],
    nameMeaning: 'The sovereign feminine power of Indra, king of the celestials; wielder of the thunderbolt (Vajra) and rider of Airavata.',
    classification: ['Sapta & Ashta Matrikas', 'Matrika Mandala'],
    traditions: ['Puranic Shakta', 'Vedic-Agamic'],
    acharas: ['Dakshinachara'],
    shortIntro: 'Emanated from the body of Lord Indra, crowned with a thousand eyes, riding the multi-tusked white celestial elephant Airavata, wielding the diamond thunderbolt (Vajra).',
    philosophicalSignificance: 'Represents sovereignty, willpower, and sensory mastery (Indriya-Jaya).',
    theologicalPosition: 'The royal sovereign mother of the celestial realm within the Matrika mandala.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Chapter 8)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Varaha Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Vajra (Thunderbolt)', 'Ankusha (Goad)', 'Pasha', 'Varada Mudra'],
      vahana: 'Airavata (Four-tusked White Elephant)',
      mudras: ['Varada', 'Abhaya'],
      crownAndOrnaments: 'Thousand eyes on her crown and body, wearing celestial gems and royal jewels',
      complexion: 'Radiant golden or pale saffron',
      asana: 'Mounted upon Airavata',
      surroundingDeities: ['Indra', 'Celestial devas'],
      symbolism: 'The thunderbolt symbolizes the sudden, irreversible flash of spiritual illumination.'
    },
    worshipTraditions: {
      kula: 'Matrika Mandala',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Matrika temples of Odisha and South India'],
      sampradayaNotes: 'Worshipped for political leadership, victory over sensory cravings, and material prosperity.'
    },
    spiritualSignificance: {
      tattva: 'Indriya-Adhishthana (Mastery over senses)',
      shakti: 'Vajra-Shakti (Adamantine Will)',
      symbolism: 'Spiritual diamond awareness that cannot be broken by worldly temptation.',
      theologicalInterpretation: 'The sovereignty of the Spirit over mortal desires.'
    },
    mantraStotra: [
      {
        id: 'indrani-stuti',
        title: 'इन्द्राणी स्तुति (Narayani Stuti)',
        type: 'Stotra',
        sanskrit: `किरीटिनि महावज्रे सहस्रनयनोज्ज्वले।
वृत्रप्राणहरे चैन्द्रि नारायणि नमोऽस्तु ते॥`,
        transliteration: `Kirīṭini mahāvajre sahasranayanojjvale।
Vṛtraprāṇahare caindri nārāyaṇi namo’stu te॥`,
        meaning: 'Crowned with royal splendor, wielding the mighty thunderbolt, blazing with a thousand eyes, destroyer of the demon Vritra, O Aindri, Narayani, salutations unto you!',
        source: 'Devi Mahatmya, Chapter 11, Verse 18',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'indrani-img-1',
        title: 'Traditional Sculpture of Matrika Indrani',
        imageType: 'temple_sculpture',
        attribution: 'Jajpur & Aihole Archaeological Archive',
        source: 'Archaeological Survey of India',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['brahmani', 'maheshwari', 'chamunda', 'varahi'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Odisha', 'Karnataka']
  },

  {
    id: 'chamunda',
    primaryName: 'Matrika Chamunda',
    sanskritName: 'श्री चामुण्डा मातृका',
    odiaName: 'ମା ଚାମୁଣ୍ଡା',
    alternateNames: ['Chandi', 'Kali-Chamunda', 'Slayer of Chanda and Munda', 'Smashana Nivasini'],
    nameMeaning: 'Slayer of the twin demons Chanda (violent passion) and Munda (cunning intellectual arrogance).',
    classification: ['Sapta & Ashta Matrikas', 'Matrika Mandala', 'Kalikula'],
    traditions: ['Kalikula', 'Vamachara', 'Puranic Shakta', 'Kaulachara'],
    acharas: ['Vamachara', 'Kaulachara', 'Dakshinachara'],
    shortIntro: 'Emanated from the furrowed forehead of Devi Ambika during the great battle in the Devi Mahatmya. Depicted emaciated with sunken belly, ribs protruding, adorned with a garland of human heads and scorpions, dancing upon a corpse in the cremation grounds.',
    philosophicalSignificance: 'Chamunda represents the absolute destruction of psychological duplicity and animal passions. By slaying Chanda (brute aggression) and Munda (cunning mental rationalization), she liberates the soul into unconditioned truth.',
    theologicalPosition: 'The seventh Matrika and chief commander in fierce Tantric rituals; prominent in temples across Odisha, Bengal, and Himachal Pradesh.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Chapter 7, Verses 23-27)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Agni Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Kalika Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4, // Also 8 or 10 arms in temple sculptures
      weaponsAndAttributes: ['Khadga', 'Khatvanga (Skull staff)', 'Pasha', 'Kapala filled with blood'],
      vahana: 'Shava (Corpse) or Shrigala (Jackal)',
      mudras: ['Terrifying dance mudra'],
      crownAndOrnaments: 'Garland of severed heads, sunken belly with scorpion, necklace of bones, tiger skin loincloth',
      complexion: 'Deep ash-grey or blood-stained black',
      asana: 'Dancing on a corpse or seated upon a funeral pyre',
      surroundingDeities: ['Bhairavas', 'Jackals', 'Dakinies'],
      symbolism: 'Her sunken belly with a scorpion signifies that she swallows all worldly poison without being contaminated.'
    },
    worshipTraditions: {
      kula: 'Kalikula and Matrika System',
      acharas: ['Vamachara', 'Kaulachara', 'Dakshinachara'],
      regionalPractices: ['Chamundeshwari temple at Mysuru, Karnataka', 'Charchika temple at Banki, Odisha', 'Jajpur Chamunda shrines'],
      sampradayaNotes: 'Worshipped for destroying chronic illnesses, negative spirits, and deep-seated fears.'
    },
    spiritualSignificance: {
      tattva: 'Samhara-Tattva / Absolute Destruction of Ego',
      shakti: 'Krodha-Samharini Shakti',
      symbolism: 'The terrifying truth that strips away mortal vanities.',
      theologicalInterpretation: 'The divine surgeon excising the malignant tumors of passion and pride.'
    },
    mantraStotra: [
      {
        id: 'chamunda-stuti',
        title: 'चामुण्डा स्तुति (Narayani Stuti)',
        type: 'Stotra',
        sanskrit: `दंष्ट्राकरालवदने शिरोमालाविभूषणे।
चामुण्डे मुण्डमथने नारायणि नमोऽस्तु ते॥`,
        transliteration: `Daṁṣṭrākarālavadane śiromālāvibhūṣaṇe।
Cāmuṇḍe muṇḍamathane nārāyaṇi namo’stu te॥`,
        meaning: 'O you with terrifying fangs and terrifying mouth, adorned with a garland of human skulls, O Chamunda, crusher of the demon Munda, O Narayani, salutations unto you!',
        source: 'Devi Mahatmya, Chapter 11, Verse 21',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'chamunda-img-1',
        title: 'Traditional Sculpture of Matrika Chamunda',
        imageType: 'temple_sculpture',
        attribution: 'Jajpur Matrika Complex & Mysuru Archive',
        source: 'Archaeological Survey of India',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['kali', 'charchika', 'pratyangira', 'narasimhi'],
    relatedPeethaIds: ['maha-chamundeshwari-mysore'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Karnataka', 'Odisha', 'Himachal Pradesh']
  },

  {
    id: 'narasimhi',
    primaryName: 'Matrika Narasimhi',
    sanskritName: 'श्री नारसिंही मातृका',
    odiaName: 'ମା ନାରସିଂହୀ',
    alternateNames: ['Narasimhika', 'Pratyangira (in secondary folklore)', 'Lioness Matrika'],
    nameMeaning: 'The feminine shakti of Lord Narasimha; the lion-faced mother emerged from the mane of the Man-Lion avatara.',
    classification: ['Sapta & Ashta Matrikas', 'Ashta Matrikas'],
    traditions: ['Puranic Shakta', 'Ashta Matrika System'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The eighth Matrika who completes the Ashta Matrika mandala. Manifested from the body of Lord Narasimha, she possesses a fierce lioness head with waving mane and clawed hands, shattering star clusters with her roar during the battle against the cosmic demons.',
    philosophicalSignificance: 'Represents the destruction of fear at the twilight borders between opposites (day/night, inside/outside, human/animal).',
    theologicalPosition: 'Distinct from Maa Pratyangira: In authentic scriptural classifications, Narasimhi is the Matrika emerged from Vishnu’s avataric form, whereas Pratyangira is an independent Atharvana cosmic goddess.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Chapter 8, Verse 19)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Matsya Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Chakra', 'Shankha', 'Gada', 'Sharp Adamantine Claws (Nakhara)'],
      vahana: 'Simha (Lion)',
      mudras: ['Tearing weapons', 'Abhaya'],
      crownAndOrnaments: 'Lion head with wavy mane, golden crown, surrounded by flying stars',
      complexion: 'Effulgent molten gold',
      asana: 'Mounted on lion or standing in warrior posture',
      surroundingDeities: ['Narasimha', 'Ashta Matrikas'],
      symbolism: 'Her claws tear through the thick armor of spiritual hypocrisy.'
    },
    worshipTraditions: {
      kula: 'Ashta Matrika Tradition',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Nepal Ashta Matrika dance shrines', 'South Indian and Odisha Matrika enclosures'],
      sampradayaNotes: 'Worshipped to overcome sudden terror, astral attacks, and untreatable ailments.'
    },
    spiritualSignificance: {
      tattva: 'Bhayaharana (Annihilation of Fear)',
      shakti: 'Nakhara-Shakti (Adamantine Claws)',
      symbolism: 'Immediate divine intervention when all mortal remedies fail.',
      theologicalInterpretation: 'The ferocious love of the mother defending her devotee Prahlada.'
    },
    mantraStotra: [
      {
        id: 'narasimhi-stuti',
        title: 'नारसिंही स्तुति (Narayani Stuti)',
        type: 'Stotra',
        sanskrit: `नृसिंहरूपेणोग्रेण हन्तुं दैत्यान् कृतोद्यमे।
त्रैलोक्यत्राणसहिते नारायणि नमोऽस्तु ते॥`,
        transliteration: `Nṛsiṁharūpeṇogreṇa hantuṁ daityān kṛtodyame।
Trailokyatrāṇasahite nārāyaṇi namo’stu te॥`,
        meaning: 'Assuming the fierce form of Narasimhi, intent on destroying the demonic hordes, savior of the three worlds, O Devi Narayani, salutations unto you!',
        source: 'Devi Mahatmya, Chapter 11, Verse 19',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'narasimhi-img-1',
        title: 'Traditional Sculpture of Matrika Narasimhi',
        imageType: 'temple_sculpture',
        attribution: 'Jajpur & Aihole Archaeological Archive',
        source: 'Archaeological Survey of India',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['pratyangira', 'vaishnavi', 'chamunda'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Odisha', 'Nepal', 'Tamil Nadu']
  },

  // ==========================================
  // PANCHA PRAKRITI (5) — Devi Bhagavata Purana
  // ==========================================
  {
    id: 'durga-prakriti',
    primaryName: 'Durga (Mulaprakriti)',
    sanskritName: 'श्री दुर्गा (मूलप्रकृतिः)',
    odiaName: 'ମା ଦୁର୍ଗା',
    alternateNames: ['Mulaprakriti Durga', 'Ishvari', 'Brahmarupini'],
    nameMeaning: 'The invincible fort (Durgama); she who destroys insurmountable sorrows and leads the soul to safety.',
    classification: ['Pancha Prakriti', 'Navakshari and Chandi Shaktis'],
    traditions: ['Puranic Shakta', 'Devi Bhagavata Purana'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The first of the five primary cosmic Prakriti manifestations described in the ninth book of the Devi Bhagavata Purana. She is the mother of the universe who protects creation from cosmic annihilation.',
    philosophicalSignificance: 'Represents the cosmic power of protection (Raksha-Shakti) without which existence collapses under entropy.',
    theologicalPosition: 'The personification of parabrahman’s own kinetic potency.',
    scripturalReferences: [
      { textName: 'Devi Bhagavata Purana (Book 9, Chapter 1)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Brahma Vaivarta Purana (Prakriti Khanda)', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 8,
      weaponsAndAttributes: ['Chakra', 'Shankha', 'Trishula', 'Khadga', 'Dhanus', 'Bana', 'Abhaya', 'Varada'],
      vahana: 'Simha (Lion)',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Golden crown, glowing with celestial light',
      complexion: 'Radiant golden effulgence',
      asana: 'Mounted on lion',
      surroundingDeities: ['Brahma', 'Vishnu', 'Shiva in reverence'],
      symbolism: 'Sovereign protection watching over the manifest universe.'
    },
    worshipTraditions: {
      kula: 'Puranic Shakta',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Durga Puja across India'],
      sampradayaNotes: 'Worshipped as the mother of all creation.'
    },
    spiritualSignificance: {
      tattva: 'Mulaprakriti',
      shakti: 'Raksha-Shakti',
      symbolism: 'Universal motherly defense.',
      theologicalInterpretation: 'The unconditioned cosmic foundation of dharma.'
    },
    mantraStotra: [
      {
        id: 'durga-prakriti-dhyana',
        title: 'दुर्गा प्रकृति ध्यानम् (Devi Bhagavata Purana)',
        type: 'Dhyana',
        sanskrit: `यया ततं जगत्सर्वं सदेवासुरमानवम्।
तां दुर्गे दुर्गतिहरां प्रणमामि मुहुर्मुहुः॥`,
        transliteration: `Yayā tataṁ jagatsarvaṁ sadevāsuramānavam।
Tāṁ durge durgatiharāṁ praṇamāmi muhurmuhuḥ॥`,
        meaning: 'By whom this entire universe of devas, demons, and mortals is pervaded and sustained, to that Durga, the redeemer from all calamity, I bow again and again.',
        source: 'Devi Bhagavata Purana, Book 9',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'durga-prakriti-img-1',
        title: 'Traditional Iconography of Mulaprakriti Durga',
        imageType: 'verified_iconography',
        attribution: 'Traditional Shakta Archive',
        source: 'Puranic Shakta Iconography Repositories',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['radha', 'lakshmi-prakriti', 'saraswati-prakriti', 'savitri-prakriti'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian']
  },

  {
    id: 'radha',
    primaryName: 'Radha (Hladini Shakti)',
    sanskritName: 'श्री राधा (ह्लादिनी शक्तिः)',
    odiaName: 'ମା ରାଧା',
    alternateNames: ['Radharani', 'Vrindavaneshwari', 'Hladini Shakti', 'Rasatmika'],
    nameMeaning: 'Derived from "Radh" meaning supreme worship; the soul’s ultimate blissful surrender to the Divine.',
    classification: ['Pancha Prakriti', 'Vaishnava-Shakta Synthesis'],
    traditions: ['Devi Bhagavata Purana', 'Gaudiya Vaishnava', 'Nimbarka'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The second of the Pancha Prakriti in the Devi Bhagavata Purana. Revered as the Hladini Shakti (bliss-giving potency) of the Absolute, she embodies pure transcendent love (Prema) and ecstatic spiritual devotion.',
    philosophicalSignificance: 'Represents the soul’s supreme longing and union with the Divine, transcending mechanical ritualism through spontaneous love.',
    theologicalPosition: 'Queen of the highest celestial realm (Goloka), non-different in essence from Krishna.',
    scripturalReferences: [
      { textName: 'Devi Bhagavata Purana (Book 9, Chapter 50)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Brahma Vaivarta Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Radha Tapani Upanishad', originalLanguage: 'Sanskrit', sourceType: 'Veda/Upanishad' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Padma (Pink Lotus in hand)', 'Abhaya Mudra of love'],
      vahana: 'Hamsa / Mayura',
      mudras: ['Holding lotus'],
      crownAndOrnaments: 'Jeweled crown with jasmine blossoms, blue or golden silk garments, pearl garlands',
      complexion: 'Effulgent molten gold (Tapta-Kanchana-Gauri)',
      asana: 'Standing gracefully beside Lord Krishna or seated on jewel throne',
      surroundingDeities: ['Ashta Sakhis (Lalita, Vishakha, etc.)'],
      symbolism: 'The lotus in her hand symbolizes the pure heart offered in unconditional devotion.'
    },
    worshipTraditions: {
      kula: 'Vaishnava-Shakta Synthesis',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Radhashtami celebrations in Braj (Barsana, Vrindavan)', 'Odisha Radha-Krishna shrines'],
      sampradayaNotes: 'Worshipped through Sankirtana, Bhakti, and chanting of divine names.'
    },
    spiritualSignificance: {
      tattva: 'Ananda-Tattva / Hladini Shakti',
      shakti: 'Prema-Shakti (Transcendent Divine Love)',
      symbolism: 'The absolute bliss of divine self-realization.',
      theologicalInterpretation: 'The supreme pleasure potency of Godhead.'
    },
    mantraStotra: [
      {
        id: 'radha-pranama',
        title: 'राधा प्रणाम मन्त्र (Radha Pranama Mantra)',
        type: 'Mantra',
        sanskrit: `तप्तकाञ्चनगौराङ्गि राधे वृन्दावनेश्वरि।
वृषभानुसुते देवि प्रणमामि हरिप्रिये॥`,
        transliteration: `Taptakāñcanagaurāṅgi rādhe vṛndāvaneśvari।
Vṛṣabhānusute devi praṇamāmi haripriye॥`,
        meaning: 'O you whose complexion is like molten gold, O Queen of Vrindavan, O daughter of King Vrishabhanu, beloved of Sri Hari, I bow unto you with deep devotion!',
        source: 'Traditional Vaishnava-Puranic Stuti',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'radha-img-1',
        title: 'Traditional Iconography of Sri Radha',
        imageType: 'verified_iconography',
        attribution: 'Braj & Gaudiya Heritage Archive',
        source: 'Barsana & Vrindavan Temple Repositories',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['durga-prakriti', 'lakshmi-prakriti', 'saraswati-prakriti'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Braj (Barsana / Vrindavan)', 'Odisha', 'Bengal', 'Pan-Indian']
  },

  {
    id: 'lakshmi-prakriti',
    primaryName: 'Lakshmi (Prakriti)',
    sanskritName: 'श्री लक्ष्मी (प्रकृतिः)',
    odiaName: 'ମା ଲକ୍ଷ୍ମୀ',
    alternateNames: ['Prakriti Lakshmi', 'Shri', 'Vishnupatni'],
    nameMeaning: 'The sovereign divine power of cosmic prosperity, nourishment, and grace in the Pancha Prakriti system.',
    classification: ['Pancha Prakriti'],
    traditions: ['Devi Bhagavata Purana', 'Puranic Shakta'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The third of the Pancha Prakriti described in the Devi Bhagavata Purana. Embodying Sattva Guna, she is the eternal consort of Lord Vishnu, presiding over all ethical wealth, royalty, good fortune, and family auspiciousness.',
    philosophicalSignificance: 'Represents the preservation of life through abundance, gratitude, and moral rectitude.',
    theologicalPosition: 'Queen of Vaikuntha, attending to Lord Vishnu and nourishing the cosmos.',
    scripturalReferences: [
      { textName: 'Devi Bhagavata Purana (Book 9, Chapter 39)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Brahma Vaivarta Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Two lotuses', 'Varada Mudra (showering gold coins)', 'Abhaya Mudra'],
      vahana: 'Gaja (Elephants) or Garuda',
      mudras: ['Varada', 'Abhaya'],
      crownAndOrnaments: 'Golden crown, dressed in red and golden silks, pearl ornaments',
      complexion: 'Effulgent molten gold (Kanaka-varna)',
      asana: 'Seated upon a blooming lotus',
      surroundingDeities: ['Vishnu', 'Gaja attendants'],
      symbolism: 'Gold coins showering from her hand signify that true wealth is a divine blessing to be used for Dharma.'
    },
    worshipTraditions: {
      kula: 'Puranic Shakta and Vaishnava',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Deepavali Lakshmi Puja', 'Odisha Manabasa Gurubara'],
      sampradayaNotes: 'Worshipped with clean homes, lamps, and pure offerings.'
    },
    spiritualSignificance: {
      tattva: 'Poshana-Tattva (Nourishment)',
      shakti: 'Shri-Shakti',
      symbolism: 'Moral and material flourishing.',
      theologicalInterpretation: 'The grace that allows human society to thrive peacefully.'
    },
    mantraStotra: [
      {
        id: 'lakshmi-prakriti-sloka',
        title: 'लक्ष्मी स्तुति (Devi Bhagavata Purana)',
        type: 'Stotra',
        sanskrit: `नमः कमलवासिन्यै नारायण्यै नमो नमः।
पद्मपत्रेक्षणे देवि पद्माक्षी ते नमो नमः॥`,
        transliteration: `Namaḥ kamalavāsinyai nārāyaṇyai namo namaḥ।
Padmapatrekṣaṇe devi padmākṣī te namo namaḥ॥`,
        meaning: 'Salutations unto her who dwells in the lotus, salutations to Narayani! O Goddess with lotus-petal eyes, salutations again and again unto you!',
        source: 'Devi Bhagavata Purana, Book 9',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'lakshmi-prakriti-img-1',
        title: 'Traditional Iconography of Prakriti Lakshmi',
        imageType: 'verified_iconography',
        attribution: 'Traditional Shakta Archive',
        source: 'Puranic Heritage Collections',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['kamalatmika', 'mahalakshmi', 'ashta-lakshmi'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian']
  },

  {
    id: 'saraswati-prakriti',
    primaryName: 'Saraswati (Prakriti)',
    sanskritName: 'श्री सरस्वती (प्रकृतिः)',
    odiaName: 'ମା ସରସ୍ୱତୀ',
    alternateNames: ['Prakriti Saraswati', 'Vak', 'Bharati'],
    nameMeaning: 'The goddess of wisdom, learning, music, and the arts in the Pancha Prakriti framework.',
    classification: ['Pancha Prakriti'],
    traditions: ['Devi Bhagavata Purana', 'Puranic Shakta'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The fourth of the Pancha Prakriti in the Devi Bhagavata Purana. Holding the sacred Veena and manuscript, she embodies the illumination of intellect, speech, memory, and spiritual revelation.',
    philosophicalSignificance: 'Represents the articulation of truth through language, arts, and cognitive comprehension.',
    theologicalPosition: 'The consort of Brahma and illuminator of cosmic intellect.',
    scripturalReferences: [
      { textName: 'Devi Bhagavata Purana (Book 9, Chapter 4)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Brahma Vaivarta Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Veena', 'Pustaka', 'Akshamala', 'Kamandalu'],
      vahana: 'Hamsa (Swan)',
      mudras: ['Playing Veena'],
      crownAndOrnaments: 'Pure white garments, pearl necklaces, crescent moon',
      complexion: 'Radiant snow white (Shvetavarna)',
      asana: 'Seated upon a white lotus',
      surroundingDeities: ['Brahma', 'Scholars and poets'],
      symbolism: 'White garments symbolize unpolluted knowledge free from worldly bias.'
    },
    worshipTraditions: {
      kula: 'Puranic Shakta',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Vasant Panchami across India'],
      sampradayaNotes: 'Worshipped with books, inkpots, and musical instruments.'
    },
    spiritualSignificance: {
      tattva: 'Jnana-Tattva',
      shakti: 'Vak-Shakti',
      symbolism: 'Inner clarity that dispels ignorance.',
      theologicalInterpretation: 'The voice of conscience and divine truth.'
    },
    mantraStotra: [
      {
        id: 'saraswati-prakriti-sloka',
        title: 'सरस्वती ध्यानम् (Devi Bhagavata Purana)',
        type: 'Dhyana',
        sanskrit: `शुक्लवर्णामतीव सुन्दरीं मन्दहासिताम्।
कोटिचन्द्रप्रभायुक्तां वीणापुस्तकधारिणीम्॥`,
        transliteration: `Śuklavarṇāmatīva sundarīṁ mandahāsitām।
Koṭicandraprabhāyuktāṁ vīṇāpustakadhāriṇīm॥`,
        meaning: 'Of pure white complexion, extraordinarily beautiful, smiling gently, endowed with the radiance of ten million moons, holding the Veena and the sacred scripture in her hands.',
        source: 'Devi Bhagavata Purana, Book 9',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'saraswati-prakriti-img-1',
        title: 'Traditional Iconography of Prakriti Saraswati',
        imageType: 'verified_iconography',
        attribution: 'Traditional Shakta Archive',
        source: 'Puranic Heritage Collections',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['mahasaraswati', 'matangi', 'savitri-prakriti'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian']
  },

  {
    id: 'savitri-prakriti',
    primaryName: 'Savitri / Gayatri (Prakriti)',
    sanskritName: 'श्री सावित्री / गायत्री',
    odiaName: 'ମା ସାବିତ୍ରୀ',
    alternateNames: ['Gayatri', 'Vedamata', 'Brahmani', 'Solar Mother'],
    nameMeaning: 'Savitri (Born of the Sun-God Savitr); Gayatri (She who protects those who chant her sacred hymn: Gayantam Trayate).',
    classification: ['Pancha Prakriti', 'Vedic Shakta Traditions'],
    traditions: ['Vedic Shakta', 'Devi Bhagavata Purana', 'Dakshinachara'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The fifth of the Pancha Prakriti in the Devi Bhagavata Purana. Revered as Vedamata (Mother of the four Vedas) and personification of the sacred Gayatri Mantra, she illuminates the human intellect to realize the Supreme Truth.',
    philosophicalSignificance: 'Represents the solar illumination of consciousness (Dhiyo Yo Nah Prachodayat) leading the soul out of darkness into divine light.',
    theologicalPosition: 'Depicted with five radiant faces representing the five sheaths (Pancha Koshas) and ten arms holding divine emblems.',
    scripturalReferences: [
      { textName: 'Devi Bhagavata Purana (Book 9 & Book 12)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Rig Veda (Gayatri Mantra, 3.62.10)', originalLanguage: 'Sanskrit', sourceType: 'Veda/Upanishad' },
      { textName: 'Gayatri Rahasya Upanishad', originalLanguage: 'Sanskrit', sourceType: 'Veda/Upanishad' }
    ],
    iconography: {
      arms: 10,
      weaponsAndAttributes: ['Shankha', 'Chakra', 'Kamala', 'Varada', 'Abhaya', 'Kusha', 'Kamandalu', 'Akshamala', 'Gada', 'Ankusha'],
      vahana: 'Hamsa (Swan)',
      mudras: ['Varada', 'Abhaya'],
      crownAndOrnaments: 'Five faces (pearl, coral, gold, blue, white), adorned with crescent moon and jeweled crowns',
      complexion: 'Effulgent multicolored rainbow brilliance',
      asana: 'Seated upon a red lotus',
      surroundingDeities: ['Four Vedas', 'Sages performing Sandhyavandanam'],
      symbolism: 'Five faces symbolize the five elements, five pranas, and five organs of knowledge.'
    },
    worshipTraditions: {
      kula: 'Vedic-Shakta Tradition',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Gayatri Sandhyavandanam daily across India', 'Savitri Vrata in Odisha'],
      sampradayaNotes: 'Chanting of Gayatri mantra during morning, noon, and evening twilights.'
    },
    spiritualSignificance: {
      tattva: 'Savita-Prakasha (Solar Spiritual Light)',
      shakti: 'Dhi-Shakti (Intellectual Illumination)',
      symbolism: 'The transformation of human intellect into divine wisdom.',
      theologicalInterpretation: 'The mother of all Vedic mantras.'
    },
    mantraStotra: [
      {
        id: 'gayatri-mantra',
        title: 'ऋग्वैदिक गायत्री महामन्त्र (Rig Veda 3.62.10)',
        type: 'Mantra',
        sanskrit: `ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं
भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥`,
        transliteration: `Om bhūrbhuvaḥ svaḥ tatsaviturvareṇyaṁ
Bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt॥`,
        meaning: 'Om, the physical, subtle, and causal realms! We meditate upon the supreme, adorable effulgence of the divine Sun of consciousness; may that Light illuminate and direct our spiritual intellect.',
        source: 'Rig Veda 3.62.10',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'savitri-img-1',
        title: 'Verified Traditional Iconography of Panchamukhi Gayatri / Savitri',
        imageType: 'verified_iconography',
        attribution: 'Vedic Shakta Heritage Archive',
        source: 'Traditional Vedic Repositories',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['saraswati-prakriti', 'durga-prakriti'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Odisha']
  },

  // ==========================================
  // TRIKA SHAKTIS (3) — Non-Dual Kashmir Shaivism
  // ==========================================
  {
    id: 'para',
    primaryName: 'Para Devi',
    sanskritName: 'श्री परा शक्तिः',
    odiaName: 'ମା ପରା',
    alternateNames: ['Supreme Shakti', 'Anuttara Shakti', 'Paratita'],
    nameMeaning: 'The Supreme, Transcendent, and Unconditioned Shakti beyond all cosmic dualities.',
    classification: ['Trika Shakti Philosophy', 'Kashmiri Shaivism and Krama'],
    traditions: ['Trika', 'Non-Dual Kashmir Shaivism', 'Pratyabhijna'],
    acharas: ['Samayachara', 'Kaulachara non-dual contemplation'],
    shortIntro: 'The highest of the three Trika Shaktis in non-dual Kashmir Shaivism. Embodying pure non-duality (Abheda), she is the transcendent awareness of Paramashiva wherein subject and object are indivisibly one.',
    philosophicalSignificance: 'Para represents unconditioned consciousness before any distinction between observer and observed emerges.',
    theologicalPosition: 'The supreme white goddess seated at the central trident prong in Trika contemplation.',
    scripturalReferences: [
      { textName: 'Tantraloka (Abhinavagupta)', originalLanguage: 'Sanskrit', sourceType: 'Commentary' },
      { textName: 'Paratrishika Vivarana', originalLanguage: 'Sanskrit', sourceType: 'Commentary' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Holds Trishula and Akshamala', 'Effulgent white crystalline body'],
      vahana: 'Seated upon the lap of Bhairava / Trident central prong',
      mudras: ['Jnana Mudra'],
      crownAndOrnaments: 'Pure crystalline light',
      complexion: 'Dazzling camphor white',
      asana: 'Central prong of the Trishula',
      surroundingDeities: ['Parapara', 'Apara'],
      symbolism: 'White radiance represents total transcendence of dualistic stains.'
    },
    worshipTraditions: {
      kula: 'Trika Shaivism',
      acharas: ['Samayachara'],
      regionalPractices: ['Kashmir non-dual meditation traditions'],
      sampradayaNotes: 'Contemplated through internal recognition (Pratyabhijna) rather than external ritualism.'
    },
    spiritualSignificance: {
      tattva: 'Anuttara (The Unsurpassable)',
      shakti: 'Prakasha-Vimarsha Samarasya',
      symbolism: 'Non-dual reality devoid of otherness.',
      theologicalInterpretation: 'The pure "I am" (Aham) of universal consciousness.'
    },
    mantraStotra: [
      {
        id: 'para-dhyana',
        title: 'परा ध्यानम् (Abhinavagupta Tantraloka)',
        type: 'Dhyana',
        sanskrit: `हंसासनस्थां शशिशेखरां च
त्रिशूलमध्यप्रमदां वरेण्याम्।
ध्येया परा सा परमाद्वितीया
प्रकाशरूपा परमामृताख्या॥`,
        transliteration: `Haṁsāsanasthāṁ śaśiśekharāṁ ca
Triśūlamadhyapramadāṁ vareṇyām।
Dhyeyā parā sā paramādvitīyā
Prakāśarūpā paramāmṛtākhyā॥`,
        meaning: 'Seated upon the celestial swan, adorned with the crescent moon, dwelling at the center of the trident of consciousness, I meditate upon Devi Para, the supreme non-dual effulgence of pure immortal nectar.',
        source: 'Tantraloka & Paratrishika',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'para-img-1',
        title: 'Sacred Visual Representation of Para Devi',
        imageType: 'sacred_om_fallback',
        attribution: 'Kashmir Shaiva Heritage Archive',
        source: 'Philosophical Trika Archive',
        license: 'Educational',
        verificationStatus: 'gupta_svarupa',
        fallbackType: 'gupta_svarupa'
      }
    ],
    relatedDeviIds: ['parapara', 'apara'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Kashmir']
  },

  {
    id: 'parapara',
    primaryName: 'Parapara Devi',
    sanskritName: 'श्री परापरा शक्तिः',
    odiaName: 'ମା ପରାପରା',
    alternateNames: ['Intermediate Shakti', 'Bhedabheda Rupa'],
    nameMeaning: 'The Intermediate goddess embodying unity-in-diversity (Bheda-Abheda); the bridge between the transcendent and the manifest.',
    classification: ['Trika Shakti Philosophy', 'Kashmiri Shaivism and Krama'],
    traditions: ['Trika', 'Kashmir Shaivism'],
    acharas: ['Samayachara'],
    shortIntro: 'The second Trika Shakti presiding over the intermediate state where the one consciousness simultaneously perceives its unity and its manifold diversity.',
    philosophicalSignificance: 'Represents the threshold of perception where unity and multiplicity coexist harmoniously.',
    theologicalPosition: 'Seated upon the right prong of the Trika trident.',
    scripturalReferences: [
      { textName: 'Tantraloka', originalLanguage: 'Sanskrit', sourceType: 'Commentary' },
      { textName: 'Malinivijayottara Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Holds flower bow and arrows of divine perception'],
      vahana: 'Right prong of the trident',
      mudras: ['Varada'],
      crownAndOrnaments: 'Golden silks, crowned with ruby diadems',
      complexion: 'Effulgent rosy dawn / golden red',
      asana: 'Right trident spike',
      surroundingDeities: ['Para', 'Apara'],
      symbolism: 'Rosy hue symbolizes the dawn of relational awareness.'
    },
    worshipTraditions: {
      kula: 'Trika',
      acharas: ['Samayachara'],
      regionalPractices: ['Kashmiri yogic contemplation'],
      sampradayaNotes: 'Internal recognition of divine play.'
    },
    spiritualSignificance: {
      tattva: 'Bheda-Abheda',
      shakti: 'Jnana-Kriya equilibrium',
      symbolism: 'The bridge connecting the unmanifest to the manifest.',
      theologicalInterpretation: 'Seeing the world as the reflection of Shiva.'
    },
    mantraStotra: [
      {
        id: 'parapara-dhyana',
        title: 'परापरा ध्यानम् (Malinivijayottara Tantra)',
        type: 'Dhyana',
        sanskrit: `भेदाभेदस्वरूपेण भासयन्तीं जगत्त्रयम्।
परापरां परां वन्दे शक्तिं संवित्प्रबोधिनीम्॥`,
        transliteration: `Bhedābhedasvarūpeṇa bhāsayantīṁ jagattrayam।
Parāparāṁ parāṁ vande śaktiṁ saṁvitprabodhinīm॥`,
        meaning: 'Illuminating the three worlds in the harmony of unity and diversity, I bow unto Devi Parapara, who awakens sovereign consciousness in the heart.',
        source: 'Malinivijayottara Tantra',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'parapara-img-1',
        title: 'Sacred Visual Representation of Parapara Devi',
        imageType: 'sacred_om_fallback',
        attribution: 'Kashmir Shaiva Heritage Archive',
        source: 'Philosophical Trika Archive',
        license: 'Educational',
        verificationStatus: 'gupta_svarupa',
        fallbackType: 'gupta_svarupa'
      }
    ],
    relatedDeviIds: ['para', 'apara'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Kashmir']
  },

  {
    id: 'apara',
    primaryName: 'Apara Devi',
    sanskritName: 'श्री अपरा शक्तिः',
    odiaName: 'ମା ଅପରା',
    alternateNames: ['Immanent Shakti', 'Bheda Rupa'],
    nameMeaning: 'The immanent, manifest goddess who operates within phenomenal multiplicity (Bheda); sovereign of worldly perception.',
    classification: ['Trika Shakti Philosophy', 'Kashmiri Shaivism and Krama'],
    traditions: ['Trika', 'Kashmir Shaivism'],
    acharas: ['Samayachara'],
    shortIntro: 'The third Trika Shakti presiding over the manifest objective universe and sensory multiplicity. Through her grace, worldly experience is recognized not as an illusion, but as the living body of Parashakti.',
    philosophicalSignificance: 'Represents the holy manifestation of the Divine in everyday reality.',
    theologicalPosition: 'Seated upon the left prong of the Trika trident.',
    scripturalReferences: [
      { textName: 'Tantraloka', originalLanguage: 'Sanskrit', sourceType: 'Commentary' },
      { textName: 'Pratyabhijnahridayam', originalLanguage: 'Sanskrit', sourceType: 'Commentary' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Holds skull cup and lotus', 'Dressed in multi-colored garments'],
      vahana: 'Left prong of the trident',
      mudras: ['Abhaya'],
      crownAndOrnaments: 'Adorned with all worldly gems',
      complexion: 'Deep red or midnight blue',
      asana: 'Left trident spike',
      surroundingDeities: ['Para', 'Parapara'],
      symbolism: 'Multi-colored garments symbolize the vibrant tapestry of cosmic forms.'
    },
    worshipTraditions: {
      kula: 'Trika',
      acharas: ['Samayachara'],
      regionalPractices: ['Non-dual contemplation of sensory experience'],
      sampradayaNotes: 'Realizing that all perceptions are Devi’s divine dance.'
    },
    spiritualSignificance: {
      tattva: 'Bheda (Multiplicity transfigured into Divine Play)',
      shakti: 'Kriya-Shakti',
      symbolism: 'The sacredness of everyday existence.',
      theologicalInterpretation: 'The universe as the visible body of God.'
    },
    mantraStotra: [
      {
        id: 'apara-dhyana',
        title: 'अपरा ध्यानम् (Trika Dhyana)',
        type: 'Dhyana',
        sanskrit: `विश्वप्रपञ्चरूपेण विलसन्तीं परात्पिकाम्।
अपरां सर्वभूतेषु स्थितां वन्दे शिवप्रियाम्॥`,
        transliteration: `Viśvaprapañcarūpeṇa vilasantīṁ parātpikām।
Aparāṁ sarvabhūteṣu sthitāṁ vande śivapriyām॥`,
        meaning: 'Shining through the manifold cosmic universe, dwelling in all sentient beings as their kinetic reality, I bow unto Devi Apara, beloved of Shiva.',
        source: 'Kashmir Shaiva Hymnology',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'apara-img-1',
        title: 'Sacred Visual Representation of Apara Devi',
        imageType: 'sacred_om_fallback',
        attribution: 'Kashmir Shaiva Heritage Archive',
        source: 'Philosophical Trika Archive',
        license: 'Educational',
        verificationStatus: 'gupta_svarupa',
        fallbackType: 'gupta_svarupa'
      }
    ],
    relatedDeviIds: ['para', 'parapara'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Kashmir']
  }
];
