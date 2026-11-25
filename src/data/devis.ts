import { Devi } from '../types';

export const devis: Devi[] = [
  // ==========================================
  // 1. DAS MAHAVIDYAS (10)
  // ==========================================
  {
    id: 'kali',
    imagePath: '/images/devis/kali.jpg',
    primaryName: 'Maa Kali',
    sanskritName: 'श्री महाकाली',
    odiaName: 'ମା କାଳୀ',
    alternateNames: ['Dakshina Kali', 'Bhadrakali', 'Guhyakali', 'Smashana Kali', 'Kalaratri', 'Adya Shakti'],
    nameMeaning: 'Derived from "Kala" meaning Time, Eternity, and Blackness; she who devours time and leads the soul beyond temporal dissolution.',
    classification: ['Das Mahavidya', 'Kalikula', 'Krama Tradition'],
    traditions: ['Kalikula', 'Krama', 'Kaula', 'Atharvana Tantra', 'Dakshinachara', 'Vamachara'],
    acharas: ['Vamachara', 'Dakshinachara', 'Kaulachara'],
    shortIntro: 'The first and foremost of the Das Mahavidyas. Maa Kali is the supreme personification of primordial time, cosmic dissolution, and maternal protection, devouring the illusions of ego to reveal the unconditioned ground of non-dual consciousness.',
    philosophicalSignificance: 'Kali represents pure transcendence beyond the categories of name and form (Nama-Rupa). Her blackness signifies the absorption of all colors and cosmic forms back into the unmanifest Absolute, like light disappearing into a celestial void.',
    theologicalPosition: 'In Kalikula Tantra, Kali is the supreme source from whom Brahma, Vishnu, and Rudra emerge. In Kashmir Shaivism Krama, she is the twelfth stage of consciousness (Mahabhairava Chandograghora Kali) transcending all cosmic cycles.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Markandeya Purana)', originalLanguage: 'Sanskrit', sectionOrChapter: 'Chapter 7 (Verses 5-27)', sourceType: 'Purana' },
      { textName: 'Mahanirvana Tantra', originalLanguage: 'Sanskrit', sectionOrChapter: 'Ullasa 4-5', sourceType: 'Tantra' },
      { textName: 'Todala Tantra', originalLanguage: 'Sanskrit', sectionOrChapter: 'Patala 1-3', sourceType: 'Tantra' },
      { textName: 'Brihad Nila Tantra', originalLanguage: 'Sanskrit', sectionOrChapter: 'Patala 1-4', sourceType: 'Tantra' },
      { textName: 'Karpuradi Stotram', originalLanguage: 'Sanskrit', sectionOrChapter: 'Verses 1-22', sourceType: 'Stotra' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Khadga (Cleaving Sword)', 'Munda (Severed Demon Head / Ego)', 'Abhaya Mudra (Fearlessness)', 'Varada Mudra (Bestowal of Boons)'],
      vahana: 'Shiva lying supine (Shava-rupa)',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Mundamala (Garland of 50 human skull letters representing Sanskrit varnas), girdle of severed human hands (representing karma), crescent moon crown',
      complexion: 'Deep blue-black like a monsoon raincloud (Nila-Megha-Shyama)',
      asana: 'Standing with right foot advanced (Dakshinachara) or left foot advanced (Vamachara) on the chest of Lord Shiva',
      surroundingDeities: ['Bhairavas', 'Dakinies', 'Shivadutis', 'Jackals in cremation grounds'],
      symbolism: 'Her nakedness (Digambari) signifies being clothed only in the infinite directions, free from maya. Her lolling red tongue signifies the dynamic active principle (Rajas) subdued by the pure white teeth of discernment (Sattva).'
    },
    worshipTraditions: {
      kula: 'Kalikula',
      acharas: ['Dakshinachara (devotional temple and home puja)', 'Vamachara (nocturnal smashana contemplations)', 'Kaulachara (inner Kundalini transmutation)'],
      regionalPractices: ['Bengal Kali Puja (Diwali night)', 'Odisha Shyama Kali Puja', 'Assam Kamakhya Kali Upasana', 'Mithila Shyama Puja'],
      sampradayaNotes: 'Dakshina Kali with right foot forward is worshipped for peace, family welfare, and enlightenment. Smashana Kali is worshipped strictly under initiated monastic guidance.'
    },
    spiritualSignificance: {
      tattva: 'Kala-Tattva and Para-Brahman',
      shakti: 'Samhara Shakti (Cosmic Reabsorption)',
      symbolism: 'Dissolution of the false mortal identity; eternal safety in the motherly lap of infinity.',
      theologicalInterpretation: 'The corpse-like stillness of Shiva signifies unmanifest static consciousness, while Kali dancing atop him represents the vibrant, dynamic kinetic energy without which existence cannot perceive itself.'
    },
    mantraStotra: [
      {
        id: 'kali-dhyana',
        title: 'काली ध्यानम् (Dhyana Sloka from Karpuradi Stotram)',
        type: 'Dhyana',
        sanskrit: `करालवदनां घोरां मुक्तकेशीं चतुर्भुजाम्।
कालिकां दक्षिणां दिव्यां मुण्डमालाविभूषिताम्॥
सद्यश्छिन्नशिरः खड्गं वरदाभयपाणिकाम्।
महामेघप्रभां श्यामां तथा चैव दिगम्बरीम्॥`,
        transliteration: `Karālavadanāṁ ghorāṁ muktakeśīṁ caturbhujām।
Kālikāṁ dakṣiṇāṁ divyāṁ muṇḍamālāvibhūṣitām॥
Sadyaśchinnaśiraḥ khaḍgaṁ varadābhayapāṇikām।
Mahāmeghaprabhāṁ śyāmāṁ tathā caiva digambarīm॥`,
        meaning: 'I meditate on the divine Dakshina Kalika: terrible-faced yet profoundly compassionate, with free disheveled hair and four arms. Adorned with a garland of human heads, holding a freshly severed head and a sword in her left hands, and granting fearlessness and boons with her right hands. Effulgent like a dark raincloud, she is clothed only in the cosmic directions.',
        source: 'Karpuradi Stotram & Kalika Purana',
        isPublicDevotional: true
      },
      {
        id: 'kali-adya-stotram',
        title: 'आद्या स्तोत्रम् (Adya Stotram from Mahanirvana Tantra)',
        type: 'Stotra',
        sanskrit: `ॐ ह्रीं ब्रह्माणी ब्रह्मलोके च वैकुण्ठे सर्वमङ्गला।
इन्द्राणी अमरावती चापि अम्बिका वरुणालये॥
वरुणे च तथा गौरी कुबेरे च तथा धन्या।
काली कालिकुलश्रेष्ठा सर्वकामप्रदायिनी॥`,
        transliteration: `Om hrīṁ brahmāṇī brahmaloke ca vaikuṇṭhe sarvamaṅgalā।
Indrāṇī amarāvatī cāpi ambikā varuṇālaye॥
Varuṇe ca tathā gaurī kubere ca tathā dhanyā।
Kālī kālikulaśreṣṭhā sarvakāmapradāyinī॥`,
        meaning: 'Om Hrim! She is Brahmani in the realm of Brahma, Sarvamangala in Vaikuntha, Indrani in Amaravati, Ambika in the abode of Varuna. Kali is the supreme sovereign of the Kalikula, bestowing the fulfillment of all dharmic aspirations and final liberation.',
        source: 'Mahanirvana Tantra, Brahma-Kanda',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Kali Yantra',
      geometricalDescription: 'Five concentric inverted equilateral triangles symbolizing the five sheaths (Koshas) and five subtle elements, surrounded by an eight-petaled lotus, a sixteen-petaled lotus, and an outer four-gated Bhupura (earth citadel).',
      scripturalReference: 'Kalika Purana & Todala Tantra',
      documentedSignificance: 'Meditation on the central Bindu of the Kali Yantra absorbs the practitioner’s fragmented mental vrittis into the silent stillness of eternity.'
    },
    imageAssets: [
      {
        id: 'kali-img-1',
        title: 'Traditional Iconography of Dakshina Kali',
        imageType: 'verified_iconography',
        attribution: 'Traditional Kalighat & Shakta Iconography Archive',
        source: 'Kalighat Temple Records, Kolkata',
        license: 'Public Domain / Educational Repository',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['tara', 'chhinnamasta', 'bhairavi', 'dhumavati', 'chamunda', 'guhyakali', 'pratyangira'],
    relatedPeethaIds: ['adi-kalighat', 'maha-mahakali-ujjain'],
    evidenceStatus: 'Primary textual evidence',
    region: ['West Bengal', 'Odisha', 'Assam', 'Kashmir', 'Mithila', 'Pan-Indian']
  },

  {
    id: 'tara',
    imagePath: '/images/devis/tara.jpg',
    primaryName: 'Maa Tara',
    sanskritName: 'श्री तारा देवी',
    odiaName: 'ମା ତାରା',
    alternateNames: ['Ugra Tara', 'Nila Saraswati', 'Ekajata', 'Tarini', 'Bhadra Tara'],
    nameMeaning: 'Derived from "Tr" root meaning to cross or ferry across; the savioress who ferries devotees across the turbulent ocean of worldly delusion (Samsara-Tarini).',
    classification: ['Das Mahavidya', 'Kalikula', 'Odisha Shakta Parampara'],
    traditions: ['Kalikula', 'Vamachara', 'Chinachara', 'Tantric Buddhist-Shakta Syncretism'],
    acharas: ['Vamachara', 'Kaulachara', 'Dakshinachara'],
    shortIntro: 'The second Mahavidya. Maa Tara is the cosmic compassion that rescues seekers in dire peril. Revered in both Shakta and Vajrayana traditions, she embodies the liberating potency of unhindered speech (Akshobhya) and illumination.',
    philosophicalSignificance: 'Tara is the kinetic sound vibration (Vak-Shakti) that navigates the sea of conditioned existence. While Kali is the void that dissolves time, Tara is the luminous spark of Grace that carries consciousness safely to the shore of liberation.',
    theologicalPosition: 'In Shakta Tantra, Tara is crowned by Akshobhya (the unshakable consciousness of Lord Shiva). She is worshipped as Nila Saraswati when bestowing spontaneous poetic illumination and speech mastery.',
    scripturalReferences: [
      { textName: 'Tararahasya', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Brihad Nila Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Mundamala Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Todala Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Kartrika (Scimitar)', 'Kapala (Skull Cup)', 'Utpala (Blue Lotus)', 'Khadga (Sword)'],
      vahana: 'Supine Shiva on lotus in water',
      mudras: ['Varada', 'Abhaya'],
      crownAndOrnaments: 'Braided matted locks adorned with Akshobhya Buddha/Shiva jewel; tiger-skin skirt; serpent ornaments',
      complexion: 'Deep cerulean blue (Nila)',
      asana: 'Pratyalidha asana (warrior stance with left knee bent, right leg stretched behind)',
      surroundingDeities: ['Akshobhya Shiva', 'Ekajata', 'Parnasavari'],
      symbolism: 'The blue lotus held in her hand represents purity blossoming untouched out of the muddy waters of mundane illusion.'
    },
    worshipTraditions: {
      kula: 'Kalikula',
      acharas: ['Vamachara', 'Kaulachara', 'Siddhanta Tantra'],
      regionalPractices: ['Tarapith cremation-ground sadhana in Bengal', 'Tara Tarini hill shrine in Odisha', 'Ugra Tara temple in Guwahati, Assam'],
      sampradayaNotes: 'Requires purity of intention; historically connected with Sage Vasishtha’s Chinachara realization.'
    },
    spiritualSignificance: {
      tattva: 'Shabda-Brahman (Cosmic Sound) & Karuna (Grace)',
      shakti: 'Taraka Shakti (Deliverance Power)',
      symbolism: 'The motherly voice cutting through existential terror.',
      theologicalInterpretation: 'Tara manifests as breath, mantra, and intuition, guiding the spiritual voyager through dark nights of the soul.'
    },
    mantraStotra: [
      {
        id: 'tara-dhyana',
        title: 'तारा ध्यान श्लोक (Tara Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `प्रत्यालीढपदस्थितां हृदि मुण्डमालाविभूषिताम्।
खर्वां लंबोदरीं भीमां व्याघ्रचर्मावृतां कटौ॥
नवयौवनसंपन्नां पञ्चमुद्राविभूषिताम्।
चतुर्भुजां लोलजिह्वां महाभीमां वरप्रदाम्॥`,
        transliteration: `Pratyālīḍhapadashitāṁ hṛdi muṇḍamālāvibhūṣitām।
Kharvāṁ laṁbodarīṁ bhīmāṁ vyāghracarmāvṛtāṁ kaṭau॥
Navayauvanasaṁpannāṁ pañcamudrāvibhūṣitām।
Caturbhujāṁ lolajihvāṁ mahābhīmāṁ varapradām॥`,
        meaning: 'Poised in the heroic Pratyalidha stance with left foot forward upon the corpse, adorned with a skull garland. Youthful yet terrifying, short-statured with expansive belly, wrapped in tiger hide at her waist, holding the four sacred implements and blessing her devotees with fearlessness.',
        source: 'Tararahasya & Brihad Nila Tantra',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Tara Yantra',
      geometricalDescription: 'Central triangle within an inverted triangle forming a star hexagram, surrounded by eight petals, sixteen petals, and four cardinal portals.',
      scripturalReference: 'Tantraraja & Tararahasya',
      documentedSignificance: 'Awakens poetic eloquence and dissolves the fear of unnatural death.'
    },
    imageAssets: [
      {
        id: 'tara-img-1',
        title: 'Verified Traditional Representation of Maa Tara',
        imageType: 'verified_iconography',
        attribution: 'Tarapith & Kamakhya Sacred Archives',
        source: 'Traditional Tantric Iconography Collections',
        license: 'Educational Non-commercial',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['kali', 'bhairavi', 'tara-tarini', 'vimala-puri'],
    relatedPeethaIds: ['peetha-tarapith-bengal', 'adi-tara-tarini', 'adi-kamakhya'],
    evidenceStatus: 'Primary textual evidence',
    region: ['West Bengal', 'Assam', 'Odisha', 'Tibet', 'Nepal']
  },

  {
    id: 'tripura-sundari',
    imagePath: '/images/devis/tripura-sundari.jpg',
    primaryName: 'Maa Tripura Sundari',
    sanskritName: 'श्री ललिता महात्रिपुरसुन्दरी',
    odiaName: 'ମା ତ୍ରିପୁରସୁନ୍ଦରୀ',
    alternateNames: ['Lalita', 'Shodashi', 'Rajarajeshvari', 'Bala Tripura Sundari', 'Kameshvari', 'Kamakshi'],
    nameMeaning: 'The transcendental Beauty of the Three Worlds (Tripura: gross, subtle, and causal realms; wakefulness, dream, and deep sleep).',
    classification: ['Das Mahavidya', 'Srikula', 'Sri Vidya'],
    traditions: ['Srikula', 'Sri Vidya', 'Samayachara', 'Kaulachara'],
    acharas: ['Samayachara', 'Dakshinachara', 'Kaulachara'],
    shortIntro: 'The third Mahavidya and sovereign queen of Sri Vidya. Revered as Lalita Mahatripurasundari, she dwells at the apex of the Sri Chakra (Bindu) in the jewel island of Manidvipa, embodying supreme consciousness overflowing with uncaused divine love (Ananda).',
    philosophicalSignificance: 'Tripura Sundari represents the totality of reality as pure self-luminous aesthetic delight (Chit-Ananda). She is beyond the dualism of beauty and terror; all creation is her spontaneous playful sport (Lila).',
    theologicalPosition: 'Presides as Rajarajeshvari seated on the throne supported by Brahma, Vishnu, Rudra, and Ishana as the couch legs, with Sadashiva as the plank.',
    scripturalReferences: [
      { textName: 'Brahmanda Purana (Lalita Mahatmya)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Lalita Sahasranama', originalLanguage: 'Sanskrit', sourceType: 'Stotra' },
      { textName: 'Saundarya Lahari (Adi Shankara)', originalLanguage: 'Sanskrit', sourceType: 'Devotional & Philosophical' },
      { textName: 'Vamakeshvara Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Tantraraja Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: [
        'Ikshudhanus (Bow of sugarcane representing the human mind)',
        'Pancha Pushpabana (Five flowered arrows representing the five senses: sound, touch, sight, taste, smell)',
        'Pasha (Noose of attachment / divine love)',
        'Ankusha (Goad of spiritual wrath / discernment)'
      ],
      vahana: 'Pancha Brahmasana (Brahma, Vishnu, Rudra, Ishana as legs; Sadashiva as seat)',
      mudras: ['Varada', 'Abhaya', 'Chin Mudra in esoteric forms'],
      crownAndOrnaments: 'Jeweled crown with crescent moon and ruby brooch; resplendent silks woven with golden thread',
      complexion: 'Radiant rosy red like the rising morning sun (Aruna-varnam)',
      asana: 'Seated in royal ease (Lalitasana) on the throne of Manidvipa',
      surroundingDeities: ['Mantrini (Matangi)', 'Dandanatha (Varahi)', 'Shodasha Nityas', 'Ashta Vashinis'],
      symbolism: 'Her redness represents the radiant vibration of pure compassion infusing the universe.'
    },
    worshipTraditions: {
      kula: 'Srikula',
      acharas: ['Samayachara (internal mental worship in Sahasrara)', 'Dakshinachara (external Sri Yantra Puja with Kumkuma)', 'Kaulachara (Kula rituals)'],
      regionalPractices: ['South Indian Sri Vidya traditions (Kanchi, Sringeri)', 'Varanasi Sri Vidya Upasana', 'Kashmir Srikula schools'],
      sampradayaNotes: 'Requires step-by-step initiation (Diksha) through Guru-parampara; public chanting of Lalita Sahasranama is universally encouraged.'
    },
    spiritualSignificance: {
      tattva: 'Pancha-Trimshat Tattva Samanvita (36 Tattvas)',
      shakti: 'Icha, Jnana, Kriya Shakti Samarasya',
      symbolism: 'The universe as the body of divine love.',
      theologicalInterpretation: 'The absolute union of Kameshvara (Shiva) and Kameshvari (Shakti) at the central Bindu.'
    },
    mantraStotra: [
      {
        id: 'lalita-dhyana',
        title: 'ललिता सहस्रनाम ध्यानम् (Lalita Sahasranama Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `सिन्दूरारुणविग्रहां त्रिनयनां माणिक्यमौलिस्फुरत्-
ताराताराधिपशेखरां स्मितमुखीमापीनवक्षोरुहाम्।
पाणिभ्यामलिपूर्णरत्नचषकं रक्तोत्पलं बिभ्रतीं
सौम्यां रत्नघटस्थरक्तचरणां ध्यायेत्परामम्बिकाम्॥`,
        transliteration: `Sindūrāruṇavigrahāṁ trinayanāṁ māṇikyamaulisphurat-
tārātārādhipaśekharāṁ smitamukhīmāpīnavakṣoruhām।
Pāṇibhyāmalipūrṇaratnacaṣakaṁ raktotpalaṁ bibhratīṁ
saumyāṁ ratnaghaṭastharak परिस्थिति ध्यायेत्परामम्बिकाम्॥`,
        meaning: 'I meditate on the supreme Ambika: her divine form glowing with the rosy hue of pure vermilion, three-eyed, her ruby-studded crown bearing the crescent moon. Smiling gently with full maternal grace, holding a jeweled cup brimming with nectar and a red lotus, her lotus feet resting upon an auspicious gem-encrusted urn.',
        source: 'Brahmanda Purana, Lalita Sahasranama Purva-Bhaga',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Chakra / Sri Yantra',
      geometricalDescription: 'The King of Yantras: Nine interlocking triangles (four pointing upward symbolizing Shiva, five pointing downward symbolizing Shakti) creating 43 subsidiary triangles, enclosed within an eight-petaled lotus, a sixteen-petaled lotus, three circular girdles, and a square four-portal Bhupura.',
      scripturalReference: 'Yogini Hridaya, Vamakeshvara Tantra, Saundarya Lahari',
      documentedSignificance: 'The holographic representation of both the macrocosmic universe and the microcosmic human subtle body.'
    },
    imageAssets: [
      {
        id: 'tripura-img-1',
        title: 'Sacred Visual Representation of Lalita Tripura Sundari',
        imageType: 'verified_iconography',
        attribution: 'Srikula Sri Vidya Tradition Archive',
        source: 'Kanchi Kamakoti & Sringeri Archival Repositories',
        license: 'Educational Non-commercial',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['bhuvaneshvari', 'kamalatmika', 'matangi', 'bagalamukhi'],
    relatedPeethaIds: ['maha-kamakshi-kanchi'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Varanasi', 'Kashmir', 'Odisha']
  },

  {
    id: 'bhuvaneshvari',
    imagePath: '/images/devis/bhuvaneshvari.jpg',
    primaryName: 'Maa Bhuvaneshvari',
    sanskritName: 'श्री भुवनेश्वरी',
    odiaName: 'ମା ଭୁବନେଶ୍ୱରୀ',
    alternateNames: ['Bhuvanamata', 'Rajarajeshvari', 'Sarva-Loka-Janani', 'Hrimkari', 'Maya Devi'],
    nameMeaning: 'Sovereign ruler (Ishvari) of all manifest realms of existence (Bhuvana); the boundless container of cosmic space.',
    classification: ['Das Mahavidya', 'Srikula', 'Pancha Bhuta Shaktis'],
    traditions: ['Srikula', 'Dakshinachara', 'Samayachara'],
    acharas: ['Dakshinachara', 'Samayachara'],
    shortIntro: 'The fourth Mahavidya. Maa Bhuvaneshvari embodies the primordial cosmic space (Akasha) within which infinite galaxies are created, sustained, and dissolved. She is the presiding deity of the sacred Bija HRIM.',
    philosophicalSignificance: 'Bhuvaneshvari represents the spaciousness of pure awareness. Where other deities embody kinetic action, Bhuvaneshvari is the boundless theatre of consciousness allowing all actions to occur without becoming constrained by them.',
    theologicalPosition: 'Described extensively in the Devi Bhagavata Purana as the supreme ruler of the celestial citadel Manidvipa, attended by Brahma, Vishnu, and Rudra.',
    scripturalReferences: [
      { textName: 'Devi Bhagavata Purana', originalLanguage: 'Sanskrit', sectionOrChapter: 'Book 3 & Book 12', sourceType: 'Purana' },
      { textName: 'Bhuvaneshvari Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Sharadatilaka Tantra', originalLanguage: 'Sanskrit', sectionOrChapter: 'Patala 9', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Pasha (Noose)', 'Ankusha (Goad)', 'Abhaya Mudra (Fearlessness)', 'Varada Mudra (Boons)'],
      vahana: 'Simhasana (Golden Lion Throne)',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Jeweled crown sparkling with the gems of all celestial realms; wearing a crescent moon and adorned with pearl necklaces',
      complexion: 'Effulgent molten gold or rosy dawn (Kanaka-prabha)',
      asana: 'Seated majestically in Padmasana on her celestial throne',
      surroundingDeities: ['Brahma', 'Vishnu', 'Shiva as attendants in Manidvipa'],
      symbolism: 'Her expansive third eye signifies cosmic omniscience watching over every living creature with maternal solicitude.'
    },
    worshipTraditions: {
      kula: 'Srikula',
      acharas: ['Dakshinachara', 'Samayachara'],
      regionalPractices: ['Puri Jagannath temple (Bhuvaneshwari temple in outer compound)', 'Varanasi Bhuvaneshvari temple', 'Bhubaneswar Shakta shrines', 'Gujarat Ambaji'],
      sampradayaNotes: 'Worshipped widely for family harmony, removal of material obstacles, and attainment of spiritual sovereignty.'
    },
    spiritualSignificance: {
      tattva: 'Akasha-Tattva (Space) and Maya-Tattva',
      shakti: 'Srishti-Sthiti Shakti',
      symbolism: 'Spacious, non-judgmental awareness embracing all living beings.',
      theologicalInterpretation: 'The universe as a golden palace constructed out of Devi’s own effulgence.'
    },
    mantraStotra: [
      {
        id: 'bhuvaneshvari-dhyana',
        title: 'भुवनेश्वरी ध्यान श्लोक (Bhuvaneshvari Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `उद्यद्दिनद्युतिमिन्दुकिरीटां तुङ्गकुचां नयनत्रययुक्ताम्।
स्मेरमुखीं वरदाङ्कुशपाशाभीतिकराम्प्रभजे भुवनेशीम्॥`,
        transliteration: `Udyaddinadyutimindukirīṭāṁ tuṅgakucāṁ nayanatrayayuktām।
Smeramukhīṁ varadāṅkuśapāśābhītikarāṁprabhaje bhuvaneśīm॥`,
        meaning: 'I worship the divine ruler of all worlds, radiant as the newly risen sun, crowned with the crescent moon, with three compassionate eyes and a gentle smile. She holds the goad, the noose, and displays the mudras granting boons and dispelling all fear.',
        source: 'Sharadatilaka Tantra & Devi Bhagavata Purana',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Bhuvaneshvari Yantra',
      geometricalDescription: 'Central inverted triangle inscribed with HRIM, surrounded by an inner hexagon, eight lotus petals, and a three-tiered square Bhupura.',
      scripturalReference: 'Tantraraja Tantra',
      documentedSignificance: 'Invokes material stability, emotional peace, and expansive spiritual awareness.'
    },
    imageAssets: [
      {
        id: 'bhuvaneshvari-img-1',
        title: 'Verified Traditional Iconography of Maa Bhuvaneshvari',
        imageType: 'verified_iconography',
        attribution: 'Devi Bhagavata Purana Traditional Painting Archive',
        source: 'Rajarajeshvari Traditional Peethas',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['tripura-sundari', 'kamalatmika', 'vimala-puri'],
    relatedPeethaIds: [],
    evidenceStatus: 'Primary textual evidence',
    region: ['Odisha', 'Gujarat', 'Uttar Pradesh', 'South India']
  },

  {
    id: 'chhinnamasta',
    imagePath: '/images/devis/chhinnamasta.jpg',
    primaryName: 'Maa Chhinnamasta',
    sanskritName: 'श्री छिन्नमस्ता',
    odiaName: 'ମା ଛିନ୍ନମସ୍ତା',
    alternateNames: ['Prachanda Chandika', 'Chhinnamastika', 'Vairochani', 'Koti-Surya-Samaprabha'],
    nameMeaning: 'She whose head is severed; the supreme goddess who severs her own head to nourish her yogic attendants, symbolizing absolute self-transcendence.',
    classification: ['Das Mahavidya', 'Kalikula'],
    traditions: ['Kalikula', 'Vamachara', 'Kaula Tantra', 'Atharvana Tantra', 'Kundalini Yoga'],
    acharas: ['Vamachara', 'Kaulachara'],
    shortIntro: 'The fifth Mahavidya. Maa Chhinnamasta is among the most profound and esoteric manifestations of Tantric iconography. Depicted decapitating herself with her own scimitar, three streams of blood gush forth from her neck—one nourishing herself and the other two nourishing her yogini attendants Varnini and Dakini.',
    philosophicalSignificance: 'Chhinnamasta signifies the radical severance of egoic identification (Ahamkara). By severing the head of conceptual thought, the Kundalini energy rises unobstructed through the Sushumna nadi past the Brahma Randhra into cosmic illumination.',
    theologicalPosition: 'She stands upon Kamadeva (divine desire) and Rati (sensory enjoyment) united in ecstatic embrace. Rather than repressing primal desires, she transcends and transmutes them into the soaring vertical current of spiritual liberation.',
    scripturalReferences: [
      { textName: 'Chhinnamasta Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Shaktisamgama Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Prachandachandika Paddhati', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Tantrasara (Krishnananda Agamavagisha)', originalLanguage: 'Sanskrit', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Kartri (Cleaving Knife in right hand)', 'Own Severed Head (in left hand catching the central nectar stream)'],
      vahana: 'Kamadeva and Rati in copulation upon a blooming lotus',
      mudras: ['Holding head', 'Holding kartri'],
      crownAndOrnaments: 'Serpent garland around her neck; garland of human skulls; radiant solar aura behind the severed torso',
      complexion: 'Effulgent like a million rising suns or hibiscus red (Japa-Kusuma-Sankasha)',
      asana: 'Standing in heroic Pratyalidha posture upon the reclining bodies of Kama and Rati',
      surroundingDeities: ['Varnini (on the right, drinking the solar Pingala stream)', 'Dakini (on the left, drinking the lunar Ida stream)'],
      symbolism: 'The three blood jets correspond to the three central subtle channels: Ida, Pingala, and Sushumna.'
    },
    worshipTraditions: {
      kula: 'Kalikula',
      acharas: ['Vamachara', 'Kaulachara'],
      regionalPractices: ['Chhinnamasta temple at Rajrappa (Jharkhand, confluence of Damodar and Bhera rivers)', 'Kamakhya Chhinnamasta shrine', 'Nepal Patan Chhinnamasta'],
      sampradayaNotes: 'Requires strict discipline and inner contemplation under a recognized Guru. Esoteric contemplation of the death of ego.'
    },
    spiritualSignificance: {
      tattva: 'Kundalini-Shakti piercing the Ajna and Sahasrara',
      shakti: 'Vidya-Shakti (Transcendent Gnosis)',
      symbolism: 'Sacrificial dissolution of the false self to awaken cosmic immortality.',
      theologicalInterpretation: 'Life sustains life through continuous divine self-offering (Yajna).'
    },
    mantraStotra: [
      {
        id: 'chhinnamasta-dhyana',
        title: 'छिन्नमस्ता ध्यान श्लोक (Chhinnamasta Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `प्रत्यङ्कपालकलितं स्वनिजात्तमुण्डं
छिन्नं सलीलमुदितं स्रवदत्रधारम्।
वारुणीं डाकिनीं चैव पालयन्तीं स्वतेजसा
ध्यायेच्चिन्नशिरस्कां तां कोटिसूर्यसमप्रभाम्॥`,
        transliteration: `Pratyaṅkapālakalitaṁ svanijāttamuṇḍaṁ
Chinnaṁ salīlamuditaṁ sravadattradhāram।
Vāruṇīṁ ḍākinīṁ caiva pālayantīṁ svatejasā
Dhyāyeccinnaśiraskāṁ tāṁ koṭisūryasamaprabhām॥`,
        meaning: 'I meditate on the self-decapitated Goddess Chhinnamasta, who playfully holds her own severed head in her left hand, drinking the overflowing streams of life-giving nectar while nourishing her companion shaktis Dakini and Varnini with her supreme effulgence, radiating with the brilliance of ten million suns.',
        source: 'Tantrasara & Chhinnamasta Tantra',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Chhinnamasta Yantra',
      geometricalDescription: 'Central inverted triangle inscribed with the three subtle streams, enclosed by three concentric circles, an eight-petaled lotus, and a square perimeter.',
      scripturalReference: 'Shaktisamgama Tantra',
      documentedSignificance: 'Empowers the practitioner to master sensory cravings and accelerate Kundalini ascent.'
    },
    imageAssets: [
      {
        id: 'chhinnamasta-img-1',
        title: 'Authentic Traditional Iconography of Chhinnamasta',
        imageType: 'verified_iconography',
        attribution: 'Rajrappa & Tantra Sangraha Sacred Archives',
        source: 'Traditional Indian Iconography Repository',
        license: 'Educational Non-commercial',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['kali', 'bhairavi', 'dhumavati'],
    relatedPeethaIds: [],
    evidenceStatus: 'Primary textual evidence',
    region: ['Jharkhand (Rajrappa)', 'Assam', 'Bengal', 'Himachal Pradesh (Chintpurni)', 'Nepal']
  },

  {
    id: 'bhairavi',
    imagePath: '/images/devis/bhairavi.jpg',
    primaryName: 'Maa Bhairavi',
    sanskritName: 'श्री त्रिपुरभैरवी',
    odiaName: 'ମା ଭୈରବୀ',
    alternateNames: ['Tripura Bhairavi', 'Kala Bhairavi', 'Sampatprada Bhairavi', 'Kauleshi Bhairavi', 'Rudra Bhairavi'],
    nameMeaning: 'The awe-inspiring, terrifying cosmic force; derived from "Bha" (maintenance), "Ra" (dissolution), and "Va" (creation); sovereign of the cosmic fire of transformation.',
    classification: ['Das Mahavidya', 'Kalikula', 'Srikula'],
    traditions: ['Kalikula', 'Srikula', 'Kaulachara', 'Trika'],
    acharas: ['Kaulachara', 'Vamachara', 'Dakshinachara'],
    shortIntro: 'The sixth Mahavidya. Maa Bhairavi is the blazing volcanic fire of spiritual aspiration (Tapasya) and Kundalini ascension burning within the Muladhara chakra. She personifies the terrifying majesty of divine light destroying ignorance.',
    philosophicalSignificance: 'Bhairavi is the active divine fire (Tejas) that purges accumulated mental defilements. She teaches that true spiritual illumination requires enduring the purifying heat of discipline and facing the fierce reality of impermanence without retreat.',
    theologicalPosition: 'The consort and feminine counterpart of Bhairava (the fierce aspect of Shiva). In Sri Vidya, she is worshipped as Tripura Bhairavi, the youthful guardian who precedes the total realization of Lalita Tripura Sundari.',
    scripturalReferences: [
      { textName: 'Bhairavi Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Sharadatilaka Tantra', originalLanguage: 'Sanskrit', sectionOrChapter: 'Patala 12', sourceType: 'Tantra' },
      { textName: 'Vamakeshvara Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Akshamala (Japa Rosary)', 'Pustaka (Sacred Scripture / Jnana)', 'Abhaya Mudra (Fearlessness)', 'Varada Mudra (Boons)'],
      vahana: 'Shava (Corpse) or Golden Lotus throne',
      mudras: ['Abhaya', 'Varada', 'Chin Mudra'],
      crownAndOrnaments: 'Adorned with crescent moon on matted locks; garland of red flowers and skulls; wearing red silk garments',
      complexion: 'Radiant glowing red like a thousand rising suns or molten gold',
      asana: 'Seated upon a lotus rising from the navel of the recumbent Shiva',
      surroundingDeities: ['Ashta Bhairavas', 'Yoginis of the fire element'],
      symbolism: 'Her scripture and rosary signify that spiritual terror is transformed into supreme wisdom through devotion and knowledge.'
    },
    worshipTraditions: {
      kula: 'Kalikula & Srikula synthesis',
      acharas: ['Kaulachara', 'Vamachara', 'Dakshinachara'],
      regionalPractices: ['Varanasi Tripura Bhairavi temple', 'Ujjain Bhairavi shrines', 'Assam Kamakhya Bhairavi cave'],
      sampradayaNotes: 'Invoked by seekers undergoing severe tapas to burn away mental doubt, fear, and inertia.'
    },
    spiritualSignificance: {
      tattva: 'Tejas-Tattva (Cosmic Fire)',
      shakti: 'Raudri Shakti & Tapas Shakti',
      symbolism: 'The alchemical fire of Kundalini transmuting base metal into gold.',
      theologicalInterpretation: 'The unyielding demand of Truth for complete authenticity.'
    },
    mantraStotra: [
      {
        id: 'bhairavi-dhyana',
        title: 'त्रिपुरभैरवी ध्यान श्लोक (Tripura Bhairavi Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `उद्यद्भानुसहस्रकान्तिमरुणक्षौमां शिरोमालिनीं
रक्तालिप्तपयोधरां जपवटीं विद्यामभीतिं वरम्।
हस्ताब्जैर्दधतीं त्रिणेत्रविलसद्वक्त्रारविन्दश्रियं
देवीं बद्धहिमांशुमुकुटां वन्दे समन्दस्मिताम्॥`,
        transliteration: `Udyadbhānusahasrakāntimaruṇakṣaumāṁ śiromālinīṁ
Raktāliptapayodharāṁ japavaṭīṁ vidyāmabhītiṁ varam।
Hastābjairdadhatīṁ triṇetravilasadvaktrāravindaśriyaṁ
Devīṁ baddhahimāṁśumukuṭāṁ vande samandasmitām॥`,
        meaning: 'I bow unto Devi Tripura Bhairavi, radiant with the effulgence of a thousand rising suns, wearing crimson silks and a garland of skulls. With three luminous eyes, adorned with the crescent moon and smiling gently, she holds the rosary, sacred scripture, and grants boons and fearlessness with her lotus hands.',
        source: 'Sharadatilaka Tantra, Patala 12',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Tripura Bhairavi Yantra',
      geometricalDescription: 'Central inverted triangle, inscribed within an upward-pointing triangle, surrounded by eight petals, sixteen petals, and a four-gated outer citadel.',
      scripturalReference: 'Bhairavi Tantra',
      documentedSignificance: 'Bestows spiritual charisma, protection from demonic attacks, and steady control of the mind.'
    },
    imageAssets: [
      {
        id: 'bhairavi-img-1',
        title: 'Traditional Iconographic Form of Tripura Bhairavi',
        imageType: 'verified_iconography',
        attribution: 'Varanasi Tripura Bhairavi Temple Archive',
        source: 'Traditional Shakta Iconography Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['kali', 'tripura-sundari', 'chhinnamasta'],
    relatedPeethaIds: [],
    evidenceStatus: 'Primary textual evidence',
    region: ['Varanasi', 'Assam', 'Madhya Pradesh', 'Odisha']
  },

  {
    id: 'dhumavati',
    imagePath: '/images/devis/dhumavati.jpg',
    primaryName: 'Maa Dhumavati',
    sanskritName: 'श्री धूमावती',
    odiaName: 'ମା ଧୂମାବତୀ',
    alternateNames: ['Jyeshtha', 'Alakshmi-Nivarini', 'Dhumra-Varahi', 'Kalahapriya', 'Vidhava (Cosmic Widow)'],
    nameMeaning: 'She who is composed of smoke (Dhuma); the primordial crone who remains after the cosmic dissolution when all manifestation has turned to smoke.',
    classification: ['Das Mahavidya', 'Kalikula'],
    traditions: ['Kalikula', 'Atharvana Tantra', 'Vamachara'],
    acharas: ['Vamachara', 'Kaulachara'],
    shortIntro: 'The seventh Mahavidya. Maa Dhumavati is the great smoky crone, depicted as an elderly, emaciated widow riding a horseless chariot bearing a crow banner. She embodies the non-dual truth concealed within loneliness, poverty, sorrow, and ultimate renunciation.',
    philosophicalSignificance: 'Dhumavati represents the state of cosmic dissolution (Pralaya) prior to creation and after destruction. She teaches that truth is found not only in beauty and joy, but also in grief, abandonment, and the profound silence that follows great loss.',
    theologicalPosition: 'Revered as the eternal widow because she devoured Lord Shiva when overcome with cosmic hunger, symbolizing the ultimate truth that static consciousness is swallowed into primordial voidness before renewed manifestation.',
    scripturalReferences: [
      { textName: 'Dhumavati Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Shaktisamgama Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Todala Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Surpa (Winnowing basket in left hand)', 'Varada Mudra or Jnana Mudra in right hand'],
      vahana: 'Horseless chariot adorned with a crow banner (Kaka-dhvaja)',
      mudras: ['Varada', 'Abhaya'],
      crownAndOrnaments: 'Wears unadorned white robes of a widow; disheveled gray hair; missing teeth; wrinkled face with piercing compassionate eyes',
      complexion: 'Smoky ash gray (Dhumra-varna)',
      asana: 'Standing or seated upon a broken wooden chariot in a desolate plain',
      surroundingDeities: ['Crows', 'Vultures', 'Spirits of solitude'],
      symbolism: 'The winnowing basket symbolizes the discernment separating the grain of eternal truth from the useless chaff of temporal illusion.'
    },
    worshipTraditions: {
      kula: 'Kalikula',
      acharas: ['Vamachara', 'Kaulachara'],
      regionalPractices: ['Dhumavati temple in Varanasi (near Annapurna temple)', 'Pitambara Peeth at Datia, Madhya Pradesh'],
      sampradayaNotes: 'Householders worship her outside living quarters for the eradication of debt, poverty, and incurable illness; ascetics worship her for total detachment (Vairagya).'
    },
    spiritualSignificance: {
      tattva: 'Asat-Tattva and the Void (Sunya)',
      shakti: 'Vimohana & Udasina Shakti (Detached Stillness)',
      symbolism: 'Radical freedom found when all worldly dependencies have collapsed.',
      theologicalInterpretation: 'The compassionate mother who stays with the soul when all worldly friends have departed.'
    },
    mantraStotra: [
      {
        id: 'dhumavati-dhyana',
        title: 'धूमावती ध्यान श्लोक (Dhumavati Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `विवर्णा चञ्चला रुष्टा दीर्घा च मलिनाम्बरा।
विमुक्तकुन्तला रूक्षा विधवा विरलद्विजा॥
काकध्वजरथारूढा विलम्बिनिपयोधरा।
सूर्पहस्तातिरिक्ताक्षी धूतहस्ता वरप्रदा॥`,
        transliteration: `Vivarṇā cañcalā ruṣṭā dīrghā ca malināmbarā।
Vimuktakuntalā rūkṣā vidhavā viraladvijā॥
Kākadhvajarathārūḍhā vilambinipayodharā।
Sūrpahastātiriktākṣī dhūtahastā varapradā॥`,
        meaning: 'Pale of complexion, restless and stern, tall and wearing unwashed garments; with disheveled coarse hair, a widow with few teeth. Mounted on a chariot bearing a crow banner, with sagging breasts, holding a winnowing basket, her trembling hands nonetheless bestow supreme boons upon the fearless seeker.',
        source: 'Dhumavati Tantra & Shaktisamgama',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Dhumavati Yantra',
      geometricalDescription: 'Inverted triangle enclosed by six-pointed star, eight petals, and a barren square enclosure.',
      scripturalReference: 'Todala Tantra',
      documentedSignificance: 'Annihilates poverty, long-standing disputes, fear of abandonment, and false expectations.'
    },
    imageAssets: [
      {
        id: 'dhumavati-img-1',
        title: 'Authentic Traditional Iconography of Maa Dhumavati',
        imageType: 'verified_iconography',
        attribution: 'Varanasi Dhumavati Shrine & Datia Peeth Archives',
        source: 'Traditional Shakta Iconography Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['kali', 'chhinnamasta', 'bagalamukhi'],
    relatedPeethaIds: [],
    evidenceStatus: 'Primary textual evidence',
    region: ['Varanasi', 'Madhya Pradesh (Datia)', 'Himachal Pradesh']
  },

  {
    id: 'bagalamukhi',
    imagePath: '/images/devis/bagalamukhi.jpg',
    primaryName: 'Maa Bagalamukhi',
    sanskritName: 'श्री बगलामुखी',
    odiaName: 'ମା ବଗଳାମୁଖୀ',
    alternateNames: ['Pitambari', 'Valgamukhi', 'Stambhana Devi', 'Brahmastra Vidya', 'Shatru-Nashini'],
    nameMeaning: 'Derived from "Valga" (bridle or bit) corrupted into Bagala; she who bridles the tongues, speech, and movements of all adversaries; the golden paralyzer of cosmic movement.',
    classification: ['Das Mahavidya', 'Kalikula', 'Srikula'],
    traditions: ['Kalikula', 'Srikula', 'Atharvana Tantra', 'Dakshinachara', 'Vamachara'],
    acharas: ['Dakshinachara', 'Vamachara', 'Kaulachara'],
    shortIntro: 'The eighth Mahavidya. Maa Bagalamukhi is the supreme Brahmastra Vidya who halts all dualistic conflict. Golden in complexion and wrapped in yellow silk, she grasps the tongue of the demon of falsehood with her left hand while raising her club to crush his intellectual arrogance.',
    philosophicalSignificance: 'Bagalamukhi represents the power of Stambhana (divine paralysis / arrest). In inner yoga, she freezes the ceaseless wandering of mental chatter (Chitta-vritti) and the flow of the breath, thrusting consciousness into timeless meditative arrest (Kevala Kumbhaka).',
    theologicalPosition: 'Manifested when a catastrophic cosmic cyclone threatened to destroy the universe; emerged from the lake Haridra (turmeric pond) at the behest of Lord Vishnu to paralyze the storm and restore cosmic order.',
    scripturalReferences: [
      { textName: 'Bagalamukhi Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Rudrayamala Tantra', originalLanguage: 'Sanskrit', sectionOrChapter: 'Bagalamukhi Rahasya', sourceType: 'Tantra' },
      { textName: 'Shaktisamgama Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Maha-Bhagavata Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 2, // Also depicted with 4 arms in certain esoteric dhyanas
      weaponsAndAttributes: ['Gada (Golden Mace / Club)', 'Jihva-Graha (Pulling the tongue of the demon Madan)'],
      vahana: 'Golden throne surrounded by golden lotuses on the yellow sea of nectar (Sudha-Samudra)',
      mudras: ['Grasping tongue', 'Striking with mace'],
      crownAndOrnaments: 'Yellow garlands of Champaka flowers, yellow silks (Pitambara), radiant golden jewelry',
      complexion: 'Radiant golden yellow (Pita-varna)',
      asana: 'Seated upon a golden throne inside a jewel pavilion',
      surroundingDeities: ['Batuka Bhairava', 'Brahma-astras'],
      symbolism: 'Pulling the tongue signifies neutralizing the venom of slander, falsehood, and discursive cognitive agitation.'
    },
    worshipTraditions: {
      kula: 'Srikula and Kalikula crossroads',
      acharas: ['Dakshinachara', 'Vamachara'],
      regionalPractices: ['Pitambara Peeth at Datia, MP', 'Bagalamukhi temple at Nalkheda, MP', 'Bankhandi temple in Kangra, HP', 'Nepal Bagalamukhi at Patan'],
      sampradayaNotes: 'Worshippers traditionally wear yellow garments, sit on yellow asanas, use turmeric rosaries (Haldi mala), and offer yellow flowers.'
    },
    spiritualSignificance: {
      tattva: 'Stambhana Shakti & Tejas',
      shakti: 'Vak-Stambhana and Brahmastra Shakti',
      symbolism: 'The immediate stilling of internal and external hostility.',
      theologicalInterpretation: 'The pause between inhalation and exhalation where the silent witness is realized.'
    },
    mantraStotra: [
      {
        id: 'bagalamukhi-dhyana',
        title: 'बगलामुखी ध्यान श्लोक (Bagalamukhi Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `मध्ये सुधाब्धिमणिमण्डपरत्नवेद्यां
सिंहासनोपरिगतां परिपीतवर्णाम्।
पीताम्बराभरणमाल्यविभूषिताङ्गीं
देवीं भजामि धृतमुद्गरवैरिजिव्हाम्॥`,
        transliteration: `Madhye sudhābdhimaṇimaṇḍaparatnavedyāṁ
Siṁhāsano’parigatāṁ paripītavarṇām।
Pītāmbarābharaṇamālyavibhūṣitāṅgīṁ
Devīṁ bhajāmi dhṛtamudgaravairijivhām॥`,
        meaning: 'I worship Devi Bagalamukhi, seated upon a jeweled throne within a gem pavilion in the middle of the golden nectar ocean. Golden-yellow in complexion, adorned with yellow garments, yellow ornaments, and garlands of yellow flowers, she holds a mace in one hand while firmly pulling the tongue of the adversary with the other.',
        source: 'Bagalamukhi Tantra & Rudrayamala',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Bagalamukhi Yantra',
      geometricalDescription: 'Central inverted triangle inscribed with the golden Bija HLIM, an enclosing hexagon, eight-petaled lotus, and a yellow four-gated Bhupura.',
      scripturalReference: 'Rudrayamala Tantra',
      documentedSignificance: 'Stops legal harassment, reverses hostile speech, and stabilizes erratic psychic turbulence.'
    },
    imageAssets: [
      {
        id: 'bagalamukhi-img-1',
        title: 'Verified Traditional Iconography of Pitambari Bagalamukhi',
        imageType: 'verified_iconography',
        attribution: 'Datia Pitambara Peeth & Kangra Temple Archives',
        source: 'Traditional Shakta Iconography Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['dhumavati', 'matangi', 'pratyangira'],
    relatedPeethaIds: [],
    evidenceStatus: 'Primary textual evidence',
    region: ['Madhya Pradesh (Datia, Nalkheda)', 'Himachal Pradesh (Kangra)', 'Nepal (Patan)']
  },

  {
    id: 'matangi',
    imagePath: '/images/devis/matangi.jpg',
    primaryName: 'Maa Matangi',
    sanskritName: 'श्री मातङ्गी',
    odiaName: 'ମା ମାତଙ୍ଗୀ',
    alternateNames: ['Uchhishta Chandalini', 'Raja Matangi', 'Shyamala', 'Mantrini', 'Sumukhi'],
    nameMeaning: 'The daughter of Sage Matanga; the green-hued goddess of creative outcast wisdom, music, arts, and unconditioned intuitive knowledge.',
    classification: ['Das Mahavidya', 'Srikula', 'Sri Vidya'],
    traditions: ['Srikula', 'Kalikula', 'Kaulachara', 'Samayachara'],
    acharas: ['Kaulachara', 'Dakshinachara', 'Vamachara'],
    shortIntro: 'The ninth Mahavidya. Maa Matangi is the Tantric Saraswati, the supreme deity of arts, music, poetry, and intuitive speech. Known in Sri Vidya as Mantrini or Raja Shyamala, she is the prime minister of Lalita Mahatripurasundari, wielding the power of unhindered creative expression.',
    philosophicalSignificance: 'Matangi represents the spoken word (Vaikhari Vak) and the transgressive truth that divine wisdom cannot be contaminated by caste, ritual impurity, or worldly taboos. As Uchhishta Chandalini, she receives offerings of leftover food, proving that Brahman is all-pervading.',
    theologicalPosition: 'The counselor and minister of Lalita Tripura Sundari, dwelling in the Kadamba forest surrounding the jewel island of Manidvipa.',
    scripturalReferences: [
      { textName: 'Matangi Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Brahmanda Purana (Lalita Mahatmya)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Shyamala Dandakam (Kalidasa)', originalLanguage: 'Sanskrit', sourceType: 'Stotra' },
      { textName: 'Sharadatilaka Tantra', originalLanguage: 'Sanskrit', sectionOrChapter: 'Patala 13', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Veena (Lute of celestial music)', 'Chashaka (Skull-cup of wine / bliss)', 'Khadga (Sword of discernment)', 'Khetaka (Shield) or Parrot (Shuka) perched on hand'],
      vahana: 'Simhasana in Kadamba grove or aquatic lotus',
      mudras: ['Playing Veena', 'Holding parrot'],
      crownAndOrnaments: 'Adorned with crescent moon on emerald-green hair; wearing garlands of Kadamba blossoms; adorned with pearls and green gems',
      complexion: 'Deep emerald green (Shyama-varna) like a fresh blade of grass or sapphire',
      asana: 'Seated comfortably with one leg folded, playing the veena while listening to her green parrot repeat sacred verses',
      surroundingDeities: ['Gandharvas', 'Kinnaras', 'Celestial poets'],
      symbolism: 'The parrot reflects the spontaneous transmission of Guru-vak without conceptual distortion.'
    },
    worshipTraditions: {
      kula: 'Srikula and Kalikula',
      acharas: ['Kaulachara', 'Dakshinachara'],
      regionalPractices: ['Madurai Meenakshi (regarded as Raja Shyamala in South India)', 'Varanasi Matangi temple', 'Mithila Tantric centers'],
      sampradayaNotes: 'Worshipped by musicians, orators, writers, and poets for spontaneous speech and aesthetic mastery.'
    },
    spiritualSignificance: {
      tattva: 'Nada-Brahman (Cosmic Sound) & Vaikhari Vak',
      shakti: 'Vak-Siddhi & Jnana-Kriya',
      symbolism: 'The holiness of the outcast; truth transcending ritual orthodoxy.',
      theologicalInterpretation: 'The voice of nature singing through the human intellect.'
    },
    mantraStotra: [
      {
        id: 'matangi-dhyana',
        title: 'मातङ्गी ध्यान श्लोक (Matangi Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `श्यामलाङ्गीं शशिशेखरां त्रिनयनां रत्नसिंहासनस्थिताम्
वेदैः साकं वीणां वादयन्तीं शुकहस्तां वरदामभयान्विताम्।
कदम्बवनमध्यस्थां नीललोचनसुन्दरीं
ध्यायेन्मातङ्गिनीं देवीं सर्वसिद्धिप्रदायिनीम्॥`,
        transliteration: `Śyāmalāṅgīṁ śaśiśekharāṁ trinayanāṁ ratnasiṁhāsanasthitām
Vedaiḥ sākaṁ vīṇāṁ vādayantīṁ śukahastāṁ varadāmabhayānvitām।
Kadambavanamadhyasthāṁ nīlalocanasundarīṁ
Dhyāyenmātaṅginīṁ devīṁ sarvasiddhipradāyinīm॥`,
        meaning: 'I meditate on the emerald-hued Devi Matangini, adorned with the crescent moon and three eyes, seated upon a jeweled throne within the fragrant Kadamba grove. Playing the divine veena that vibrates with the wisdom of the Vedas, holding a green parrot on her hand, she bestows all spiritual accomplishments.',
        source: 'Sharadatilaka Tantra, Patala 13',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Matangi Yantra',
      geometricalDescription: 'Central inverted triangle, inscribed within two interlocking triangles (hexagram), surrounded by eight petals, sixteen petals, and four cardinal portals.',
      scripturalReference: 'Matangi Tantra',
      documentedSignificance: 'Bestows mastery over literature, arts, speech, and spontaneous poetic composition.'
    },
    imageAssets: [
      {
        id: 'matangi-img-1',
        title: 'Verified Traditional Iconography of Raja Matangi / Shyamala',
        imageType: 'verified_iconography',
        attribution: 'Madurai Meenakshi & Sri Vidya Archive',
        source: 'Traditional Indian Iconography Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['tripura-sundari', 'bagalamukhi', 'kamalatmika', 'mahasaraswati'],
    relatedPeethaIds: [],
    evidenceStatus: 'Primary textual evidence',
    region: ['Tamil Nadu (Madurai)', 'Varanasi', 'Karnataka', 'Mithila']
  },

  {
    id: 'kamalatmika',
    imagePath: '/images/devis/kamalatmika.jpg',
    primaryName: 'Maa Kamalatmika / Kamala',
    sanskritName: 'श्री कमलात्मिका',
    odiaName: 'ମା କମଳାତ୍ମିକା',
    alternateNames: ['Kamala', 'Tantric Mahalakshmi', 'Padma', 'Shri', 'Gaja Lakshmi', 'Vishnupatni'],
    nameMeaning: 'She whose soul is the lotus (Kamala-Atmika); the golden goddess of divine grace, spiritual beauty, and material abundance.',
    classification: ['Das Mahavidya', 'Srikula'],
    traditions: ['Srikula', 'Dakshinachara', 'Puranic Shakta'],
    acharas: ['Dakshinachara', 'Samayachara'],
    shortIntro: 'The tenth Mahavidya. Maa Kamalatmika is the culminating wisdom aspect of the Das Mahavidya circle. Often called the Tantric Mahalakshmi, she sits upon a full-bloomed pink lotus in the ocean of consciousness, bathed by four white royal elephants pouring golden pots of amrita.',
    philosophicalSignificance: 'Kamala represents the total integration of material and spiritual fulfillment. The ten Mahavidyas begin with Kali (the darkness of non-dual voidness) and conclude with Kamala (the luminous golden fullness of manifested reality). She proves that the world is not separate from the Divine.',
    theologicalPosition: 'The consort of Lord Vishnu in his cosmic transcendent aspect (Sadavishnu), seated on the heart of the universal lotus.',
    scripturalReferences: [
      { textName: 'Kamalatmika Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Sri Suktam (Rig Veda Parishishta)', originalLanguage: 'Sanskrit', sourceType: 'Veda/Upanishad' },
      { textName: 'Devi Bhagavata Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Vishnu Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Two pink lotuses in upper hands', 'Abhaya Mudra (Fearlessness in lower right)', 'Varada Mudra (Boons and gold coins in lower left)'],
      vahana: 'Four white celestial elephants (Gaja) holding golden water vessels in their trunks',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Dazzling ruby and diamond crown; wearing glistening golden silks and pearl necklaces',
      complexion: 'Effulgent molten gold (Kanchana-sannibha)',
      asana: 'Seated in Padmasana on a thousand-petaled lotus floating upon pristine waters',
      surroundingDeities: ['Four Dig-Gajas (Directional elephants)', 'Lakshmis of prosperity'],
      symbolism: 'The lotus blooming above stagnant water symbolizes the soul flourishing pure and radiant amidst material entanglement.'
    },
    worshipTraditions: {
      kula: 'Srikula',
      acharas: ['Dakshinachara', 'Samayachara'],
      regionalPractices: ['Deepavali night Mahalakshmi Puja across India', 'Odisha Manabasa Gurubara', 'Kolhapur Mahalakshmi shrine', 'Bengal Kojagari Lakshmi Puja'],
      sampradayaNotes: 'Universally worshipped for prosperity, freedom from poverty, ethical wealth (Dharma-Artha), and supreme spiritual contentment.'
    },
    spiritualSignificance: {
      tattva: 'Pushti (Nourishment) & Ananda (Bliss)',
      shakti: 'Poshana Shakti (Sustaining Grace)',
      symbolism: 'Fullness (Purnata) of the cosmos realized as divine love.',
      theologicalInterpretation: 'The journey from Kali (the seed in darkness) to Kamala (the full blossom in light).'
    },
    mantraStotra: [
      {
        id: 'kamalatmika-dhyana',
        title: 'कमला ध्यान श्लोक (Kamala Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `कान्त्या काञ्चनसन्निभां हिमगिरिप्रख्यैश्चतुर्भिर्गजैर्-
हस्तोत्क्षिप्तहिरण्मयामृतघटैरासिच्यमानां श्रियम्।
हस्ताब्जैर्दधतीं वराभयकरे पद्मे च कल्पद्रुमे
ध्यायेद्रत्नकिरीटपङ्कजयुगां पद्मासने संस्थिताम्॥`,
        transliteration: `Kāntyā kāñcanasannibhāṁ himagiriprakhyaiścaturbhirgajair-
Hastotkṣiptahiraṇmayāmṛtaghaṭairāsicyamānāṁ śriyam।
Hastābjairdadhatīṁ varābhayakare padme ca kalpadrumē
Dhyāyedratnakirīṭapaṅkajayugāṁ padmāsane saṁsthitām॥`,
        meaning: 'Radiant with the golden luster of refined gold, bathed by four great snow-white elephants lifting golden urns filled with divine ambrosia. Holding two lotuses in her upper lotus hands while granting boons and dispelling all fear with her lower hands, crowned with jewels and seated upon the cosmic lotus, I meditate on Devi Kamala.',
        source: 'Kamalatmika Tantra & Sharadatilaka',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Kamala Yantra',
      geometricalDescription: 'Central inverted triangle, inscribed within two interlocking triangles, eight lotus petals, sixteen petals, and a four-portal Bhupura.',
      scripturalReference: 'Kamalatmika Tantra',
      documentedSignificance: 'Bestows inexhaustible prosperity, spiritual illumination, and family auspiciousness.'
    },
    imageAssets: [
      {
        id: 'kamala-img-1',
        title: 'Verified Traditional Iconography of Kamalatmika Gaja Lakshmi',
        imageType: 'verified_iconography',
        attribution: 'Traditional Shakta Iconography Archive',
        source: 'Kolhapur & Sri Rangam Temple Repositories',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['mahalakshmi', 'tripura-sundari', 'bhuvaneshvari', 'ashta-lakshmi'],
    relatedPeethaIds: ['maha-mahalakshmi-kolhapur'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Odisha', 'Maharashtra', 'Tamil Nadu', 'Bengal']
  },

  // ==========================================
  // 2. NAVA DURGA (9)
  // ==========================================
  {
    id: 'shailaputri',
    imagePath: '/images/devis/shailaputri.jpg',
    primaryName: 'Maa Shailaputri',
    sanskritName: 'श्री शैलपुत्री',
    odiaName: 'ମା ଶୈଳପୁତ୍ରୀ',
    alternateNames: ['Parvati', 'Hemavati', 'Girija', 'Daughter of the Mountain'],
    nameMeaning: 'Daughter (Putri) of the Mountain King Himalaya (Shaila); the foundational earth energy of spiritual evolution.',
    classification: ['Nava Durga', 'Navaratri Prathama'],
    traditions: ['Puranic Shakta', 'Dakshinachara'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The first form of Nava Durga worshipped on the first day of Navaratri (Pratipada). She is the incarnation of Sati reborn as the daughter of King Himavan and Queen Mena, embodying steadfast determination and grounded tapasya.',
    philosophicalSignificance: 'Shailaputri represents the Muladhara (root chakra), the foundational rock of spiritual awakening. She grounds the seeker in physical and moral purity so that higher spiritual energies can unfold safely.',
    theologicalPosition: 'The consort of Lord Shiva in her gentle, mountain-born aspect, holding the crescent moon on her brow.',
    scripturalReferences: [
      { textName: 'Durga Saptashati (Devikavacha, Verse 3)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Shiva Purana (Rudra Samhita)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Devi Bhagavata Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Trishula (Trident in right hand)', 'Kamala (Pink Lotus in left hand)'],
      vahana: 'Vrishabha (Sacred Bull Nandi)',
      mudras: ['Holding weapons with tranquil dignity'],
      crownAndOrnaments: 'Crescent moon crowning her forehead; simple white and saffron ascetic garments',
      complexion: 'Radiant golden or pale crystalline snow white',
      asana: 'Mounted gracefully atop the sacred bull',
      surroundingDeities: ['Nandi', 'Himalayan sages'],
      symbolism: 'The trident represents past, present, and future, while the lotus signifies detachment blossoming from earthly foundation.'
    },
    worshipTraditions: {
      kula: 'Puranic Durga Sampradaya',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Navaratri Day 1 Ghatasthapana / Kalashasthapana across India', 'Varanasi Shailaputri temple at Marhia Ghat'],
      sampradayaNotes: 'Worshipped with offerings of pure ghee to bestow long life, health, and steadfast spiritual resolve.'
    },
    spiritualSignificance: {
      tattva: 'Prithvi-Tattva (Earth Element)',
      shakti: 'Mula-Shakti (Foundational Power)',
      symbolism: 'Unshakable rock of faith supporting the spiritual journey.',
      theologicalInterpretation: 'The soul re-establishing its divine lineage after cosmic dissolution.'
    },
    mantraStotra: [
      {
        id: 'shailaputri-dhyana',
        title: 'शैलपुत्री ध्यान श्लोक (Shailaputri Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `वन्दे वाञ्छितलाभाय चन्द्रार्धकृतशेखराम्।
वृषारूढां शूलधरां शैलपुत्रीं यशस्विनीम्॥`,
        transliteration: `Vande vāñchitalābhāya candrārdhakṛtaśekharām।
Vṛṣārūḍhāṁ śūladharāṁ śailaputrīṁ yaśasvinīm॥`,
        meaning: 'To fulfill all righteous aspirations, I bow before the glorious Shailaputri, adorned with the crescent moon on her brow, mounted upon the sacred bull, and holding the trident of cosmic sovereignty.',
        source: 'Durga Saptashati, Devikavacham',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'shailaputri-img-1',
        title: 'Verified Traditional Iconography of Shailaputri',
        imageType: 'verified_iconography',
        attribution: 'Traditional Nava Durga Archive',
        source: 'Varanasi Shailaputri Temple & Shakta Iconography Repositories',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['brahmacharini', 'chandraghanta', 'durga-prakriti'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Varanasi', 'Himalayan region']
  },

  {
    id: 'brahmacharini',
    imagePath: '/images/devis/brahmacharini.jpg',
    primaryName: 'Maa Brahmacharini',
    sanskritName: 'श्री ब्रह्मचारिणी',
    odiaName: 'ମା ବ୍ରହ୍ମଚାରିଣୀ',
    alternateNames: ['Tapashcharini', 'Aparna', 'Uma'],
    nameMeaning: 'She who moves and abides in Brahman (the Absolute); the practitioner of supreme spiritual penance (Tapas).',
    classification: ['Nava Durga', 'Navaratri Dvitiya'],
    traditions: ['Puranic Shakta', 'Dakshinachara'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The second form of Nava Durga worshipped on the second day of Navaratri (Dvitiya). She personifies the thousands of years of intense austerity performed by Parvati to attain Lord Shiva without consuming even a single leaf (hence named Aparna).',
    philosophicalSignificance: 'Brahmacharini governs the Svadhisthana chakra. She represents the transmutation of lower passions into pure spiritual willpower and meditative concentration.',
    theologicalPosition: 'The youthful yogini absorbed in self-realization, barefooted and walking the path of ascetic devotion.',
    scripturalReferences: [
      { textName: 'Durga Saptashati (Devikavacha)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Kalika Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Devi Bhagavata Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Akshamala (Japa Rosary of Rudraksha in right hand)', 'Kamandalu (Water pot of ascetic in left hand)'],
      vahana: 'Barefoot ascetic walking on earth',
      mudras: ['Holding rosary and water vessel'],
      crownAndOrnaments: 'Unadorned white ascetic robes; hair tied in a simple rishi knot; radiant halo of inner penance',
      complexion: 'Effulgent glowing white or golden radiance',
      asana: 'Walking steadfastly on the spiritual path',
      surroundingDeities: ['Forest deer', 'Ascetic rishis'],
      symbolism: 'The rosary signifies continuous remembrance of the Supreme, while the water pot represents purity and renunciation.'
    },
    worshipTraditions: {
      kula: 'Puranic Durga Sampradaya',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Navaratri Day 2 worship across India', 'Varanasi Brahmacharini temple at Durga Ghat'],
      sampradayaNotes: 'Worshipped with offerings of sugar and sweet fruits to grant endurance, patience, and victory over inner weaknesses.'
    },
    spiritualSignificance: {
      tattva: 'Jala-Tattva / Svadhisthana',
      shakti: 'Tapas-Shakti (Austerity and Concentration)',
      symbolism: 'Inner fortitude that never wavers in the face of spiritual hardship.',
      theologicalInterpretation: 'The soul renouncing external comfort to attain eternal union with Shiva.'
    },
    mantraStotra: [
      {
        id: 'brahmacharini-dhyana',
        title: 'ब्रह्मचारिणी ध्यान श्लोक (Brahmacharini Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `दधाना करपद्माभ्यामक्षमालाकमण्डलू।
देवी प्रसीदतु मयि ब्रह्मचारिण्यनुत्तमा॥`,
        transliteration: `Dadhānā karapadmābhyāmakṣamālākamaṇḍalū।
Devī prasīdatu mayi brahmacāriṇyanuttamā॥`,
        meaning: 'Holding in her lotus hands the sacred rosary and the ascetic water pot, may the supreme Goddess Brahmacharini look upon me with divine grace and favor.',
        source: 'Durga Saptashati, Devikavacham',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'brahmacharini-img-1',
        title: 'Verified Traditional Iconography of Brahmacharini',
        imageType: 'verified_iconography',
        attribution: 'Traditional Nava Durga Archive',
        source: 'Varanasi Durga Ghat Temple Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['shailaputri', 'chandraghanta'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Varanasi']
  },

  {
    id: 'chandraghanta',
    imagePath: '/images/devis/chandraghanta.jpg',
    primaryName: 'Maa Chandraghanta',
    sanskritName: 'श्री चन्द्रघण्टा',
    odiaName: 'ମା ଚନ୍ଦ୍ରଘଣ୍ଟା',
    alternateNames: ['Chitraghanta', 'Rana-Priya'],
    nameMeaning: 'She who bears a crescent moon shaped like a sacred bell (Ghanta) on her forehead; the bell whose resonance terrifies cosmic demons.',
    classification: ['Nava Durga', 'Navaratri Tritiya'],
    traditions: ['Puranic Shakta', 'Dakshinachara'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The third form of Nava Durga worshipped on the third day of Navaratri (Tritiya). She represents the transformed warrior aspect of Parvati assumed at her wedding with Shiva to reassure his terrifying retinue while maintaining radiant marital grace.',
    philosophicalSignificance: 'Chandraghanta governs the Manipura chakra (navel fire center). Her bell’s sonic vibration (Nada) purifies the subtle astral field, bestowing fearlessness and dynamic spiritual courage.',
    theologicalPosition: 'Ten-armed protector riding a golden tiger/lion, ready at all times for righteous cosmic battle.',
    scripturalReferences: [
      { textName: 'Durga Saptashati (Devikavacha)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Devi Bhagavata Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 10,
      weaponsAndAttributes: ['Trishula', 'Gada', 'Khadga', 'Kamandalu', 'Dhanus', 'Bana', 'Padma', 'Ghanta (Sacred Bell)', 'Abhaya Mudra', 'Varada Mudra'],
      vahana: 'Simha / Vyaghra (Ferocious Golden Tiger/Lion)',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Golden crown with the bell-shaped crescent moon; dressed in radiant golden war attire',
      complexion: 'Bright golden hue (Svarna-varna)',
      asana: 'Poised majestically on the stalking tiger',
      surroundingDeities: ['Devas invoking protection'],
      symbolism: 'The resounding bell signifies the primordial sound of OM scattering fear and negative thought-forms.'
    },
    worshipTraditions: {
      kula: 'Puranic Durga Sampradaya',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Navaratri Day 3 across India', 'Varanasi Chandraghanta temple at Chauk'],
      sampradayaNotes: 'Worshipped with offerings of milk sweets and kheer to alleviate distress and develop inner courage.'
    },
    spiritualSignificance: {
      tattva: 'Agni-Tattva / Manipura Chakra',
      shakti: 'Veerya & Dhairya Shakti (Courage and Valor)',
      symbolism: 'Sovereign protection watching over the devotee’s spiritual progress.',
      theologicalInterpretation: 'The union of serene contemplation and active battlefield readiness.'
    },
    mantraStotra: [
      {
        id: 'chandraghanta-dhyana',
        title: 'चन्द्रघण्टा ध्यान श्लोक (Chandraghanta Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `पिण्डजप्रवरारूढा चण्डकोपास्त्रकैर्युता।
प्रसादं तनुते मह्यं चन्द्रघण्टेति विश्रुता॥`,
        transliteration: `Piṇḍajapravarārūḍhā caṇḍakopāstrakairyutā।
Prasādaṁ tanute mahyaṁ candraghaṇṭeti viśrutā॥`,
        meaning: 'Mounted upon the majestic tiger, wielding formidable weapons with righteous wrath against adharma, may Devi Chandraghanta bestow her supreme grace upon me.',
        source: 'Durga Saptashati, Devikavacham',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'chandraghanta-img-1',
        title: 'Verified Traditional Iconography of Chandraghanta',
        imageType: 'verified_iconography',
        attribution: 'Traditional Nava Durga Archive',
        source: 'Varanasi Chandraghanta Temple Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['brahmacharini', 'kushmanda', 'katyayani'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Varanasi']
  },

  {
    id: 'kushmanda',
    imagePath: '/images/devis/kushmanda.jpg',
    primaryName: 'Maa Kushmanda',
    sanskritName: 'श्री कूष्माण्डा',
    odiaName: 'ମା କୂଷ୍ମାଣ୍ଡା',
    alternateNames: ['Ashtabhuja Devi', 'Adisvarupa', 'Solar Mother'],
    nameMeaning: 'Ku (little), Ushma (warmth / energy), Anda (cosmic egg); she whose subtle warm smile brought forth the manifest cosmic egg (Brahmanda) out of absolute darkness.',
    classification: ['Nava Durga', 'Navaratri Chaturthi'],
    traditions: ['Puranic Shakta', 'Dakshinachara'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The fourth form of Nava Durga worshipped on the fourth day of Navaratri (Chaturthi). When the universe did not exist and all was shrouded in void darkness, Maa Kushmanda smiled softly, producing the flash of cosmic light that gave birth to the sun, planets, and galaxies.',
    philosophicalSignificance: 'Kushmanda governs the Anahata chakra (heart center) and dwells at the core of the Sun (Surya-Mandala). She regulates the solar heat and life-giving energy that sustains all living organisms.',
    theologicalPosition: 'Eight-armed creator mother possessing the inner radiance to dwell within the blazing solar orb without being consumed.',
    scripturalReferences: [
      { textName: 'Durga Saptashati (Devikavacha)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Devi Bhagavata Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 8,
      weaponsAndAttributes: ['Kamandalu', 'Dhanus', 'Bana', 'Kamala', 'Amrita Kalasha (Nectar Jar)', 'Chakra', 'Gada', 'Siddhi-Japamala'],
      vahana: 'Simha (Lion)',
      mudras: ['Holding weapons and nectar pot with serene smile'],
      crownAndOrnaments: 'Radiant golden crown emitting solar rays; surrounded by a blinding aura of light',
      complexion: 'Blazing golden effulgence like the center of the sun',
      asana: 'Mounted upon her roaring lion',
      surroundingDeities: ['Surya Deva (the Sun god worships her as his animating soul)'],
      symbolism: 'Her gentle smile proves that universal creation is not a violent struggle, but effortless maternal joy.'
    },
    worshipTraditions: {
      kula: 'Puranic Durga Sampradaya',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Navaratri Day 4 across India', 'Varanasi Kushmanda temple at Durgakund'],
      sampradayaNotes: 'Worshipped with offerings of Malpua to cure eye diseases, alleviate darkness, and grant physical vitality.'
    },
    spiritualSignificance: {
      tattva: 'Surya-Tejas (Solar Prana) / Anahata Chakra',
      shakti: 'Srishti-Shakti (Primordial Creative Radiation)',
      symbolism: 'Cosmic optimism and radiant light overcoming ancient darkness.',
      theologicalInterpretation: 'The soul discovering the eternal sun shining within its own spiritual heart.'
    },
    mantraStotra: [
      {
        id: 'kushmanda-dhyana',
        title: 'कूष्माण्डा ध्यान श्लोक (Kushmanda Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `सुरासम्पूर्णकलशं रुधिराप्लुतमेव च।
दधाना हस्तपद्माभ्यां कूष्माण्डा शुभदास्तु मे॥`,
        transliteration: `Surāsaṁpūrṇakalaśaṁ rudhirāplutameva ca।
Dadhānā hastapadmābhyāṁ kūṣmāṇḍā śubhadāstu me॥`,
        meaning: 'Holding in her lotus hands the jar brimming with life-giving nectar, may Devi Kushmanda bestow all auspiciousness and vitality upon me.',
        source: 'Durga Saptashati, Devikavacham',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'kushmanda-img-1',
        title: 'Verified Traditional Iconography of Kushmanda',
        imageType: 'verified_iconography',
        attribution: 'Traditional Nava Durga Archive',
        source: 'Varanasi Durgakund Temple Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['chandraghanta', 'skandamata'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Varanasi']
  },

  {
    id: 'skandamata',
    imagePath: '/images/devis/skandamata.jpg',
    primaryName: 'Maa Skandamata',
    sanskritName: 'श्री स्कन्दमाता',
    odiaName: 'ମା ସ୍କନ୍ଦମାତା',
    alternateNames: ['Mother of Kartikeya / Murugan', 'Padmasana Devi'],
    nameMeaning: 'Mother (Mata) of Skanda (Lord Kartikeya / Murugan, the commander-in-chief of the celestial devas).',
    classification: ['Nava Durga', 'Navaratri Panchami'],
    traditions: ['Puranic Shakta', 'Dakshinachara'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The fifth form of Nava Durga worshipped on the fifth day of Navaratri (Panchami). Depicted holding the infant child-god Skanda in her maternal lap, she embodies the boundless protective affection of the Divine Mother nurturing her spiritual child.',
    philosophicalSignificance: 'Skandamata governs the Vishuddha chakra (throat center). She transforms intellectual knowledge into expressive spiritual clarity and grants maternal protection against all external perils.',
    theologicalPosition: 'Four-armed mother seated on a lotus (Padmasana) or riding a lion, with infant Kartikeya resting securely in her arms.',
    scripturalReferences: [
      { textName: 'Durga Saptashati (Devikavacha)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Devi Bhagavata Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Holds infant Skanda with upper right hand', 'Pink lotus in upper left hand', 'Varada Mudra in lower right hand', 'Pink lotus in lower left hand'],
      vahana: 'Simha (Lion) while seated on Padma',
      mudras: ['Varada', 'Holding infant'],
      crownAndOrnaments: 'Gentle smiling motherly countenance; adorned with pearls and pink lotus garlands',
      complexion: 'Radiant fair white or pale golden luster (Shubhravarna)',
      asana: 'Seated upon a broad lotus (Padmasana)',
      surroundingDeities: ['Child Kartikeya', 'Celestial devas rejoicing'],
      symbolism: 'Worshipping Skandamata automatically invokes the protection of both the Mother and her warrior son.'
    },
    worshipTraditions: {
      kula: 'Puranic Durga Sampradaya',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Navaratri Day 5 across India', 'Varanasi Skandamata temple at Jaitpura'],
      sampradayaNotes: 'Worshipped with offerings of bananas and fruits for fertility, child welfare, and peaceful domestic life.'
    },
    spiritualSignificance: {
      tattva: 'Akasha-Tattva / Vishuddha Chakra',
      shakti: 'Vatsalya-Shakti (Motherly Nurturing Grace)',
      symbolism: 'Complete spiritual surrender in the protective arms of the Mother.',
      theologicalInterpretation: 'The soul resting as an innocent child in the lap of infinite consciousness.'
    },
    mantraStotra: [
      {
        id: 'skandamata-dhyana',
        title: 'स्कन्दमाता ध्यान श्लोक (Skandamata Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `सिंहासनगता नित्यं पद्माश्रितकरद्वया।
शुभदास्तु सदा देवी स्कन्दमाता यशस्विनी॥`,
        transliteration: `Siṁhāsanagatā nityaṁ padmāśritakaradvayā।
Śubhadāstu sadā devī skandamātā yaśasvinī॥`,
        meaning: 'Eternally seated upon her lion throne, holding pink lotuses in her two hands, may the glorious Skandamata ever bestow auspiciousness and peace upon us.',
        source: 'Durga Saptashati, Devikavacham',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'skandamata-img-1',
        title: 'Verified Traditional Iconography of Skandamata',
        imageType: 'verified_iconography',
        attribution: 'Traditional Nava Durga Archive',
        source: 'Varanasi Jaitpura Temple Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['kushmanda', 'katyayani'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Varanasi', 'Tamil Nadu (associated with Murugan)']
  },

  {
    id: 'katyayani',
    imagePath: '/images/devis/katyayani.jpg',
    primaryName: 'Maa Katyayani',
    sanskritName: 'श्री कात्यायनी',
    odiaName: 'ମା କାତ୍ୟାୟନୀ',
    alternateNames: ['Mahishasuramardini', 'Daughter of Sage Katyayana', 'Yogamaya', 'Chandi'],
    nameMeaning: 'Daughter of Sage Katyayana; manifested from the combined fiery anger and energy of all devas to annihilate the demon Mahishasura.',
    classification: ['Nava Durga', 'Navaratri Shashthi', 'Chandi Shaktis'],
    traditions: ['Puranic Shakta', 'Dakshinachara', 'Vaishnava (Gopi Vrata)'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The sixth form of Nava Durga worshipped on the sixth day of Navaratri (Shashthi). She is the warrior maiden born from the concentrated tejas (radiance) of Brahma, Vishnu, and Shiva gathered at the hermitage of Sage Katyayana. She slew Mahishasura on Mount Vindhya.',
    philosophicalSignificance: 'Katyayani governs the Ajna chakra (third eye). She represents the concentrated spiritual willpower and discernment capable of destroying the subtle pride and stubborn hypocrisy of the ego.',
    theologicalPosition: 'The supreme warrior goddess armed with all divine weapons; in the Srimad Bhagavatam, the Gopis performed Katyayani Vrata on the Yamuna bank to attain Krishna as their lord.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Markandeya Purana)', originalLanguage: 'Sanskrit', sectionOrChapter: 'Chapters 2-4', sourceType: 'Purana' },
      { textName: 'Srimad Bhagavatam (10th Canto, Chapter 22)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Kalika Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4, // Also depicted with 10 or 18 arms as Mahishasura Mardini
      weaponsAndAttributes: ['Chandrahasa (Blazing sword in upper left)', 'Kamala (Lotus in lower left)', 'Abhaya Mudra (in upper right)', 'Varada Mudra (in lower right)'],
      vahana: 'Simha (Fierce Lion)',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Golden crown, dressed in crimson silks and garlands of red flowers, emitting dazzling light',
      complexion: 'Luminous golden-red (Svarna-Gauri)',
      asana: 'Mounted boldly upon the pacing lion',
      surroundingDeities: ['Sage Katyayana', 'Devas in admiration'],
      symbolism: 'The sword Chandrahasa cuts through intellectual dualism and clears the path to the third eye.'
    },
    worshipTraditions: {
      kula: 'Puranic Durga Sampradaya',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Navaratri Day 6 across India', 'Vrindavan Katyayani temple', 'Varanasi Katyayani temple at Sankatha Ghat', 'Vindhyachal temple'],
      sampradayaNotes: 'Unmarried seekers traditionally worship her with honey offerings to remove marital obstacles and attain righteous life partners.'
    },
    spiritualSignificance: {
      tattva: 'Ajna Chakra / Intuitive Willpower',
      shakti: 'Tejo-Rupa Samanvita (Concentrated Cosmic Radiance)',
      symbolism: 'Righteous cosmic anger defeating tyranny.',
      theologicalInterpretation: 'The integration of all cosmic powers into one focused spiritual resolve.'
    },
    mantraStotra: [
      {
        id: 'katyayani-dhyana',
        title: 'कात्यायनी ध्यान श्लोक (Katyayani Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `चन्द्रहासोज्ज्वलकरा शार्दूलवरवाहना।
कात्यायनी शुभं दद्याद्देवी दानवघातिनी॥`,
        transliteration: `Candrahāsojjvalakarā śārdūlavaravāhanā।
Kātyāyanī śubhaṁ dadyāddevī dānavaghātinī॥`,
        meaning: 'Her hand radiant with the flashing Chandrahasa sword, mounted upon the noble lion, may Devi Katyayani, slayer of the demon of arrogance, grant us auspiciousness and peace.',
        source: 'Durga Saptashati, Devikavacham',
        isPublicDevotional: true
      },
      {
        id: 'gopi-katyayani-mantra',
        title: 'कात्यायनी महामाये मन्त्र (Srimad Bhagavatam Gopi Prayer)',
        type: 'Mantra',
        sanskrit: `कात्यायनि महामाये महायोगिन्यधीश्वरि।
नन्दगोपसुतं देवि पतिं मे कुरु ते नमः॥`,
        transliteration: `Kātyāyani mahāmāye mahāyoginyadhīśvari।
Nandagopasutaṁ devi patiṁ me kuru te namaḥ॥`,
        meaning: 'O Katyayani! O Great Cosmic Illusion (Mahamaya)! O Supreme Mistress of all Yogic Mysteries! We bow unto you; please grant the son of Nanda as our eternal divine Lord.',
        source: 'Srimad Bhagavatam, Canto 10, Chapter 22',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'katyayani-img-1',
        title: 'Verified Traditional Iconography of Katyayani',
        imageType: 'verified_iconography',
        attribution: 'Traditional Nava Durga Archive',
        source: 'Vrindavan Katyayani Peeth & Varanasi Archives',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['skandamata', 'kalaratri', 'durga-prakriti'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Vrindavan', 'Vindhyachal', 'Varanasi']
  },

  {
    id: 'kalaratri',
    imagePath: '/images/devis/kalaratri.jpg',
    primaryName: 'Maa Kalaratri',
    sanskritName: 'श्री कालरात्रिः',
    odiaName: 'ମା କାଳରାତ୍ରି',
    alternateNames: ['Shubhankari', 'Raudri', 'Night of Cosmic Dissolution', 'Annihilator of Ignorance'],
    nameMeaning: 'Kala (Time / Blackness) + Ratri (Night); the dark night that dissolves cosmic time; the terrifying night of universal dissolution.',
    classification: ['Nava Durga', 'Navaratri Saptami', 'Kalikula'],
    traditions: ['Puranic Shakta', 'Kalikula', 'Dakshinachara', 'Vamachara'],
    acharas: ['Dakshinachara', 'Vamachara'],
    shortIntro: 'The seventh form of Nava Durga worshipped on the seventh day of Navaratri (Saptami / Maha Saptami). The fiercest among the Nava Durgas, she manifested to slay the demons Shumbha, Nishumbha, and Raktabija. Though terrifying in countenance, she is eternally Shubhankari—the benevolent bestower of auspiciousness upon her children.',
    philosophicalSignificance: 'Kalaratri governs the Sahasrara chakra. She represents the absolute fearlessness that awakens when the seeker ceases identifying with the transient mortal body and embraces the eternal truth of consciousness.',
    theologicalPosition: 'Dark as midnight, with wild disheveled hair, breathing flames, riding a donkey, and holding the iron cleaver.',
    scripturalReferences: [
      { textName: 'Durga Saptashati (Devikavacha & Chapter 8)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Devi Bhagavata Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Vajra / Karavalika (Iron Cleaver in upper left)', 'Loha-Kanta (Curved thorn hook / noose in lower left)', 'Abhaya Mudra (in upper right)', 'Varada Mudra (in lower right)'],
      vahana: 'Gardabha (Donkey / Ass)',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Wild flying hair; necklace glowing with the brilliance of lightning; three round glowing eyes flashing fire',
      complexion: 'Pitch black like midnight or cosmic darkness (Kala-ratri)',
      asana: 'Mounted on a charging donkey',
      surroundingDeities: ['Shivadutis', 'Yoginis'],
      symbolism: 'Her terrifying form is solely for the destruction of darkness; her right hands always reassure the devotee with "Fear Not".'
    },
    worshipTraditions: {
      kula: 'Puranic Durga and Kalikula',
      acharas: ['Dakshinachara', 'Vamachara'],
      regionalPractices: ['Navaratri Day 7 Maha Saptami across India', 'Bengal Bel Baran and Navapatrika rites', 'Varanasi Kalaratri temple at Kalika Gali'],
      sampradayaNotes: 'Worshipped with offerings of jaggery (Guda) on Saptami night; known for banishing nightmares, black magic, and irrational fears.'
    },
    spiritualSignificance: {
      tattva: 'Kala-Tattva / Beyond Time',
      shakti: 'Samhara & Raksha Shakti',
      symbolism: 'The dissolution of all mortal terrors in the compassionate dark night of the Mother.',
      theologicalInterpretation: 'The veil of time being torn aside to reveal eternity.'
    },
    mantraStotra: [
      {
        id: 'kalaratri-dhyana',
        title: 'कालरात्रि ध्यान श्लोक (Kalaratri Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `एकवेणी जपाकर्णपूरा नग्ना खरास्थिता।
लम्बोष्ठी कर्णिकाकर्णी तैलाभ्यक्तशरीरिणी॥
वामपादोल्लसल्लोहलताकण्टकभूषणा।
वर्धन्मूर्धध्वजा कृष्णा कालरात्रिर्भयङ्करी॥`,
        transliteration: `Ekaveṇī japākarṇapūrā nagnā kharāsthitā।
Lamboṣṭhī karṇikākarṇī tailābhyaktaśarīriṇī॥
Vāmapādollasallohalatākaṇṭakabhūṣaṇā।
Vardhanmūrdhadhvajā kṛṣṇā kālarātrirbhayāṅkarī॥`,
        meaning: 'Her dark hair flowing in a single braid, adorned with red hibiscus at her ear, mounted upon a donkey. Terrible with luminous flashing eyes and limbs anointed with oil, holding iron weapons, may the fearsome yet benevolent Devi Kalaratri protect her devotees.',
        source: 'Durga Saptashati, Devikavacham',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'kalaratri-img-1',
        title: 'Verified Traditional Iconography of Kalaratri',
        imageType: 'verified_iconography',
        attribution: 'Traditional Nava Durga Archive',
        source: 'Varanasi Kalika Gali Temple Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['kali', 'katyayani', 'mahagauri'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Varanasi', 'Bengal', 'Odisha']
  },

  {
    id: 'mahagauri',
    imagePath: '/images/devis/mahagauri.jpg',
    primaryName: 'Maa Mahagauri',
    sanskritName: 'श्री महागौरी',
    odiaName: 'ମା ମହାଗୌରୀ',
    alternateNames: ['Gauri', 'Shvetambara Devi', 'Annapurna', 'Maha-Saraswati Aspect'],
    nameMeaning: 'The immensely fair, brilliant, and pure one (Maha-Gauri); she whose complexion shines like pristine white snow, pearls, or jasmine.',
    classification: ['Nava Durga', 'Navaratri Ashtami'],
    traditions: ['Puranic Shakta', 'Dakshinachara'],
    acharas: ['Dakshinachara'],
    shortIntro: 'The eighth form of Nava Durga worshipped on the eighth day of Navaratri (Maha Ashtami). After centuries of ascetic austerity, Parvati’s skin had turned dark with dust and sun. When Lord Shiva, pleased with her penance, washed her with the sacred waters of the holy Ganga, her body regained a dazzling, flawless fair radiance like lightning.',
    philosophicalSignificance: 'Mahagauri represents the absolute purification of the mind. All past accumulated sins, guilt, and impurities are washed away in her presence, leaving consciousness pure, calm, and immaculate.',
    theologicalPosition: 'Four-armed gentle mother riding a white bull, dressed in pristine white garments and radiating unshakeable peace.',
    scripturalReferences: [
      { textName: 'Durga Saptashati (Devikavacha)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Devi Bhagavata Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Skanda Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Trishula (in lower right hand)', 'Abhaya Mudra (in upper right hand)', 'Damaru (in upper left hand)', 'Varada Mudra (in lower left hand)'],
      vahana: 'Vrishabha (Sacred White Bull)',
      mudras: ['Abhaya', 'Varada'],
      crownAndOrnaments: 'Dressed entirely in pristine white garments (Shvetambara-dhara); adorned with white pearls and jasmine garlands',
      complexion: 'Radiant luminous white like a conch, jasmine, or the moon (Kunda-Indu-Dhavala)',
      asana: 'Mounted peacefully upon the sacred bull',
      surroundingDeities: ['Lord Shiva', 'Devas performing Sandhi Puja'],
      symbolism: 'Her white garments signify the complete restoration of Sattva (purity and harmony) in the cosmos.'
    },
    worshipTraditions: {
      kula: 'Puranic Durga Sampradaya',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Maha Ashtami Sandhi Puja across India', 'Kanya Pujan (worship of nine young girls as living devis)', 'Varanasi Mahagauri temple at Vishvanatha Gali'],
      sampradayaNotes: 'Worshipped with offerings of coconuts and kheer; grants peace of mind, marital harmony, and spiritual purity.'
    },
    spiritualSignificance: {
      tattva: 'Shuddha-Sattva (Immaculate Purity)',
      shakti: 'Shanti & Pavitrata Shakti',
      symbolism: 'The dawn of immaculate peace after the stormy battle against ego.',
      theologicalInterpretation: 'The soul washed in the Ganga of divine grace, shining in its pristine nature.'
    },
    mantraStotra: [
      {
        id: 'mahagauri-dhyana',
        title: 'महागौरी ध्यान श्लोक (Mahagauri Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `श्वेते वृषे समारूढा श्वेताम्बरधरा शुचिः।
महागौरी शुभं दद्यान्महादेवप्रमोददा॥`,
        transliteration: `Śvete vṛṣe samārūḍhā śvetāmbaradharā śuciḥ।
Mahāgaurī śubhaṁ dadyānmahādevapramodadā॥`,
        meaning: 'Mounted upon the white bull, clothed in pure white garments, immaculate and tranquil, may Devi Mahagauri, the eternal joy of Lord Shiva, bestow her supreme auspiciousness upon us.',
        source: 'Durga Saptashati, Devikavacham',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'mahagauri-img-1',
        title: 'Verified Traditional Iconography of Mahagauri',
        imageType: 'verified_iconography',
        attribution: 'Traditional Nava Durga Archive',
        source: 'Varanasi Annapurna & Vishvanath Temple Repositories',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['kalaratri', 'siddhidatri', 'shailaputri'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Varanasi']
  },

  {
    id: 'siddhidatri',
    imagePath: '/images/devis/siddhidatri.jpg',
    primaryName: 'Maa Siddhidatri',
    sanskritName: 'श्री सिद्धिदात्री',
    odiaName: 'ମା ସିଦ୍ଧିଦାତ୍ରୀ',
    alternateNames: ['Bestower of all Siddhis', 'Ardhanarishvari Shakti'],
    nameMeaning: 'Siddhi (Supernatural accomplishments and spiritual liberation) + Datri (Bestower); she who bestows all eight classical Siddhis and transcendent enlightenment.',
    classification: ['Nava Durga', 'Navaratri Navami'],
    traditions: ['Puranic Shakta', 'Dakshinachara', 'Samayachara'],
    acharas: ['Dakshinachara', 'Samayachara'],
    shortIntro: 'The ninth and culminating form of Nava Durga worshipped on the ninth day of Navaratri (Maha Navami). She is the supreme dispenser of all accomplishments (Anima, Mahima, Garima, Laghima, Prapti, Prakamya, Ishitva, Vashitva). The Shiva Purana declares that Lord Shiva himself worshipped her to attain all cosmic siddhis, whereupon half of his body became the Goddess, manifesting as Ardhanarishvara.',
    philosophicalSignificance: 'Siddhidatri represents the complete realization of non-dual consciousness where the seeker recognizes that all divine powers and virtues are inherently their true nature.',
    theologicalPosition: 'Four-armed serene mother seated on a lotus or riding a lion, surrounded by Siddhas, Gandharvas, Yakshas, and Devas seeking her grace.',
    scripturalReferences: [
      { textName: 'Durga Saptashati (Devikavacha, Verse 5)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Shiva Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Devi Bhagavata Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Chakra (in upper right hand)', 'Gada (in lower right hand)', 'Shankha (in upper left hand)', 'Padma (in lower left hand)'],
      vahana: 'Simha (Lion) or Seated upon Padma (Lotus)',
      mudras: ['Holding the four cosmic emblems of sustenance'],
      crownAndOrnaments: 'Jeweled crown with radiant aura; peaceful motherly expression full of boundless fulfillment',
      complexion: 'Radiant golden or pale crimson effulgence',
      asana: 'Seated upon a thousand-petaled lotus',
      surroundingDeities: ['Brahma, Vishnu, Rudra, and Siddhas in reverence'],
      symbolism: 'Her four attributes reflect the complete harmony of creation, sustenance, divine resonance, and spiritual blossoming.'
    },
    worshipTraditions: {
      kula: 'Puranic Durga Sampradaya',
      acharas: ['Dakshinachara', 'Samayachara'],
      regionalPractices: ['Maha Navami culminating pujas across India', 'Ayudha Puja (worship of instruments and books)', 'Varanasi Siddhidatri temple at Golaghat'],
      sampradayaNotes: 'Worshipped with offerings of sesame seeds (Tila) and halwa-puri; concludes the sacred Navaratri vrata.'
    },
    spiritualSignificance: {
      tattva: 'Purnata (Fullness / Supreme Perfection)',
      shakti: 'Sarva-Siddhi-Pradayini Shakti',
      symbolism: 'The final attainment of spiritual sovereignty and freedom from all limitations.',
      theologicalInterpretation: 'The recognition of the indivisible identity of the worshipper and Adi Parashakti.'
    },
    mantraStotra: [
      {
        id: 'siddhidatri-dhyana',
        title: 'सिद्धिदात्री ध्यान श्लोक (Siddhidatri Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `सिद्धगन्धर्वयक्षाद्यैरसुरैरमरैरपि।
सेव्यमाना सदा भूयात् सिद्धिदा सिद्धिदायिनी॥`,
        transliteration: `Siddhagandharvayakṣādyairasurairamarairapi।
Sevyamānā sadā bhūyāt siddhidā siddhidāyinī॥`,
        meaning: 'Continuously served and worshipped by Siddhas, Gandharvas, Yakshas, Asuras, and Devas alike, may the supreme Devi Siddhidatri bestow all spiritual perfections upon us.',
        source: 'Durga Saptashati, Devikavacham',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'siddhidatri-img-1',
        title: 'Verified Traditional Iconography of Siddhidatri',
        imageType: 'verified_iconography',
        attribution: 'Traditional Nava Durga Archive',
        source: 'Varanasi Golaghat Siddhidatri Temple Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['mahagauri', 'durga-prakriti', 'tripura-sundari'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Varanasi']
  },

  // ==========================================
  // 3. TRIDEVI & CHANDI SHAKTIS (3)
  // ==========================================
  {
    id: 'mahasaraswati',
    imagePath: '/images/devis/mahasaraswati.jpg',
    primaryName: 'Maa Mahasaraswati',
    sanskritName: 'श्री महासरस्वती',
    odiaName: 'ମା ମହାସରସ୍ୱତୀ',
    alternateNames: ['Vakdevi', 'Sharada', 'Bharati', 'Vagishvari', 'Brahmi'],
    nameMeaning: 'The supreme flowing stream of transcendent wisdom, speech, illumination, and discernment (Sara = Essence, Sva = Self).',
    classification: ['Tridevi', 'Navakshari and Chandi Shaktis'],
    traditions: ['Puranic Shakta', 'Vedic', 'Dakshinachara'],
    acharas: ['Dakshinachara', 'Samayachara'],
    shortIntro: 'The third Charitra presiding deity of the Devi Mahatmya and the wisdom aspect of the Tridevi. Clothed in pure white moonlight, holding the Veena and sacred books, she dispels the darkness of ignorance and grants spontaneous realization.',
    philosophicalSignificance: 'Mahasaraswati represents Sattva Guna and the creative vibration of sound (Nada). She is the power through which the unmanifest consciousness articulates itself into knowable reality.',
    theologicalPosition: 'In Devi Mahatmya, she manifested from the body of Gauri to destroy the demons Shumbha, Nishumbha, and their demonic cohorts.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Uttama Charitra, Chapters 5-13)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Rig Veda (Devi Suktam, 10.125)', originalLanguage: 'Sanskrit', sourceType: 'Veda/Upanishad' },
      { textName: 'Saraswati Rahasya Upanishad', originalLanguage: 'Sanskrit', sourceType: 'Veda/Upanishad' }
    ],
    iconography: {
      arms: 8, // In Devi Mahatmya; 4 arms in classical devotional iconography
      weaponsAndAttributes: ['Veena (Lute)', 'Akshamala (Rosary)', 'Pustaka (Book)', 'Kamandalu', 'Ghanta', 'Shula', 'Chakra', 'Shankha'],
      vahana: 'Hamsa (Swan) symbolizing discerning wisdom',
      mudras: ['Playing Veena', 'Jnana Mudra'],
      crownAndOrnaments: 'Crescent moon in hair, garland of pearls, pristine white garments',
      complexion: 'Radiant moonlit white (Kunda-Mrinala-Dhavala)',
      asana: 'Seated upon a white lotus',
      surroundingDeities: ['Brahma', 'Sages and poets'],
      symbolism: 'The swan separates milk from water, signifying spiritual discernment (Viveka).'
    },
    worshipTraditions: {
      kula: 'Vedic and Puranic Shakta',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Vasant Panchami Saraswati Puja across India', 'Sharada Peeth traditions', 'Ayudha/Vidyarambha Puja in South India'],
      sampradayaNotes: 'Worshipped by scholars, students, and seekers of truth for memory, wisdom, and speech purity.'
    },
    spiritualSignificance: {
      tattva: 'Sattva Guna and Jnana Shakti',
      shakti: 'Vak-Shakti & Bodha-Shakti',
      symbolism: 'Pure unblemished intellect illuminating the path to truth.',
      theologicalInterpretation: 'The self-luminous knowledge that dissolves all dualistic error.'
    },
    mantraStotra: [
      {
        id: 'saraswati-vandana',
        title: 'सरस्वती वन्दना (Saraswati Vandana Sloka)',
        type: 'Stotra',
        sanskrit: `या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता
या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना।
या ब्रह्माच्युतशङ्करप्रभृतिभिर्देवैः सदा वन्दिता
सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥`,
        transliteration: `Yā kundendutuṣārahāradhavalā yā śubhravastrāvṛtā
Yā vīṇāvaradaṇḍamaṇḍitakarā yā śvetapadmāsanā।
Yā brahmācyutaśaṅkaraprabhṛtibhirdevaiḥ sadā vanditā
Sā māṁ pātu sarasvatī bhagavatī niḥśeṣajāḍyāpahā॥`,
        meaning: 'May Goddess Saraswati, who is fair like the jasmine flower, the moon, and snow garlands; who is adorned in pure white garments; whose hands grace the divine Veena; who is seated upon the white lotus; and who is ever adored by Brahma, Vishnu, and Shankara, protect me and entirely remove all my mental sluggishness.',
        source: 'Traditional Sanskrit Vandana',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'saraswati-img-1',
        title: 'Verified Traditional Iconography of Mahasaraswati',
        imageType: 'verified_iconography',
        attribution: 'Traditional Shakta Iconography Archive',
        source: 'Sringeri Sharada Peeth & Traditional Indian Archives',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['mahalakshmi', 'mahakali', 'matangi', 'savitri-prakriti'],
    relatedPeethaIds: ['maha-sharada-kashmir'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Kashmir', 'South India', 'Bengal', 'Odisha']
  },

  {
    id: 'mahalakshmi',
    imagePath: '/images/devis/mahalakshmi.jpg',
    primaryName: 'Maa Mahalakshmi',
    sanskritName: 'श्री महालक्ष्मी',
    odiaName: 'ମା ମହାଲକ୍ଷ୍ମୀ',
    alternateNames: ['Ashtadashabhuja Mahalakshmi', 'Padma', 'Kolhapur Ambabai', 'Chandi Mahalakshmi'],
    nameMeaning: 'The great sovereign power of auspiciousness, cosmic sustenance, ethical wealth, and spiritual illumination (Lakshya = Aim / Goal).',
    classification: ['Tridevi', 'Navakshari and Chandi Shaktis'],
    traditions: ['Puranic Shakta', 'Dakshinachara', 'Samayachara'],
    acharas: ['Dakshinachara', 'Samayachara'],
    shortIntro: 'The central and supreme deity of the Madhyama Charitra of the Devi Mahatmya. Emanated from the collective radiance of all the gods, eighteen-armed Mahalakshmi is the glorious slayer of Mahishasura, combining beauty, sovereign grace, and invincible warrior strength.',
    philosophicalSignificance: 'Mahalakshmi represents Rajas Guna transformed into divine action, balancing creation (Saraswati) and dissolution (Kali). She provides the nourishing foundation without which neither worldly life nor spiritual sadhana can be sustained.',
    theologicalPosition: 'In Shakta theology, Mahalakshmi is not merely Vishnu’s consort, but the primordial supreme Mulaprakriti who emanated the Tridevas and Tridevis.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Madhyama Charitra, Chapters 2-4)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Sri Suktam (Rig Veda Parishishta)', originalLanguage: 'Sanskrit', sourceType: 'Veda/Upanishad' },
      { textName: 'Lakshmi Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 18,
      weaponsAndAttributes: ['Akshamala', 'Kamala', 'Bana', 'Khadga', 'Vajra', 'Gada', 'Chakra', 'Trishula', 'Parashu', 'Shankha', 'Ghanta', 'Pasha', 'Shakti', 'Danda', 'Khetaka', 'Dhanus', 'Panapatra', 'Kamandalu'],
      vahana: 'Simha (Ferocious Lion)',
      mudras: ['Holding all celestial weapons bestowed by the devas'],
      crownAndOrnaments: 'Crowned with golden jewels, ruby necklace, garland of red lotuses',
      complexion: 'Effulgent coral pink or molten gold (Pravala-varna)',
      asana: 'Standing victorious upon the slain buffalo demon Mahishasura',
      surroundingDeities: ['Devas praising her victory'],
      symbolism: 'Her eighteen arms encompass the complete spectrum of cosmic action and spiritual defense.'
    },
    worshipTraditions: {
      kula: 'Puranic Shakta and Pancharatra',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Kolhapur Ambabai temple', 'Navaratri celebrations across India', 'Bengal Kojagari Purnima', 'Odisha Manabasa Gurubara'],
      sampradayaNotes: 'Worshipped with recitation of Durga Saptashati and Sri Sukta.'
    },
    spiritualSignificance: {
      tattva: 'Rajas Guna and Kriya Shakti',
      shakti: 'Palana & Samrakshana Shakti',
      symbolism: 'Cosmic balance, noble prosperity, and victorious righteousness.',
      theologicalInterpretation: 'The supreme kinetic energy maintaining universal harmony.'
    },
    mantraStotra: [
      {
        id: 'mahalakshmi-dhyana',
        title: 'महालक्ष्मी ध्यान श्लोक (Devi Mahatmya Madhyama Charitra)',
        type: 'Dhyana',
        sanskrit: `अक्षमालापरशुं गदेषुकुलिशं पद्मं धनुष्कुण्डिकां
दण्डं शक्तिमसिं च चर्म जलजं घण्टां सुराभाजनम्।
शूलं पाशसुदर्शने च दधतीं हस्तैः प्रवालप्रभां
सेवे सैरिभमर्दिनीमिह महालक्ष्मीं सरोजस्थिताम्॥`,
        transliteration: `Akṣamālāparaśuṁ gadeṣukuliśaṁ padmaṁ dhanuṣkuṇḍikāṁ
Daṇḍaṁ śaktimasiṁ ca carma jalajaṁ ghaṇṭāṁ surābhājanam।
Śūlaṁ pāśasudarśane ca dadhatīṁ hastaiḥ pravālaprabhāṁ
Seve sairibhamardinīmiha mahālakṣmīṁ sarojasthitām॥`,
        meaning: 'I worship Mahalakshmi, the slayer of Mahishasura, seated on the lotus with the radiance of coral. With eighteen lotus arms, she wields the rosary, axe, mace, arrow, thunderbolt, lotus, bow, water-pitcher, staff, lance, sword, shield, conch, bell, nectar cup, trident, noose, and the blazing Sudarshana discus.',
        source: 'Devi Mahatmya, Chapter 2 Dhyanam',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'mahalakshmi-img-1',
        title: 'Verified Traditional Iconography of Ashtadashabhuja Mahalakshmi',
        imageType: 'verified_iconography',
        attribution: 'Traditional Shakta Iconography Archive',
        source: 'Kolhapur Mahalakshmi Shrine Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['mahasaraswati', 'mahakali', 'kamalatmika', 'katyayani'],
    relatedPeethaIds: ['maha-mahalakshmi-kolhapur'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Maharashtra', 'Odisha', 'Gujarat', 'Bengal']
  },

  {
    id: 'mahakali',
    imagePath: '/images/devis/mahakali.jpg',
    primaryName: 'Maa Mahakali',
    sanskritName: 'श्री महाकाली (चण्डी)',
    odiaName: 'ମା ମହାକାଳୀ',
    alternateNames: ['Dashavaktra Mahakali', 'Prathama Charitra Devi', 'Yoganidra'],
    nameMeaning: 'The supreme ten-faced, ten-armed cosmic power of deep cosmic sleep (Yoganidra) and temporal dissolution.',
    classification: ['Tridevi', 'Navakshari and Chandi Shaktis'],
    traditions: ['Puranic Shakta', 'Kalikula'],
    acharas: ['Dakshinachara', 'Vamachara'],
    shortIntro: 'The presiding deity of the Prathama Charitra of Devi Mahatmya. When the demons Madhu and Kaitabha emerged from the earwax of sleeping Vishnu to destroy Brahma, Brahma sang the supreme Ratri Sukta hymn to awaken Mahakali (Yoganidra) from the eyes and limbs of Vishnu.',
    philosophicalSignificance: 'Mahakali represents Tamas Guna spiritually understood as the profound cosmic stillness and resting state prior to creation. Her ten faces and limbs signify the sovereign mastery of the ten directions and the five organs of perception and action.',
    theologicalPosition: 'The primordial sovereign who precedes the awakening of consciousness, releasing Vishnu from cosmic sleep to restore the universe.',
    scripturalReferences: [
      { textName: 'Devi Mahatmya (Prathama Charitra, Chapter 1)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Ratri Suktam (Rig Veda Parishishta)', originalLanguage: 'Sanskrit', sourceType: 'Veda/Upanishad' },
      { textName: 'Harivamsa Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 10,
      weaponsAndAttributes: ['Khadga', 'Bana', 'Gada', 'Shula', 'Chakra', 'Shankha', 'Bhushundi', 'Parigha', 'Dhanus', 'Shira (Severed head)'],
      vahana: 'Supine Vishnu or Shava',
      mudras: ['Holding ten weapons'],
      crownAndOrnaments: 'Ten faces and ten feet, adorned with garlands of human heads, three eyes on each face',
      complexion: 'Deep blue-black collyrium hue (Anjana-sankasha)',
      asana: 'Standing in cosmic grandeur over the cosmic ocean',
      surroundingDeities: ['Brahma singing Ratri Sukta', 'Madhu and Kaitabha'],
      symbolism: 'Her ten faces look into all dimensions of cosmic time simultaneously.'
    },
    worshipTraditions: {
      kula: 'Kalikula and Chandi traditions',
      acharas: ['Dakshinachara', 'Vamachara'],
      regionalPractices: ['Durga Puja Navaratri Day 1 recitation of Prathama Charitra across India', 'Ujjain Mahakaleshwar shrine'],
      sampradayaNotes: 'Worshipped for destroying inertia, ignorance, and deep-seated existential delusion.'
    },
    spiritualSignificance: {
      tattva: 'Tamas Guna transfigured into Nirguna Brahman',
      shakti: 'Yoganidra & Samhara Shakti',
      symbolism: 'The profound unconditioned rest of the soul in God.',
      theologicalInterpretation: 'The absolute silence out of which the word of creation awakens.'
    },
    mantraStotra: [
      {
        id: 'mahakali-dhyana',
        title: 'महाकाली ध्यान श्लोक (Devi Mahatmya Prathama Charitra)',
        type: 'Dhyana',
        sanskrit: `खड्गं चक्रगदेषुचापपरिघाञ्छूलं भुशुण्डीं शिरः
शङ्खं संदधतीं करैस्त्रिनयनां सर्वाङ्गभूषावृताम्।
नीलाश्मद्युतिमास्यपाददशकां सेवे महाकालिकां
यामस्तौत्स्वपिते हरौ कमलजो हन्तुं मधुं कैटभम्॥`,
        transliteration: `Khaḍgaṁ cakragadeṣucāpaparighāñchūlaṁ bhuśuṇḍīṁ śiraḥ
Śaṅkhaṁ saṁdadhatīṁ karaistrinayanāṁ sarvāṅgabhūṣāvṛtām।
Nīlāśmadyutimāsyapādadaśakāṁ seve mahākālikāṁ
Yāmastautsvapite harau kamalajo hantuṁ madhuṁ kaiṭabham॥`,
        meaning: 'I worship Mahakali: holding the sword, discus, mace, arrow, bow, iron club, trident, missile weapon, severed head, and conch with her ten hands. Three-eyed, with ten faces and ten feet, shining with the deep blue effulgence of sapphire, she is the supreme power whom Brahma praised while Vishnu slept in order to slay Madhu and Kaitabha.',
        source: 'Devi Mahatmya, Chapter 1 Dhyanam',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'mahakali-img-1',
        title: 'Verified Traditional Iconography of Dashavaktra Mahakali',
        imageType: 'verified_iconography',
        attribution: 'Traditional Shakta Iconography Archive',
        source: 'Ujjain & Kalighat Sacred Archives',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['kali', 'mahalakshmi', 'mahasaraswati', 'kalaratri'],
    relatedPeethaIds: ['adi-kalighat', 'maha-mahakali-ujjain'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Pan-Indian', 'Bengal', 'Madhya Pradesh', 'Odisha']
  },

  // ==========================================
  // 4. MAA PRATYANGIRA (MAJOR DEDICATED ENTRY)
  // ==========================================
  {
    id: 'pratyangira',
    imagePath: '/images/devis/pratyangira.jpg',
    primaryName: 'Maa Bhagwati Pratyangira',
    sanskritName: 'श्री प्रत्यङ्गिरा देवी',
    odiaName: 'ମା ପ୍ରତ୍ୟଙ୍ଗିରା',
    alternateNames: ['Atharvana Bhadrakali', 'Simhamukhi', 'Aparajita', 'Maha Pratyangira', 'Brahmashira'],
    nameMeaning: 'She who turns back (Prati) the weapons and hostile spells of enemies (Angirasa); sovereign protector of Atharvana spiritual sciences.',
    classification: ['Maa Bhagwati Pratyangira', 'Maa Pratyangira', 'Gupta Shakti', 'Protective Shakta Traditions'],
    traditions: ['Atharvana Tantra', 'Srikula Protection', 'Agama Tantra', 'Kaulachara'],
    acharas: ['Dakshinachara', 'Vamachara', 'Kaulachara'],
    shortIntro: 'The sovereign protector goddess possessing the roaring countenance of a fierce golden lioness (Simhamukhi) harmonized with the dark, graceful, sixteen-or-eighteen-armed body of the cosmic mother. Manifested to pacify cosmic fury and protect devotees from all hostile psychic forces, planetary afflictions, and witchcraft.',
    philosophicalSignificance: 'Maa Pratyangira represents the sovereign kinetic recoil of cosmic law (Rta). She does not harbor malevolence; rather, any negative energy directed against her devotee is immediately neutralized and reflected back to its origin by her blazing aura.',
    theologicalPosition: 'The supreme shakti of the Atharva Veda hymns (Pratyangira Kalpa). Explicitly distinguished from Matrika Narasimhi by her independent cosmic manifestation, lion-faced feline grandeur, and Atharvana Bhadrakali heritage.',
    scripturalReferences: [
      { textName: 'Atharva Veda Parishishta (Pratyangira Kalpa)', originalLanguage: 'Sanskrit', sourceType: 'Veda/Upanishad' },
      { textName: 'Meru Tantra (Patala 26-28)', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Sharadatilaka Tantra (Patala 18)', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Shakta Pramoda (Pratyangira Paddhati)', originalLanguage: 'Sanskrit', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 4, // Also depicted with 8, 16, or 18 arms in temple traditions
      weaponsAndAttributes: ['Trishula (Trident in upper right)', 'Kapala (Skull-cup in lower right)', 'Damaru (in upper left)', 'Nagapasha (Serpent Noose in lower left)'],
      vahana: 'Simha (Fierce Roaring Lion) or Chariot of fierce lions',
      mudras: ['Abhaya', 'Holding weapons with unblinking vigilance'],
      crownAndOrnaments: 'Adorned with crescent moon on a blazing golden lioness mane; wearing garlands of skulls and red lotuses',
      complexion: 'Deep sapphire midnight-blue or dark collyrium hue with golden lion face',
      asana: 'Seated upon a ferocious lion or standing in warrior stance above burning coals',
      surroundingDeities: ['Bhairavas', 'Lion cubs', 'Angirasa rishis'],
      symbolism: 'Her lioness face signifies primordial maternal ferocity protecting her spiritual offspring from harm.'
    },
    worshipTraditions: {
      kula: 'Atharvana Tantra & Srikula Protective Mantralaya',
      acharas: ['Dakshinachara (temple prayers, dhyana, stotra chanting)', 'Kaulachara (Guru-parampara initiations)'],
      regionalPractices: ['Ayyavadi Pratyangira temple near Kumbakonam (famous for red chilli homam)', 'Sholinganallur temple in Chennai', 'Odisha and Bengal village border shrines'],
      sampradayaNotes: 'Initiation-restricted: While devotional stotras and dhyanas are open to all, esoteric prayogas and Mula Mantras require authentic Guru-diksha.'
    },
    spiritualSignificance: {
      tattva: 'Agni-Tattva and Atharvana Tejas',
      shakti: 'Raksha & Pratyangira Shakti',
      symbolism: 'Complete spiritual shield protecting truth from astral falsehood.',
      theologicalInterpretation: 'The lion roar of Truth dispersing the jackals of deception.'
    },
    mantraStotra: [
      {
        id: 'pratyangira-dhyana-profile',
        title: 'प्रत्यङ्गिरा ध्यानम् (Sharadatilaka Tantra)',
        type: 'Dhyana',
        sanskrit: `भुजैश्चतुर्भिर्धृतशूलशङ्ख-
चक्रासिखट्वाङ्गकपालहस्ताम्।
नीलाञ्जनाद्रिप्रतिमप्रभावां
सिंहासनस्थां प्रणमामि देवीम्॥`,
        transliteration: `Bhujaiścaturbhirdhṛtaśūlaśaṅkha-
cakrāsikhaṭvāṅgakapālahastām।
Nīlāñjanādripratimaprabhāvāṁ
siṁhāsanasthāṁ praṇamāmi devīm॥`,
        meaning: 'I bow unto the Supreme Mother Devi Pratyangira, who shines with the deep blue effulgence of a sapphire collyrium mountain. Seated upon her divine lion throne, wielding the trident, conch, discus, sword, skull-topped staff, and skull cup, she protects the cosmos from darkness.',
        source: 'Sharadatilaka Tantra, Patala 18',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Pratyangira Yantra',
      geometricalDescription: 'Central inverted triangle inscribed with the fierce Bija KSHMRAM, surrounded by an inner hexagon, eight petals, sixteen petals, and a four-gated protective Bhupura.',
      scripturalReference: 'Meru Tantra & Pratyangira Kalpa',
      documentedSignificance: 'Acts as an impenetrable psychic armor protecting homes and sadhakas from negative astral intrusions.'
    },
    imageAssets: [
      {
        id: 'pratyangira-img-1',
        title: 'Verified Traditional Iconography of Simhamukhi Pratyangira',
        imageType: 'verified_iconography',
        attribution: 'Ayyavadi & Sholinganallur Temple Archive',
        source: 'Traditional South Indian Agama Archive',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['narasimhi', 'kali', 'bagalamukhi', 'chamunda'],
    relatedPeethaIds: [],
    evidenceStatus: 'Primary textual evidence',
    region: ['Tamil Nadu (Ayyavadi, Chennai)', 'Karnataka', 'Andhra Pradesh', 'Odisha', 'Bengal']
  },

  // ==========================================
  // 5. ODISHA SHAKTA PARAMPARA DEVIS
  // ==========================================
  {
    id: 'vimala-puri',
    imagePath: '/images/devis/vimala.jpg',
    primaryName: 'Maa Vimala (Puri)',
    sanskritName: 'श्री विमला देवी',
    odiaName: 'ମା ବିମଳା',
    alternateNames: ['Bimala', 'Bhairavi of Puri', 'Utkala Pada Peetha Devi'],
    nameMeaning: 'The pure, spotless, and unblemished one (Vimala); supreme Shakta sovereign of Sri Kshetra Puri.',
    classification: ['Odisha Shakta Parampara', 'Shakti Peethas', 'Adi Shakti Peetha'],
    traditions: ['Odisha Shakta', 'Kaula Tantra', 'Jagannatha Culture'],
    acharas: ['Kaulachara', 'Dakshinachara'],
    shortIntro: 'The presiding Shakta deity of Puri and recognized as one of the four original Adi Shakti Peethas (Pada Peetha). Enshrined in the south-western corner of the inner courtyard of the Jagannath Temple, food offered to Lord Jagannatha becomes sanctified as Mahaprasad only after it is presented to Maa Vimala.',
    philosophicalSignificance: 'Vimala represents the esoteric Shakta heart within the great Vaishnavite temple of Jagannatha. Jagannatha is venerated as Bhairava and Vimala as Bhairavi, synthesizing Tantric Shaivism, Shaktism, and Vaishnavism.',
    theologicalPosition: 'The supreme guardian of the sacred temple city of Puri; during the 16-day Durga Puja, secret Tantric rituals are performed within her sanctum.',
    scripturalReferences: [
      { textName: 'Kalika Purana (Peetha Nirnaya)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Skanda Purana (Utkala Khanda)', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Vimala Mahatmya', originalLanguage: 'Sanskrit & Odia', sourceType: 'Temple or regional tradition' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Akshamala (Rosary in upper right)', 'Nagapasha (Serpent noose in upper left)', 'Amrita Kalasha (in lower left)', 'Varada Mudra (in lower right)'],
      vahana: 'Simha (Lion)',
      mudras: ['Varada'],
      crownAndOrnaments: 'Adorned in royal Odia sarees with golden ornaments and sandalwood paste',
      complexion: 'Deep greenish-black chlorite stone luster',
      asana: 'Standing in graceful composure on a lotus pedestal',
      surroundingDeities: ['Chhaya and Maya attendants', 'Bhairava'],
      symbolism: 'She receives the food offerings of the universe and turns them into divine nectar (Mahaprasad).'
    },
    worshipTraditions: {
      kula: 'Kaula Tantra & Jagannatha Sevayat Tradition',
      acharas: ['Kaulachara during Durga Puja', 'Dakshinachara daily'],
      regionalPractices: ['Shodasha Dinatmaka Durga Puja (16-day festival)', 'Maha Saptami nocturnal rituals'],
      sampradayaNotes: 'The priests belong to specific traditional Sevayat lineages with secret hereditary mantras.'
    },
    spiritualSignificance: {
      tattva: 'Pada Peetha of Sati',
      shakti: 'Uchhishta Pavani Shakti (Purifier of all offerings)',
      symbolism: 'The feminine grace without which divine knowledge remains incomplete.',
      theologicalInterpretation: 'The absolute harmony of Shakta Tantra and Vaishnava Bhakti in Utkala.'
    },
    mantraStotra: [
      {
        id: 'vimala-stotram',
        title: 'श्री विमला स्तोत्रम् (Vimala Stotram, Puri)',
        type: 'Stotra',
        sanskrit: `श्रीमत्पद्मासने रम्ये शङ्खचक्रगदाधरे।
विमले वरदे देवि जगन्नाथकुटुम्बिनि॥
पादपद्मं प्रपन्नानां संसारभयनाशिनी।
त्राहि मां सर्वपापेभ्यो विमले पापनाशिनि॥`,
        transliteration: `Śrīmatpadmāsane ramye śaṅkhacakragadādhare।
Vimale varade devi jagannāthakuṭumbini॥
Pādapadmaṁ prapannānāṁ saṁsārabhayanāśinī।
Trāhi māṁ sarvapāpebhyo vimale pāpanāśini॥`,
        meaning: 'Seated upon the splendid lotus, holding divine implements, O Devi Vimala, bestower of boons and eternal consort/shakti of Lord Jagannatha! You who destroy the fear of worldly existence for those surrendered at your lotus feet, protect me from all impurities, O pure purifier!',
        source: 'Vimala Mahatmya, Puri Records',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'vimala-img-1',
        title: 'Verified Traditional Shrine Representation of Maa Vimala (Puri)',
        imageType: 'temple_sculpture',
        attribution: 'Puri Sri Mandira Public Archival Documentation',
        source: 'Archaeological Survey of India & Temple Trust',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['tara-tarini', 'biraja-jajpur', 'kali', 'tripura-sundari'],
    relatedPeethaIds: ['adi-vimala-puri'],
    relatedTempleIds: ['vimala-puri'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Odisha (Puri)']
  },

  {
    id: 'tara-tarini',
    imagePath: '/images/devis/tara_tarini.jpg',
    primaryName: 'Maa Tara Tarini',
    sanskritName: 'श्री तारा-तारिणी',
    odiaName: 'ମା ତାରା-ତାରିଣୀ',
    alternateNames: ['Twin Sisters of Purnagiri', 'Stana Peetha Devis', 'Kalinga Maritime Protectresses'],
    nameMeaning: 'Twin manifestations of Adi Shakti (Tara and Tarini); the divine sisters who rescue seekers from distress; Stana Peetha (Breasts of Sati).',
    classification: ['Odisha Shakta Parampara', 'Shakti Peethas', 'Adi Shakti Peetha'],
    traditions: ['Odisha Shakta', 'Tantric Maritime', 'Dakshinachara'],
    acharas: ['Dakshinachara', 'Vamachara historical context'],
    shortIntro: 'Venerated atop the picturesque Purnagiri Hillock on the banks of the holy Rushikulya River in Ganjam, Odisha. Celebrated as one of the four primary Adi Shakti Peethas representing the Breasts (Stana Peetha) of Sati. Historically revered as the patron deities of ancient Kalinga seafarers traveling to Southeast Asia.',
    philosophicalSignificance: 'Represents the nourishing, twin-stream motherly affection of Adi Parashakti, pouring wisdom and material security into the hearts of her devotees.',
    theologicalPosition: 'Two anthropomorphic crude stone idols crowned with gold and silver ornaments, representing the twin aspects of primordial energy.',
    scripturalReferences: [
      { textName: 'Kalika Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Brihat Samhita', originalLanguage: 'Sanskrit', sourceType: 'Commentary' },
      { textName: 'Ganjam Epigraphical Records', originalLanguage: 'Odia', sourceType: 'Temple or regional tradition' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Golden and silver anthropomorphic forms adorned with eyes, nose, and crowns, draped in red silk sarees'],
      vahana: 'Lion mount on hill summit',
      mudras: ['Facial darshan conferring immediate solace'],
      crownAndOrnaments: 'Intricate silver and gold filigree crowns, large expressive silver eyes, nose rings, and red hibiscus garlands',
      complexion: 'Dark stone anointed with vermilion and sandalwood',
      asana: 'Twin stone monolithic sanctum thrones',
      surroundingDeities: ['Bhairava Chandrasekhara', 'Rushikulya River'],
      symbolism: 'Twin breasts represent the two primordial currents of nectar: wisdom (Jnana) and action (Kriya).'
    },
    worshipTraditions: {
      kula: 'Odisha Shakta & Kalinga Maritime Heritage',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Chaitra Yatra (massive gatherings on every Tuesday of Chaitra month)', 'Mundan (first hair-cleansing) rituals of children'],
      sampradayaNotes: 'Worshipped by millions across Southern Odisha and Northern Andhra Pradesh as the supreme family protectress.'
    },
    spiritualSignificance: {
      tattva: 'Stana Peetha of Sati',
      shakti: 'Poshana & Raksha Shakti',
      symbolism: 'Infinite maternal nourishment and protection on life’s perilous voyages.',
      theologicalInterpretation: 'The compassionate twin sisters receiving the child soul with open arms.'
    },
    mantraStotra: [
      {
        id: 'taratarini-dhyana',
        title: 'तारातारीणी ध्यानम् (Tara Tarini Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `ऋषिकुल्यासरित्तीरे पूर्णगिरिनिवासिनी।
द्विमूर्तिधारिणीं देवीं तारा-तारिणीमाश्रये॥
स्तनपीठस्वरूपेण जगन्मातृस्वरूपिणी।
प्रसन्ना भव हे मातर्भक्तसंरक्षणोत्सुके॥`,
        transliteration: `Ṛṣikulyāsarittīre pūrṇagirinivāsinī।
Dvimūrtidhāriṇīṁ devīṁ tārā-tāriṇīmāśraye॥
Stanapīṭhasvarūpeṇa jaganmātṛsvarūpiṇī।
Prasannā bhava he mātarbhaktasaṁrakṣaṇotsuke॥`,
        meaning: 'Residing on the summit of Purnagiri on the sacred banks of the Rushikulya River, I take refuge in the twin manifestations of Devi Tara and Tarini. Personifying the Breast Peetha of the Cosmic Mother, be ever pleased with us, O Mother eager to protect your devotees!',
        source: 'Traditional Purnagiri Temple Hymn',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'taratarini-img-1',
        title: 'Verified Traditional Shrine Representation of Maa Tara Tarini',
        imageType: 'temple_sculpture',
        attribution: 'Tara Tarini Development Board Public Archive',
        source: 'Purnagiri Temple Records',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['vimala-puri', 'biraja-jajpur', 'tara'],
    relatedPeethaIds: ['adi-tara-tarini'],
    relatedTempleIds: ['tara-tarini'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Odisha (Ganjam)']
  },

  {
    id: 'biraja-jajpur',
    imagePath: '/images/devis/biraja.jpg',
    primaryName: 'Maa Biraja (Jajpur)',
    sanskritName: 'श्री विरजा देवी',
    odiaName: 'ମା ବିରଜା',
    alternateNames: ['Nabhi Gaya Devi', 'Dvibhuja Mahishasuramardini', 'Gada Tirtha Devi', 'Baitarani Janani'],
    nameMeaning: 'The unblemished, pure, and passionless one (Viraja / Biraja); Nabhi (Navel) Peetha of Devi Sati.',
    classification: ['Odisha Shakta Parampara', 'Shakti Peethas', 'Maha Shakti Peetha'],
    traditions: ['Odisha Shakta', 'Brahminical Tantra', 'Puranic Shakta'],
    acharas: ['Dakshinachara', 'Kaulachara historic synthesis'],
    shortIntro: 'One of the most ancient Shakta shrines in India, situated in Jajpur on the sacred Baitarani river. Celebrated as Nabhi Gaya, where thousands perform ancestral Pinda Dana. The two-armed stone image of Maa Biraja spearing Mahishasura with her spear while pulling his tail with her left hand represents an archaic pre-Gupta iconographical marvel.',
    philosophicalSignificance: 'The navel (Nabhi) represents the cosmic umbilical center linking the manifest universe to the primordial womb of the Divine Mother. Hence, performing ancestral rites here liberates lines of ancestors into divine light.',
    theologicalPosition: 'Unique among Indian goddesses for having her own independent nine-day Rath Yatra (Simhadhwaja Chariot) during Durga Puja.',
    scripturalReferences: [
      { textName: 'Mahabharata (Vana Parva, Chap. 85)', originalLanguage: 'Sanskrit', sourceType: 'Veda/Upanishad' },
      { textName: 'Brahma Purana', originalLanguage: 'Sanskrit', sourceType: 'Purana' },
      { textName: 'Kapila Samhita', originalLanguage: 'Sanskrit', sourceType: 'Purana' }
    ],
    iconography: {
      arms: 2,
      weaponsAndAttributes: ['Trishula (Spear in right hand piercing Mahishasura)', 'Tail of Buffalo (pulled with left hand while stepping on his back)'],
      vahana: 'Simha (Lion)',
      mudras: ['Direct warrior stance of triumph'],
      crownAndOrnaments: 'Adorned with crown bearing images of Ganesha, crescent moon, and yoni symbols',
      complexion: 'Black chlorite stone of ancient antiquity',
      asana: 'Standing with right foot upon the recumbent buffalo',
      surroundingDeities: ['Lord Varaha', 'Baitarani river devas'],
      symbolism: 'Two arms signify the direct, non-elaborated, primordial confrontation between Truth and Delusion.'
    },
    worshipTraditions: {
      kula: 'Biraja Kshetra Brahminical Shakta Tradition',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Biraja Rath Yatra (9-day chariot festival during Navaratri)', 'Triveni Amavasya Varuni Snana'],
      sampradayaNotes: 'Priests follow ancient Vedic and Tantric paddhatis handed down since the Bhauma-Kara dynasty.'
    },
    spiritualSignificance: {
      tattva: 'Nabhi Peetha of Sati',
      shakti: 'Mula-Garbha Shakti (Cosmic Center)',
      symbolism: 'Cosmic origin and liberation of ancestral lineages.',
      theologicalInterpretation: 'The navel center where Brahma emerged from the lotus of Vishnu.'
    },
    mantraStotra: [
      {
        id: 'biraja-dhyana',
        title: 'विरजा ध्यान श्लोक (Biraja Dhyana Sloka, Jajpur)',
        type: 'Dhyana',
        sanskrit: `वैतरणीतीरसंस्थां द्विभुजां महिषमर्दिनीम्।
शूलिनीं वीरजननिक्षेमङ्करीं नमाम्यहम्॥
नाभिपीठस्थितां देवीं सर्वकामफलप्रदाम्।
विरजां वरदां वन्दे ब्रह्मलोकप्रदायिनीम्॥`,
        transliteration: `Vaitaraṇītīrasaṁsthāṁ dvibhujāṁ mahiṣamardinīm।
Śūlinīṁ vīrajananīkṣemaṅkarīṁ namāmyaham॥
Nābhipīṭhasthitāṁ devīṁ sarvakāmaphalapradām।
Virajāṁ varadāṁ vande brahmalokapradāyinīm॥`,
        meaning: 'Residing on the banks of the sacred Baitarani River, two-armed slayer of Mahishasura, wielding the spear, Mother of heroes and bestower of welfare, I bow unto you! Enshrined at the Navel Peetha, fulfilling all righteous desires, I revere Devi Biraja who grants the highest spiritual realm.',
        source: 'Kapila Samhita & Jajpur Temple Traditions',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'biraja-img-1',
        title: 'Verified Traditional Shrine Representation of Maa Biraja (Jajpur)',
        imageType: 'temple_sculpture',
        attribution: 'Jajpur Biraja Temple Trust Archive',
        source: 'State Archaeological Records of Odisha',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['vimala-puri', 'tara-tarini', 'katyayani', 'chamunda'],
    relatedPeethaIds: ['maha-biraja-jajpur'],
    relatedTempleIds: ['biraja-jajpur'],
    evidenceStatus: 'Primary textual evidence',
    region: ['Odisha (Jajpur)']
  },

  {
    id: 'samaleswari',
    imagePath: '/images/devis/samaleswari.jpg',
    primaryName: 'Maa Samaleswari',
    sanskritName: 'श्री समलेश्वरी',
    odiaName: 'ମା ସମଲେଶ୍ୱରୀ',
    alternateNames: ['Samalei', 'Presiding Mother of Western Odisha', 'Shakta Queen of Koshal'],
    nameMeaning: 'Mother deity of Sambalpur; enshrined on the banks of the mighty Mahanadi river.',
    classification: ['Odisha Shakta Parampara', 'Grama Devis and Regional Mothers'],
    traditions: ['Odisha Shakta', 'Folk-Tantric Synthesis'],
    acharas: ['Dakshinachara', 'Kaulachara regional forms'],
    shortIntro: 'The beloved mother deity of Western Odisha and the Koshal region, enshrined in Sambalpur on the banks of the Mahanadi. Her iconic image is a powerful monolithic face carved in dark stone, adorned with large expressive silver eyes and an iconic golden nose ornament.',
    philosophicalSignificance: 'Embodying the harmonious synthesis of tribal, folk, and classical Shakta Agama traditions, she is the emotional anchor of the agrarian communities of the Mahanadi valley.',
    theologicalPosition: 'The first harvested rice grain is presented to her during the annual Nuakhai festival before any household consumes the new crop.',
    scripturalReferences: [
      { textName: 'Samaleswari Mahatmya', originalLanguage: 'Odia', sourceType: 'Temple or regional tradition' },
      { textName: 'Chauhan Dynastic Epigraphy of Sambalpur', originalLanguage: 'Odia', sourceType: 'Commentary' }
    ],
    iconography: {
      arms: 'Monolithic face representation (Adya Shila)',
      weaponsAndAttributes: ['Large expressive silver eyes', 'Traditional golden Odia nose ring (Danda)', 'Vermilion-anointed face'],
      vahana: 'Simha (Lion)',
      mudras: ['Facial darshan evoking spontaneous tears of devotion'],
      crownAndOrnaments: 'Golden crown, traditional Sambalpuri handloom silks, silver ornaments',
      complexion: 'Deep sacred vermilion over black rock shila',
      asana: 'Subterranean sanctum altar',
      surroundingDeities: ['Mahanadi river', 'Bhairava'],
      symbolism: 'The vast unblinking eyes symbolize the all-seeing motherly gaze constantly watching over her agricultural children.'
    },
    worshipTraditions: {
      kula: 'Odisha Folk-Tantric Shakta',
      acharas: ['Dakshinachara and regional rituals'],
      regionalPractices: ['Nuakhai harvest festival (Bhadraba Shukla Panchami)', 'Dhabalamukhi / Ganga Darshan on Mahalaya'],
      sampradayaNotes: 'Worshipped by hereditary Jhankar priests hailing from indigenous lineages alongside Brahmin priests.'
    },
    spiritualSignificance: {
      tattva: 'Bhoomi-Prana (Earth vitality)',
      shakti: 'Annapurna & Matri-Sneha Shakti',
      symbolism: 'Sacred agrarian harmony and unconditional motherly love.',
      theologicalInterpretation: 'The Divine Mother revealing her presence directly in the soil, grain, and river.'
    },
    mantraStotra: [
      {
        id: 'samaleswari-vandana',
        title: 'ମା ସମଲେଶ୍ୱରୀ ବନ୍ଦନା (Maa Samaleswari Vandana)',
        type: 'Stotra',
        sanskrit: `महानदीतीरनिवासिनीं तां
सिन्दूररक्तां शुभनेत्रयुक्ताम्।
समलेश्वरीं मातृकृपामयीं च
नमामि भक्ताभयदामभीष्टाम्॥`,
        transliteration: `Mahānadītīranivāsinīṁ tāṁ
Sindūraraktāṁ śubhanetrayuktām।
Samaleśvarīṁ mātṛkṛpāmayīṁ ca
Namāmi bhaktābhayadāmabhīṣṭām॥`,
        meaning: 'Residing on the banks of the sacred Mahanadi River, radiant with holy vermilion and blessed with vast compassionate eyes, I bow unto Maa Samaleswari, filled with maternal grace, who grants fearlessness and fulfills the deepest yearnings of her devotees.',
        source: 'Traditional Sambalpuri Stuti',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'samaleswari-img-1',
        title: 'Verified Traditional Darshan of Maa Samaleswari',
        imageType: 'temple_sculpture',
        attribution: 'Samaleswari Temple Trust Public Archive',
        source: 'Sambalpur District Cultural Archives',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['vimala-puri', 'biraja-jajpur', 'mangala-kakatpur'],
    relatedTempleIds: ['samaleswari'],
    evidenceStatus: 'Temple or regional tradition',
    region: ['Odisha (Sambalpur / Western Odisha)']
  },

  {
    id: 'mangala-kakatpur',
    imagePath: '/images/devis/mangala.jpg',
    primaryName: 'Maa Mangala (Kakatpur)',
    sanskritName: 'श्री मङ्गला देवी',
    odiaName: 'ମା ମଙ୍ଗଳା',
    alternateNames: ['Kakatpur Mangala', 'Prachi Valley Mother', 'Swapnadesha Devi'],
    nameMeaning: 'The bestower of all auspiciousness (Mangala); sacred guardian of the Prachi River valley.',
    classification: ['Odisha Shakta Parampara', 'Grama Devis and Regional Mothers'],
    traditions: ['Odisha Shakta', 'Prachi Valley Tantra', 'Jagannatha Banajaga Yatra'],
    acharas: ['Dakshinachara', 'Kaulachara historical context'],
    shortIntro: 'The celebrated goddess of Kakatpur in the sacred Prachi Valley, inextricably tied to the grand Nabakalebara ritual of Lord Jagannatha. When new bodies must be carved for the holy deities of Puri, the chief priests journey to Kakatpur and sleep in her temple hall to receive divine prophetic dreams (Swapnadesha) guiding them to the sacred Daru trees.',
    philosophicalSignificance: 'Represents the prophetic intuitive voice of the Divine Mother guiding human servants during monumental cosmic transitions.',
    theologicalPosition: 'Four-armed black stone image seated in Padmasana posture, surrounded by ancient Prachi valley archaeological heritage.',
    scripturalReferences: [
      { textName: 'Prachi Mahatmya', originalLanguage: 'Odia & Sanskrit', sourceType: 'Purana' },
      { textName: 'Nabakalebara Paddhati (Puri Sri Mandir Records)', originalLanguage: 'Odia', sourceType: 'Temple or regional tradition' }
    ],
    iconography: {
      arms: 4,
      weaponsAndAttributes: ['Chakra', 'Shankha', 'Varada Mudra', 'Abhaya Mudra / Trishula'],
      vahana: 'Simha (Lion)',
      mudras: ['Varada', 'Abhaya'],
      crownAndOrnaments: 'Adorned in royal Odia Pata sarees, golden crown, silver jewelry',
      complexion: 'Black chlorite stone shila',
      asana: 'Seated in full Padmasana posture',
      surroundingDeities: ['Prachi valley yoginis', 'Daitapati servitors in prayer'],
      symbolism: 'Her serene Padmasana demonstrates absolute inner stillness while directing cosmic movements.'
    },
    worshipTraditions: {
      kula: 'Prachi Valley Shakta-Tantric Tradition',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Jhamu Yatra (fire-walking festival in Chaitra)', 'Pana Sankranti', 'Banajaga Yatra rituals'],
      sampradayaNotes: 'Worshipped with deep love across Coastal Odisha as the dispeller of all crises and bad omens.'
    },
    spiritualSignificance: {
      tattva: 'Auspiciousness (Mangala-Tattva)',
      shakti: 'Swapnadesha Shakti (Prophetic Intuition)',
      symbolism: 'Divine guidance in times of uncertainty and renewal.',
      theologicalInterpretation: 'The mother who shows the way forward when old forms dissolve.'
    },
    mantraStotra: [
      {
        id: 'mangala-dhyana',
        title: 'मङ्गला ध्यानम् (Mangala Dhyana Sloka, Kakatpur)',
        type: 'Dhyana',
        sanskrit: `सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।
शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥
प्राचीतीरे समाराध्या काकटपुरवासिनीम्।
मङ्गलां सर्वदा वन्दे भक्तचित्तप्रमोदिनीम्॥`,
        transliteration: `Sarvamaṅgalamāṅgalye śive sarvārthasādhike।
Śaraṇye tryambake gauri nārāyaṇi namo’stu te॥
Prācītīre samārādhyāṁ kākaṭapuravāsinīm।
Maṅgalāṁ sarvadā vande bhaktacittapramodinīm॥`,
        meaning: 'O all-auspicious of all that is auspicious, O gentle fulfiller of all righteous aims! Enshrined on the banks of the sacred Prachi River at Kakatpur, I bow eternally unto Maa Mangala, the joy of all devotees.',
        source: 'Prachi Mahatmya & Kakatpur Records',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'mangala-img-1',
        title: 'Verified Traditional Shrine Representation of Maa Mangala (Kakatpur)',
        imageType: 'temple_sculpture',
        attribution: 'Kakatpur Mangala Temple Trust Archive',
        source: 'Puri District Cultural Repositories',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['vimala-puri', 'sarala-jhankad', 'charchika'],
    relatedTempleIds: ['mangala-kakatpur'],
    evidenceStatus: 'Temple or regional tradition',
    region: ['Odisha (Puri / Prachi Valley)']
  },

  {
    id: 'sarala-jhankad',
    imagePath: '/images/devis/sarala.jpg',
    primaryName: 'Maa Sarala (Jhankad)',
    sanskritName: 'श्री शारदा / सारळा',
    odiaName: 'ମା ସାରଳା',
    alternateNames: ['Jhankada Nivasini', 'Vakdevi of Utkala', 'Sarala Chandi'],
    nameMeaning: 'She who is simple, straightforward, and generous in conferring poetic wisdom (Sarala); identified with Saraswati and Mahishasuramardini.',
    classification: ['Odisha Shakta Parampara', 'Grama Devis and Regional Mothers'],
    traditions: ['Odisha Shakta', 'Jnana-Shakti', 'Literary Patronage'],
    acharas: ['Dakshinachara'],
    shortIntro: 'Enshrined at Jhankad in Jagatsinghpur district, Maa Sarala is venerated as the supreme patroness of Odia literature and intellect. It was through her spontaneous grace that an illiterate peasant, Sidheswar Parida, attained instantaneous poetic genius and composed the epic Odia Mahabharata, Bilanka Ramayana, and Chandi Purana as Adi Kavi Sarala Dasa.',
    philosophicalSignificance: 'Represents the synthesis of Vak (speech/wisdom) and Veerya (warrior valor), proving that the highest wisdom also slays the demons of ignorance.',
    theologicalPosition: 'Eight-armed stone image spearing the buffalo demon while holding books and writing instruments in traditional devotion.',
    scripturalReferences: [
      { textName: 'Sarala Mahabharata (Adiparva Invocation)', originalLanguage: 'Odia', sourceType: 'Commentary' },
      { textName: 'Chandi Purana (Sarala Dasa)', originalLanguage: 'Odia', sourceType: 'Temple or regional tradition' }
    ],
    iconography: {
      arms: 8,
      weaponsAndAttributes: ['Trishula piercing Mahishasura', 'Khadga', 'Dhanus', 'Bana', 'Pustaka', 'Chakra', 'Shankha', 'Ghanta'],
      vahana: 'Simha (Lion)',
      mudras: ['Triumphant warrior stance'],
      crownAndOrnaments: 'Silver crown, adorned in traditional handloom silk, adorned with bel leaves and flowers',
      complexion: 'Black chlorite stone shila',
      asana: 'Standing on buffalo',
      surroundingDeities: ['Bhairava', 'Adi Kavi Sarala Dasa in prayer'],
      symbolism: 'The union of the sword (discernment) and the pen (wisdom).'
    },
    worshipTraditions: {
      kula: 'Odisha Literary & Shakta Tradition',
      acharas: ['Dakshinachara'],
      regionalPractices: ['Maha Vishuva Sankranti Jhamu Yatra', 'Sharadiya Durga Puja', 'Akshaya Tritiya'],
      sampradayaNotes: 'Odia authors, poets, and students visit her shrine to seek inspiration and bless their manuscripts.'
    },
    spiritualSignificance: {
      tattva: 'Jnana & Vak-Tattva',
      shakti: 'Kavita & Medha Shakti (Poetic Inspiration)',
      symbolism: 'Spontaneous awakening of creative genius in the humblest seeker.',
      theologicalInterpretation: 'The grace that turns an illiterate farmer into an immortal epic poet.'
    },
    mantraStotra: [
      {
        id: 'sarala-vandana',
        title: 'ଆଦିକବି ସାରଳା ଦାସଙ୍କ ବନ୍ଦନା (Sarala Mahabharata Invocation)',
        type: 'Stotra',
        sanskrit: `झङ्कडवासिनीं देवीं सर्वविद्याप्रदायिनीम्।
सारळां वरदां वन्दे वाग्देवीं महिषमर्दिनीम्॥`,
        transliteration: `Jhaṅkaḍavāsinīṁ devīṁ sarvavidyāpradāyinīm।
Sāraḷāṁ varadāṁ vande vāgdevīṁ mahiṣamardinīm॥`,
        meaning: 'Residing in Jhankad, bestower of all arts and sciences, I bow unto Maa Sarala, the goddess of speech and slayer of the demon of delusion, who grants the supreme boons of wisdom.',
        source: 'Sarala Mahabharata Adiparva',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'sarala-img-1',
        title: 'Verified Traditional Shrine Representation of Maa Sarala (Jhankad)',
        imageType: 'temple_sculpture',
        attribution: 'Sarala Temple Trust Public Archive',
        source: 'Jagatsinghpur Cultural Department Records',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['vimala-puri', 'mahasaraswati', 'mangala-kakatpur'],
    relatedTempleIds: ['sarala-jhankad'],
    evidenceStatus: 'Temple or regional tradition',
    region: ['Odisha (Jagatsinghpur)']
  },

  {
    id: 'charchika',
    imagePath: '/images/devis/charchika.jpg',
    primaryName: 'Maa Charchika',
    sanskritName: 'श्री चर्चिका देवी',
    odiaName: 'ମା ଚର୍ଚ୍ଚିକା',
    alternateNames: ['Banki Charchika', 'Ugra Chamunda', 'Ruchika Hills Protectress'],
    nameMeaning: 'She who is contemplated with continuous repetition (Charchana); ancient eight-armed Chamunda manifestation.',
    classification: ['Odisha Shakta Parampara', 'Grama Devis and Regional Mothers', 'Sapta & Ashta Matrikas'],
    traditions: ['Odisha Shakta', 'Ugra Chamunda Tantra', 'Kaulachara'],
    acharas: ['Kaulachara', 'Dakshinachara'],
    shortIntro: 'Perched on the picturesque Ruchika hillock overlooking the Mahanadi River in Banki, Cuttack. Enshrines an ancient eight-armed emaciated stone Chamunda figure seated upon a corpse, holding severed heads, blood cup, snake, and dagger. Legend associates the site with Sage Parashurama.',
    philosophicalSignificance: 'Represents the destruction of the deepest subconscious desires and mortal egoism through fierce contemplation of impermanence.',
    theologicalPosition: 'Ancient Shakta Tantric stronghold preserving medieval Chamunda Upasana in coastal Odisha.',
    scripturalReferences: [
      { textName: 'Charchika Mahatmya', originalLanguage: 'Odia', sourceType: 'Temple or regional tradition' },
      { textName: 'Archaeological Survey Reports of Banki', originalLanguage: 'English', sourceType: 'Scholarly interpretation' }
    ],
    iconography: {
      arms: 8,
      weaponsAndAttributes: ['Khadga', 'Kapala', 'Kartrika', 'Trishula', 'Nagendra', 'Severed head', 'Damaru', 'Abhaya'],
      vahana: 'Shava (Corpse)',
      mudras: ['Terrifying dance of cosmic dissolution'],
      crownAndOrnaments: 'Emaciated ribcage with scorpions, garland of skulls, disheveled flaming hair',
      complexion: 'Black chlorite stone shila',
      asana: 'Seated upon corpse on hilltop',
      surroundingDeities: ['Bhairava', 'Mahanadi river spirits'],
      symbolism: 'Sunken belly with scorpion proves that no toxic worldly attachment can endure in her fire.'
    },
    worshipTraditions: {
      kula: 'Ugra Chamunda Kaula Tradition',
      acharas: ['Kaulachara', 'Dakshinachara'],
      regionalPractices: ['Maha Navami animal sacrifice proxies', 'Chaitra Tuesday congregations', 'Dussehra Mahotsav'],
      sampradayaNotes: 'Follows traditional non-Brahminical and Brahminical combined sevayat procedures.'
    },
    spiritualSignificance: {
      tattva: 'Samhara-Tattva / Dissolution',
      shakti: 'Ugra-Tapas Shakti',
      symbolism: 'Fearless facing of mortality leading to spiritual liberation.',
      theologicalInterpretation: 'The absolute stillness beneath the terrifying surface of cosmic time.'
    },
    mantraStotra: [
      {
        id: 'charchika-dhyana',
        title: 'चर्चिका ध्यान श्लोक (Charchika Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `रुचिकाद्रिस्थितं देवीं शुष्कगात्रां भयानकाम्।
चामुण्डारूपिणीं वन्दे चर्चिकां पापनाशिनीम्॥`,
        transliteration: `Rucikādristhitaṁ devīṁ śuṣkagātrāṁ bhayānakām।
Cāmuṇḍārūpiṇīṁ vande carcikāṁ pāpanāśinīm॥`,
        meaning: 'Seated upon the Ruchika Hill, emaciated of body and terrifying to behold, I revere Devi Charchika in her Chamunda form, the absolute destroyer of all sins.',
        source: 'Banki Temple Records',
        isPublicDevotional: true
      }
    ],
    imageAssets: [
      {
        id: 'charchika-img-1',
        title: 'Verified Traditional Shrine Representation of Maa Charchika (Banki)',
        imageType: 'temple_sculpture',
        attribution: 'Banki Charchika Temple Board Archive',
        source: 'Odisha State Archaeology Repositories',
        license: 'Educational',
        verificationStatus: 'verified'
      }
    ],
    relatedDeviIds: ['chamunda', 'vimala-puri', 'kali'],
    relatedTempleIds: ['charchika'],
    evidenceStatus: 'Temple or regional tradition',
    region: ['Odisha (Banki / Cuttack)']
  },

  // ==========================================
  // 6. GUPTA & ESOTERIC DEVIS
  // ==========================================
  {
    id: 'guhyakali',
    imagePath: '/images/devis/guhyakali.jpg',
    primaryName: 'Maa Guhyakali',
    sanskritName: 'श्री गुह्यकाली',
    odiaName: 'ମା ଗୁହ୍ୟକାଳୀ',
    alternateNames: ['Gupta Kali', 'Maha-Vidya Guhyakali', 'Hundred-Armed Kali', 'Kala-Samkarshini'],
    nameMeaning: 'The Concealed, Secret, and Esoteric Kali (Guhya = Hidden/Esoteric); supreme mistress of all Tantric mysteries.',
    classification: ['Gupta Shakti', 'Kalikula', 'Esoteric Tantric Traditions'],
    traditions: ['Kalikula', 'Nepalese Tantra', 'Mithila Kaula', 'Kashmir Krama'],
    acharas: ['Vamachara', 'Kaulachara'],
    shortIntro: 'The most secret and esoteric form of Kali. Preserved primarily in the manuscript traditions of Nepal and Mithila, Maa Guhyakali is depicted with multiple faces (ranging from two to eight or ten faces) and ten to one hundred arms, adorned with living serpents and standing upon Lord Shiva or a cremation ground hearth.',
    philosophicalSignificance: 'Guhyakali represents the unmanifest, esoteric depth of pure consciousness that can never be objectified or reduced to public demonstration. She is the secret jewel concealed within the deepest cavern of the spiritual heart (Hridaya-Guhya).',
    theologicalPosition: 'The crowning deity of the Mahakala Samhita and Guhyakali Tantra, requiring profound spiritual preparation and strict lineage initiation.',
    scripturalReferences: [
      { textName: 'Mahakala Samhita (Guhyakali Khanda)', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Guhyakali Tantra', originalLanguage: 'Sanskrit', sourceType: 'Tantra' },
      { textName: 'Shaktisamgama Tantra (Kalikhanda)', originalLanguage: 'Sanskrit', sourceType: 'Tantra' }
    ],
    iconography: {
      arms: 10, // Also 50 or 100 arms in advanced paddhatis
      weaponsAndAttributes: ['Holds all cosmic weapons, severed heads, skulls, serpents, and nooses'],
      vahana: 'Ananta Shesha (Thousand-headed serpent) or Shava',
      mudras: ['Holding weapons in esoteric alignments'],
      crownAndOrnaments: 'Crowned with nine hood-crested serpents, garland of fifty skulls, surrounded by embers',
      complexion: 'Dark blue-black like infinite void (Sunya-Sankasha)',
      asana: 'Standing in Pratyalidha posture atop the coiled serpent in the cremation ground',
      surroundingDeities: ['Eight Bhairavas', 'Sixty-four Yoginis in inner circles'],
      symbolism: 'Her multi-faced form looks simultaneously into all dimensions of cosmic consciousness.'
    },
    worshipTraditions: {
      kula: 'Kalikula Esoteric Stream',
      acharas: ['Kaulachara', 'Vamachara'],
      regionalPractices: ['Nepal Guhyeshwari temple at Kathmandu (Pashupatinath complex)', 'Mithila secret lineages'],
      sampradayaNotes: 'Restricted knowledge policy: Detailed Nyasas, Yantras, and Prayogas belong strictly to initiated Guru-parampara.'
    },
    spiritualSignificance: {
      tattva: 'Guhya-Tattva (Esoteric Transcendence)',
      shakti: 'Kala-Samkarshini Shakti',
      symbolism: 'The inviolable holiness of the unmanifest Absolute.',
      theologicalInterpretation: 'The mystery of God that remains forever beyond conceptual capture.'
    },
    mantraStotra: [
      {
        id: 'guhyakali-dhyana',
        title: 'गुह्यकाली ध्यानम् (Guhyakali Dhyana Sloka)',
        type: 'Dhyana',
        sanskrit: `नागेन्द्रहारललितां शरदिन्दुवक्त्रां
नीलोत्पलद्युतिनिभां नयनाभिरामाम्।
अष्टादशैरपि भुजैः परिपूर्णवीरां
वन्दे गुह्यकालीं कुलधर्मगुप्ताम्॥`,
        transliteration: `Nāgendrahāralalitāṁ śaradinduvaktrāṁ
Nīlotpaladyutinibhāṁ nayanābhirāmām।
Aṣṭādaśairapi bhujaiḥ paripūrṇavīrāṁ
Vande guhyakālīṁ kuladharmaguptām॥`,
        meaning: 'Adorned with kingly serpent garlands, with faces effulgent like the autumn moon and complexion radiant like blue lotuses; wielding heroic arms in all directions, I revere Devi Guhyakali, the concealed guardian of the sacred Kula dharma.',
        source: 'Mahakala Samhita, Guhyakali Khanda',
        isPublicDevotional: true
      }
    ],
    yantra: {
      name: 'Sri Guhyakali Yantra',
      geometricalDescription: 'Concentric interlocking triangles surrounded by serpents, lotus petals, and cremation ground hearth enclosures.',
      scripturalReference: 'Mahakala Samhita',
      documentedSignificance: 'Initiation-restricted yantra preserved for qualified disciples.'
    },
    imageAssets: [
      {
        id: 'guhyakali-img-1',
        title: 'Sacred Visual Representation of Guhyakali',
        imageType: 'sacred_om_fallback',
        attribution: 'Sacred Esoteric Shakta Archive',
        source: 'Tradition preserves this form as esoteric / concealed',
        license: 'Educational',
        verificationStatus: 'gupta_svarupa',
        fallbackType: 'gupta_svarupa'
      }
    ],
    relatedDeviIds: ['kali', 'pratyangira', 'chhinnamasta', 'bhairavi'],
    relatedPeethaIds: [],
    evidenceStatus: 'Primary textual evidence',
    region: ['Nepal (Kathmandu)', 'Mithila', 'Bengal', 'Kashmir']
  }
];
