import { ScriptureItem } from '../types';

export const scriptures: ScriptureItem[] = [
  {
    id: 'devi-mahatmya',
    title: 'Devi Mahatmya / Durga Saptashati',
    sanskritTitle: 'देवीमाहात्म्यम् / दुर्गासप्तशती',
    category: 'Puranic',
    authorOrAttribution: 'Attributed to Sage Markandeya (Chapters 81–93 of Markandeya Purana)',
    approximatePeriod: 'c. 4th–6th Century CE (Gupta Era codification)',
    subject: 'The primary scripture of the Shakta tradition, containing 700 verses organized into three Charitras (episodes) narrating the triumphs of the Divine Mother over cosmic adharma.',
    relevantDevis: ['mahakali', 'mahalakshmi', 'mahasaraswati', 'katyayani', 'chamunda', 'kalaratri', 'matrikas'],
    sectionInfo: '13 Chapters, 700 Verses (Saptashati)',
    summary: 'Narrated by Sage Medha to King Suratha (who lost his kingdom) and Samadhi the merchant (who was disowned by his family). It explains how Mahamaya casts the veil of delusion over all mortals, and how through her grace alone liberation is attained. Covers the slaying of Madhu-Kaitabha (Prathama Charitra), Mahishasura (Madhyama Charitra), and Shumbha-Nishumbha with Raktabija (Uttama Charitra).',
    excerpts: [
      {
        title: 'सृष्टिस्थितिविनाशानां शक्तिभूते सनातनि (Devi Stuti)',
        sanskrit: `सृष्टिस्थितिविनाशानां शक्तिभूते सनातनि।
गुणाश्रये गुणमये नारायणि नमोऽस्तु ते॥`,
        transliteration: `Sṛṣṭisthitivināśānāṁ śaktibhūte sanātani।
Guṇāśraye guṇamaye nārāyaṇi namo’stu te॥`,
        translation: 'O eternal Goddess who are the intrinsic power behind creation, preservation, and dissolution! O refuge of all qualities and embodiment of the cosmic gunas, O Narayani, salutations unto you!',
        context: 'Sung by the assembled gods in Chapter 11 (Narayani Stuti) after the destruction of Shumbha.'
      },
      {
        title: 'सर्वमङ्गलमाङ्गल्ये (All-Auspicious Prayer)',
        sanskrit: `सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।
शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥`,
        transliteration: `Sarvamaṅgalamāṅgalye śive sarvārthasādhike।
Śaraṇye tryambake gauri nārāyaṇi namo’stu te॥`,
        translation: 'O auspiciousness of all auspiciousness! O gentle fulfiller of all righteous aims! O refuge of all beings, three-eyed Gauri, Narayani, salutations unto you!',
        context: 'Universal protective prayer chanted at the beginning of all Shakta rites.'
      }
    ],
    sourcesAndEditions: [
      'Gita Press Gorakhpur critical Sanskrit-Hindi edition',
      'Adyar Library Sanskrit Series edition',
      'Varanasi Sampurnanand Sanskrit University recension'
    ]
  },
  {
    id: 'devi-bhagavata-purana',
    title: 'Devi Bhagavata Purana',
    sanskritTitle: 'श्रीमद्देवीभागवतपुराणम्',
    category: 'Puranic',
    authorOrAttribution: 'Attributed to Krishna Dvaipayana Veda Vyasa',
    approximatePeriod: 'c. 6th–11th Century CE',
    subject: 'Extensive 12-book Mahapurana proclaiming the absolute supremacy of Adi Parashakti as Parabrahman, containing the Devi Gita and the Pancha Prakriti cosmology.',
    relevantDevis: ['bhuvaneshvari', 'durga-prakriti', 'radha', 'lakshmi-prakriti', 'saraswati-prakriti', 'savitri-prakriti'],
    sectionInfo: '12 Skandhas (Books), 318 Chapters, 18,000 Verses',
    summary: 'Proclaims that Brahma, Vishnu, and Shiva are subordinate ministers of Adi Parashakti, who dwells in the celestial jewel island of Manidvipa. The seventh Skandha contains the renowned Devi Gita, where Devi reveals her universal cosmic form (Vishvarupa) to King Himalaya.',
    excerpts: [
      {
        title: 'सर्वं खल्विदमेवाहं नान्यदस्ति सनातनम् (Devi Gita)',
        sanskrit: `सर्वं खल्विदमेवाहं नान्यदस्ति सनातनम्।
मत्तोऽतिरिक्तं नास्त्येव किञ्चिद्वस्तु द्विजोत्तमाः॥`,
        transliteration: `Sarvaṁ khalvidamevāhaṁ nānyadasti sanātanam।
Matto’tiriktaṁ nāstyeva kiñcidvastu dvijottamāḥ॥`,
        translation: 'Verily, I alone am all that exists; there is nothing else eternal besides Me. There is not a single particle in this cosmos that is separate from Me, O best of the twice-born!',
        context: 'The revelation of absolute non-duality by the Divine Mother in Devi Gita (Book 7).'
      }
    ],
    sourcesAndEditions: [
      'Gita Press Gorakhpur 2-volume Sanskrit edition',
      'Pandit Ramtej Pandey scholarly commentary',
      'Chowkhamba Sanskrit Series'
    ]
  },
  {
    id: 'lalita-sahasranama',
    title: 'Lalita Sahasranama',
    sanskritTitle: 'श्रीललितासहस्रनामस्तोत्रम्',
    category: 'Devotional & Stotras',
    authorOrAttribution: 'Composed by the eight Ashta Vashinis (Vak-Devatas) at the command of Lalita; revealed in Brahmanda Purana (Uttara Khanda)',
    approximatePeriod: 'Classical Puranic antiquity; renowned commentary by Bhaskararaya (18th cent. CE)',
    subject: 'The thousand sacred holy names of Sri Lalita Mahatripurasundari, detailing her divine manifestation, defeat of Bhandasura, Manidvipa, and Kundalini ascent.',
    relevantDevis: ['tripura-sundari', 'shodasha-nityas', 'ashta-vashinis', 'matangi', 'varahi'],
    sectionInfo: '320 Verses containing 1000 unbroken divine names',
    summary: 'Narrated by Lord Hayagriva (the horse-headed avatar of wisdom) to Sage Agastya. Every name is a precise yogic formula describing the anatomy of the subtle chakras, Sri Chakra enclosures, and non-dual realization.',
    excerpts: [
      {
        title: 'श्रीमाता श्रीमहाराज्ञी श्रीमत्सिंहासनेश्वरी (Opening Names)',
        sanskrit: `श्रीमाता श्रीमहाराज्ञी श्रीमत्सिंहासनेश्वरी।
चिदग्निकुण्डसम्भूता देवकार्यसमुद्यता॥`,
        transliteration: `Śrīmātā śrīmahārājñī śrīmatsiṁhāsaneśvarī।
Cidagnikuṇḍasambhūtā devakāryasamudyatā॥`,
        translation: 'The Auspicious Mother (Srimata), the Supreme Sovereign Empress (Sri Maharajni), the Queen seated on the glorious lion throne (Srimat-Simhasaneshvari); born from the fire altar of pure consciousness (Chidagni-Kunda-Sambhuta), fully resolved to accomplish the cosmic mission of the devas.',
        context: 'The opening invocatory verse establishing the four primary titles of Lalita.'
      }
    ],
    sourcesAndEditions: [
      'Saubhagyabhaskara commentary by Bhaskararaya Makhin',
      'Ramakrishna Math published editions',
      'Kanchi Kamakoti Peetham authorized text'
    ]
  },
  {
    id: 'saundarya-lahari',
    title: 'Saundarya Lahari',
    sanskritTitle: 'सौन्दर्यलहरी (The Waves of Beauty and Bliss)',
    category: 'Devotional & Stotras',
    authorOrAttribution: 'Adi Shankaracharya (Verses 1-41 as Ananda Lahari revealed on Kailasha, 42-100 as Saundarya Lahari composed by Shankara)',
    approximatePeriod: 'c. 8th Century CE',
    subject: 'A monumental hundred-verse hymn celebrating the Sri Chakra, Kundalini yoga, and the transcendental beauty of Devi Parashakti.',
    relevantDevis: ['tripura-sundari', 'bhuvaneshvari', 'shiva'],
    sectionInfo: '100 Verses divided into Ananda Lahari (1-41) and Saundarya Lahari (42-100)',
    summary: 'Opens with the celebrated declaration that Shiva is capable of creation only when united with Shakti; without her, he cannot even stir. Explains the Sri Chakra geometry and the awakening of Kundalini from Muladhara to Sahasrara.',
    excerpts: [
      {
        title: 'शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुम् (Opening Verse)',
        sanskrit: `शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं
न चेदेवं देवो न खलु कुशलः स्पन्दितुमपि।
अतस्त्वामाराध्यां हरिहरविरिञ्चादिभिरपि
प्रणन्तुं स्तोतुं वा कथमकृतपुण्यः प्रभवति॥`,
        transliteration: `Śivaḥ śaktyā yukto yadi bhavati śaktaḥ prabhavituṁ
Na cedevaṁ devo na khalu kuśalaḥ spanditumapi।
Atastvāmārādhyāṁ hariharaviriñcādibhirapi
Praṇantuṁ stotuṁ vā kathamakṛtapuṇyaḥ prabhavati॥`,
        translation: 'Only when united with Shakti is Shiva able to create the universe! If not thus conjoined, the Lord is incapable of even the slightest vibration (Spandana). How then can one who has not accumulated merit even bow down to you or praise you, who are worshipped by Vishnu, Shiva, and Brahma?',
        context: 'Verse 1: Foundational philosophical thesis of the Shakta-Shaiva synthesis.'
      },
      {
        title: 'सुधासिन्धोर्मध्ये सुरविटपिवाटीपरिवृते (Manidvipa & Chintamani Griha)',
        sanskrit: `सुधासिन्धोर्मध्ये सुरविटपिवाटीपरिवृते
मणिद्वीपे नीपोपवनवति चिन्तामणिगृहे।
शिवाकारे मञ्चे परमशिवपर्यङ्कनिलयां
भजन्ति त्वां धन्याः कतिचन चिदानन्दलहरीम्॥`,
        transliteration: `Sudhāsindhormadhye suraviṭapivāṭīparivṛte
maṇidvīpe nīpopavanavati cintāmaṇigṛhe।
Śivākāre mañce paramaśivaparyaṅkanilayāṁ
bhajanti tvāṁ dhanyāḥ katicana cidānandalaharīm॥`,
        translation: 'Blessed indeed are the rare spiritual adepts who worship You, the wave of Consciousness and Bliss (Chidananda-Lahari), reclining upon the supreme couch of Paramashiva atop the Shiva altar, within the wish-fulfilling palace (Chintamani Griha) amidst Kadamba groves on the celestial Jewel Island (Manidvipa), encircled by wish-granting trees in the Ocean of Nectar!',
        context: 'Verse 8: Classical meditation on Devi seated in Manidvipa on the Pancha-Pretasan.'
      },
      {
        title: 'महीं मूलाधारे कमपि मणिपूरे हुतवहं (Kundalini Chakra Ascent)',
        sanskrit: `महीं मूलाधारे कमपि मणिपूरे हुतवहं
स्थितं स्वाधिष्ठाने हृदि मरुतमाकाशमुपरि।
मनोऽपि भ्रूमध्ये सकलमपि भित्त्वा कुलपथं
सहस्रारे पद्मे सह रहसि पत्या विहरसे॥`,
        transliteration: `Mahīṁ mūlādhāre kamapi maṇipūre hutavahaṁ
sthitaṁ svādhiṣṭhāne hṛdi marutamākāśamupari।
Mano’pi bhrūmadhye sakalamapi bhittvā kulapathaṁ
sahasrāre padme saha rahasi patyā viharase॥`,
        translation: 'Piercing through the earth element in the Muladhara, water in the Svadhisthana, fire in the Manipura, air in the heart (Anahata), ether in the Vishuddhi, and mind in the Ajna, You transcend the Sushumna path (Kula-patha) and revel in solitary bliss with Your Lord in the thousand-petaled lotus (Sahasrara)!',
        context: 'Verse 9: The definitive esoteric blueprint of Kundalini Yoga in Sri Vidya.'
      },
      {
        title: 'चतुर्भिः श्रीकण्ठैः शिवयुवतिभिः पञ्चभिरपि (Sri Chakra Geometry)',
        sanskrit: `चतुर्भिः श्रीकण्ठैः शिवयुवतिभिः पञ्चभिरपि
प्रभिन्नाभिः शम्भोर्नवभिरपि मूलप्रकृतिभिः।
त्रयश्चत्वारिंशद्वसुदलकलाश्रत्रिवलय-
त्रिरेखाभिः सार्धं तव शरणकोणाः परिणताः॥`,
        transliteration: `Caturbhiḥ śrīkaṇṭhaiḥ śivayuvatibhiḥ pañcabhirapi
prabhinnābhiḥ śambhornavabhirapi mūlaprakṛtibhiḥ।
Trayaścatvāriṁśadvasudalakalāśratrivalaya-
trirekhābhiḥ sārdhaṁ tava śaraṇakoṇāḥ pariṇatāḥ॥`,
        translation: 'By four upward-pointing triangles of Shiva and five downward-pointing triangles of Shakti (Shiva-Yuvati), the nine root triangles interlock to form the forty-three triangles of the Sri Chakra, surrounded by eight petals, sixteen petals, three concentric circles, and the three outer gates of the Bhupura!',
        context: 'Verse 11: The sacred geometry and mathematical derivation of the Sri Yantra.'
      },
      {
        title: 'तवाधारे मूले सह समयया लास्यपरया (Ananda Lahari Culmination)',
        sanskrit: `तवाधारे मूले सह समयया लास्यपरया
नवात्मानं मन्ये नवरसमहाताण्डवनटम्।
उभाभ्यामेताभ्यामुभयविधिमुद्दिश्य दयया
सनाथाभ्यां जज्ञे जनकजननीमज्जगदिदम्॥`,
        transliteration: `Tavādhāre mūle saha samayayā lāsyaparayā
navātmānaṁ manye navarasamahātāṇḍavanaṭam।
Ubhābhyāmetābhyāmubhayavidhimuddiśya dayayā
sanāthābhyāṁ jajñe janakajananīmajjagadidam॥`,
        translation: 'In Your root center (Muladhara), I meditate upon Lord Shiva performing the grand cosmic Tandava alongside You as Devi Samaya dancing the graceful Lasya. From the compassionate union of these two eternal Parents, this entire universe was brought forth!',
        context: 'Verse 41: The climactic culmination of the forty-one verses of Ananda Lahari.'
      }
    ],
    sourcesAndEditions: [
      'Lakshmidhara commentary on Saundarya Lahari',
      'Kameshvarasuri commentary',
      'Theosophical Publishing House Adyar edition'
    ]
  },
  {
    id: 'tantraloka',
    title: 'Tantraloka of Abhinavagupta',
    sanskritTitle: 'तन्त्रालोकः (Light on the Tantras)',
    category: 'Kashmir Shaivism & Philosophical',
    authorOrAttribution: 'Mahamaheshvara Acharya Abhinavagupta',
    approximatePeriod: 'c. 10th–11th Century CE (Kashmir)',
    subject: 'The masterwork and encyclopedia of non-dual Kashmir Shaivism, synthesizing Trika, Krama, and Kaula schools into a unified path of direct self-recognition.',
    relevantDevis: ['dwadasha-kalis', 'para', 'parapara', 'apara'],
    sectionInfo: '37 Ahnikas (Daily Lessons), over 5,800 Sanskrit verses',
    summary: 'Explains the 36 tattvas, the four Upayas (Anavopaya, Shaktopaya, Shambhavopaya, and Anupaya), the twelve Kalis of the Krama system, and the nature of Svatantrya (absolute autonomy of consciousness as Shakti).',
    excerpts: [
      {
        title: 'नौमि देवीं परां शक्तिं प्रकाशात्मशिवोदिताम्',
        sanskrit: `नौमि देवीं परां शक्तिं प्रकाशात्मशिवोदिताम्।
यदुन्मेषनिमेषाभ्यां जगदुन्मिषतीव च॥`,
        transliteration: `Naumi devīṁ parāṁ śaktiṁ prakāśātmaśivoditām।
Yadunmeṣanimeṣābhyāṁ jagadunmiṣatīva ca॥`,
        translation: 'I bow unto Devi Parashakti, who emerges from the self-luminous nature of Shiva, by whose opening and closing of eyelids the entire cosmos appears to emerge and dissolve.',
        context: 'Invocatory treatise on the nature of Spanda and non-dual awareness.'
      }
    ],
    sourcesAndEditions: [
      'Kashmir Series of Texts and Studies (KSTS) 12 volumes with Jayaratha commentary',
      'Motilal Banarsidass edition'
    ]
  },
  {
    id: 'sharadatilaka-tantra',
    title: 'Sharadatilaka Tantra',
    sanskritTitle: 'शारदातिलकतन्त्रम्',
    category: 'Tantric & Agamic',
    authorOrAttribution: 'Acharya Lakshmana Deshikendra (commentary Padarthadarsha by Raghavabhatta)',
    approximatePeriod: 'c. 11th Century CE',
    subject: 'One of the most authoritative and widely cited encyclopedias of Mantra-Shastra, Yantras, Dhyana verses, and ritual geometries across all Shakta traditions.',
    relevantDevis: ['pratyangira', 'matangi', 'bhuvaneshvari', 'bhairavi', 'tara'],
    sectionInfo: '25 Patalas (Chapters)',
    summary: 'Details the creation of sound (Nada-Bindu-Bija), Sanskrit phonemes (Matrikas), sacred yantras for all major Devis (including the foundational chapter 18 on Pratyangira), and inner pranayama practices.',
    excerpts: [
      {
        title: 'सच्चिदानन्दविभवात्सकलात्परमेश्वरात्',
        sanskrit: `सच्चिदानन्दविभवात्सकलात्परमेश्वरात्।
आसीच्छक्तिस्ततो नादो नादाद्बिन्दुसमुद्भवः॥`,
        transliteration: `Saccidānandavibhavātsakalātparameśvarāt।
Āsīcchaktistato nādo nādādbindusamudbhavaḥ॥`,
        translation: 'From the Supreme Lord endowed with Sat-Chit-Ananda emerged Shakti; from Shakti arose Nada (primordial sound); and from Nada emerged the Bindu (point of concentrated potentiality).',
        context: 'Patala 1: Cosmology of sound and manifest reality.'
      }
    ],
    sourcesAndEditions: [
      'Chowkhamba Sanskrit Series edition with Raghavabhatta commentary',
      'Kashi Sanskrit Series'
    ]
  }
];
