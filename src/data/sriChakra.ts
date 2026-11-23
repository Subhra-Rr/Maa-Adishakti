export interface AvaranaInfo {
  number: number;
  id: string;
  name: string;
  sanskritName: string;
  geometry: string;
  presidingYoginiType: string;
  mudra: string;
  philosophicalMeaning: string;
  deitiesInEnclosure: string[];
  associatedBija: string;
  spiritualStage: string;
}

export const sriChakraAvaranas: AvaranaInfo[] = [
  {
    number: 1,
    id: 'trailokyamohana',
    name: 'Trailokyamohana Chakra',
    sanskritName: 'त्रैलोक्यमोहन चक्र',
    geometry: 'Outer Square Bhupura with 3 concentric lines and 4 cardinal gateways',
    presidingYoginiType: 'Prakata Yoginis (Manifest Shaktis)',
    mudra: 'Sarva Sankshobhini Mudra',
    philosophicalMeaning: 'The enchantment of the three realms of wakefulness, dream, and deep sleep; harmonizes gross physical existence and directs worldly desires inward.',
    deitiesInEnclosure: [
      'Ten Siddhis (Anima, Laghima, Mahima, Ishitva, Vashitva, Prapti, Prakamya, Bhukti, Ichha, Prapti)',
      'Ashta Matrikas (Brahmani, Maheshwari, Kaumari, Vaishnavi, Varahi, Indrani, Chamunda, Mahalakshmi)',
      'Ten Mudra Shaktis'
    ],
    associatedBija: 'AIM / HRIM',
    spiritualStage: 'Purification of the physical body and grounding in moral discipline (Yama-Niyama)'
  },
  {
    number: 2,
    id: 'sarvashaparipuraka',
    name: 'Sarvashaparipuraka Chakra',
    sanskritName: 'सर्वाशापरिपूरक चक्र',
    geometry: 'Sixteen-Petaled Lotus (Shodasha-Dala-Padma)',
    presidingYoginiType: 'Gupta Yoginis (Concealed Shaktis)',
    mudra: 'Sarva Vidravini Mudra',
    philosophicalMeaning: 'Fulfillment of all pure spiritual aspirations and sublimation of the sixteen subtle kalas (senses, mind, and intellect).',
    deitiesInEnclosure: [
      'Kamarshini', 'Buddhyakarshini', 'Ahankarakarshini', 'Shabdakarshini',
      'Sparshakarshini', 'Rupakarshini', 'Rasakarshini', 'Gandhakarshini',
      'Chittakarshini', 'Dhairyakarshini', 'Smrityakarshini', 'Namakarshini',
      'Bijakarshini', 'Atmakarshini', 'Amritakarshini', 'Sharirakarshini'
    ],
    associatedBija: 'KLIM',
    spiritualStage: 'Control of the senses and mental detachment from external objects'
  },
  {
    number: 3,
    id: 'sarvasankshobhana',
    name: 'Sarvasankshobhana Chakra',
    sanskritName: 'सर्वसंक्षोभण चक्र',
    geometry: 'Eight-Petaled Lotus (Ashta-Dala-Padma)',
    presidingYoginiType: 'Guptatara Yoginis (More Concealed Shaktis)',
    mudra: 'Sarvakashini Mudra',
    philosophicalMeaning: 'Agitation and dissolution of the eight deep mental modifications (speech, grasp, movement, excretion, joy, rejection, sorrow, ignorance).',
    deitiesInEnclosure: [
      'Ananga Kusuma', 'Ananga Mekhala', 'Ananga Madana', 'Ananga Madanatura',
      'Ananga Rekha', 'Ananga Vegini', 'Ananga Ankusha', 'Ananga Malini'
    ],
    associatedBija: 'SAUH',
    spiritualStage: 'Pranayama and inward withdrawal of the life-currents'
  },
  {
    number: 4,
    id: 'sarvasaubhagyadayaka',
    name: 'Sarvasaubhagyadayaka Chakra',
    sanskritName: 'सर्वसौभाग्यदायक चक्र',
    geometry: 'Fourteen-Angled Star (Chaturdashara)',
    presidingYoginiType: 'Sampradaya Yoginis (Traditional Lineage Shaktis)',
    mudra: 'Sarvavashankari Mudra',
    philosophicalMeaning: 'Bestowal of all supreme fortune; governs the fourteen primary subtle nadis (Alambusa, Kuhu, Vishvodara, Varuna, Hastijihva, Yashasvati, Asvini, Gandhari, Pusha, Shankhini, Sarasvati, Ida, Pingala, Sushumna).',
    deitiesInEnclosure: [
      'Sarvasamkshobhini', 'Sarvavidravini', 'Sarvakarshini', 'Sarvahlidini',
      'Sarvasammohini', 'Sarvastambhini', 'Sarvajrimbhini', 'Sarvavashankari',
      'Sarvaranjani', 'Sarvonmadini', 'Sarvarthasadhani', 'Sarvasampattipurani',
      'Sarvamantramayi', 'Sarvadvandvakshayankari'
    ],
    associatedBija: 'HA-SA-KHA-PHREM',
    spiritualStage: 'Purification of the fourteen subtle nadis of Kundalini'
  },
  {
    number: 5,
    id: 'sarvarthasadhaka',
    name: 'Sarvarthasadhaka Chakra',
    sanskritName: 'सर्वार्थसाधक चक्र',
    geometry: 'Outer Ten-Angled Figure (Bahir-Dashara)',
    presidingYoginiType: 'Kulotteerna Yoginis (Transcending the Lineage)',
    mudra: 'Sarvonmadini Mudra',
    philosophicalMeaning: 'Accomplishment of all worldly and spiritual purposes; governs the ten vital pranas (Prana, Apana, Vyana, Udana, Samana, Naga, Kurma, Krikara, Devadatta, Dhananjaya).',
    deitiesInEnclosure: [
      'Sarvasiddhiprada', 'Sarvasampatprada', 'Sarvapriyankari', 'Sarvamangalakarini',
      'Sarvakamaprada', 'Sarvaduhkhavimochani', 'Sarvamrityuprashamani',
      'Sarvavighnanivarini', 'Sarvangasundari', 'Sarvasaubhagyadayini'
    ],
    associatedBija: 'HSRAUM',
    spiritualStage: 'Mastery over the tenfold vital breath and internal fire'
  },
  {
    number: 6,
    id: 'sarvarakshakara',
    name: 'Sarvarakshakara Chakra',
    sanskritName: 'सर्वरक्षाकर चक्र',
    geometry: 'Inner Ten-Angled Figure (Antar-Dashara)',
    presidingYoginiType: 'Nigarbha Yoginis (Inner Core Shaktis)',
    mudra: 'Sarvamahankusha Mudra',
    philosophicalMeaning: 'The supreme protective enclosure guarding against mental defects; governs the ten vital fires of digestion and knowledge.',
    deitiesInEnclosure: [
      'Sarvajna', 'Sarvashakti', 'Sarvaishvaryaprada', 'Sarvajnanamayi',
      'Sarvavyadhivinashini', 'Sarvadharasvarupa', 'Sarvapapahara',
      'Sarvanandamayi', 'Sarvarakshasvarupini', 'Sarvepsitaphalaprada'
    ],
    associatedBija: 'HROUM',
    spiritualStage: 'Impenetrable psychic protection and unwavering concentration (Dharana)'
  },
  {
    number: 7,
    id: 'sarvarogahara',
    name: 'Sarvarogahara Chakra',
    sanskritName: 'सर्वरोगहर चक्र',
    geometry: 'Eight-Angled Figure (Ashtakona)',
    presidingYoginiType: 'Rahasya Yoginis (Secret Speech Deities)',
    mudra: 'Sarvakhechari Mudra',
    philosophicalMeaning: 'Eradication of all diseases—most fundamentally the chronic disease of dualistic illusion (Avidya); home of the eight speech deities who composed Lalita Sahasranama.',
    deitiesInEnclosure: [
      'Vashini (Control)', 'Kameshvari (Desire)', 'Modini (Delight)', 'Vimala (Purity)',
      'Aruna (Dawn)', 'Jayini (Victory)', 'Sarveshvari (Universal Command)', 'Kaulini (Lineage Power)'
    ],
    associatedBija: 'HRIM',
    spiritualStage: 'Spontaneous poetic eloquence (Vak-Siddhi) and pure meditation (Dhyana)'
  },
  {
    number: 8,
    id: 'sarvasiddhiprada',
    name: 'Sarvasiddhiprada Chakra',
    sanskritName: 'सर्वसिद्धिप्रद चक्र',
    geometry: 'Primary Inner Inverted Triangle (Trikona)',
    presidingYoginiType: 'Ati-Rahasya Yoginis (Extremely Secret Shaktis)',
    mudra: 'Sarvabija Mudra',
    philosophicalMeaning: 'The womb of the cosmos embodying the three primordial cosmic powers: Ichha (Desire), Jnana (Knowledge), and Kriya (Action).',
    deitiesInEnclosure: [
      'Kameshvari (Apex)',
      'Vajreshvari (Right vertex)',
      'Bhagamalini (Left vertex)'
    ],
    associatedBija: 'KLIM / SAUH',
    spiritualStage: 'Absorption in the threshold of Samadhi (Savikalpa Samadhi)'
  },
  {
    number: 9,
    id: 'sarvanandamaya',
    name: 'Sarvanandamaya Chakra',
    sanskritName: 'सर्वानन्दमय चक्र (महाबिन्दु)',
    geometry: 'Central Bindu (Transcendental Point of Infinite Potential)',
    presidingYoginiType: 'Paratpara-Rahasya Yogini (Maha Nitya Lalita Mahatripurasundari)',
    mudra: 'Sarvayoni Mudra / Mahatrikona Mudra',
    philosophicalMeaning: 'The undivided ocean of unalloyed bliss (Sat-Chit-Ananda), where Kameshvara and Kameshvari dwell in eternal non-dual union.',
    deitiesInEnclosure: [
      'Sri Lalita Mahatripurasundari in indivisible union with Kameshvara Shiva'
    ],
    associatedBija: 'SHRIM (Shodashi Bija)',
    spiritualStage: 'Complete Non-Dual Liberation (Nirvikalpa Samadhi / Sahaja Samadhi)'
  }
];
