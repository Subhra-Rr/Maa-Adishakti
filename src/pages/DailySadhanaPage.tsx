import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { allDevis } from '../data';
import { scriptures } from '../data/scriptures';
import {
  BookOpen, Sparkles, Check, Copy, Bookmark, BookmarkCheck,
  Search, Shield, Heart, Moon, Sun, ArrowRight, Flame,
  AlertCircle, ChevronRight, Edit3, Save, CheckCircle2, Circle
} from 'lucide-react';

interface StotraItem {
  id: string;
  title: string;
  deity: string;
  sourceText: string;
  tradition: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  guidance: string;
}

const PRIMARY_STOTRA_LIBRARY: StotraItem[] = [
  {
    id: 'devi-sukta',
    title: 'ऋग्वैदिक देवी सूक्तम् (वागाम्भृणी सूक्तम्)',
    deity: 'Adi Parashakti (Vak Ambhrini)',
    sourceText: 'Rigveda Samhita (Mandala 10, Sukta 125)',
    tradition: 'Vedic Shakta',
    sanskrit: `ॐ अहम् रुद्रेभिर्वसुभिश्चराम्यहमादित्यैरुत विश्वदेवैः।
अहं मित्रावरुणोभा बिभर्म्यहमिन्द्राग्नी अहमश्विनोभा॥
अहं सोममाहनसं बिभर्म्यहं त्वष्टारमुत पूषणं भगम्।
अहं दधामि द्रविणं हविष्मते सुप्राव्ये यजमानाय सुन्वते॥
अहं राष्ट्री संगमनी वसूनां चिकितुषी प्रथमा यज्ञियानाम्।
तां मा देवा व्यदधुः पुरुत्रा भूरिस्थात्रां भूर्यावेशयन्तीम्॥`,
    transliteration: `Om aham rudrebhir vasubhiś carāmy aham ādityair uta viśvadevaiḥ।
Ahaṁ mitrāvaruṇobhā bibharmy aham indrāgnī aham aśvinobhā॥
Ahaṁ somam āhanasaṁ bibharmy ahaṁ tvaṣṭāram uta pūṣaṇaṁ bhagam।
Ahaṁ dadhāmi draviṇaṁ haviṣmate suprāvye yajamānāya sunvate॥
Ahaṁ rāṣṭrī saṁgamanī vasūnāṁ cikituṣī prathamā yajñiyānām।
Tāṁ mā devā vyadadhuḥ purutrā bhūristhātrāṁ bhūry āveśayantīm॥`,
    meaning: 'I move with the Rudras and the Vasus, with the Adityas and all the Gods. I sustain both Mitra and Varuna, Indra and Agni, and both the Ashvins. I am the Queen of the cosmos, the gatherer of treasures, the knower of truth, the foremost of those who receive worship. The gods have dispersed me widely, existing in myriad stations and pervading all existence.',
    guidance: 'The supreme primary Vedic hymn of Shaktism, chanted during Durga Puja and all sacred rites.'
  },
  {
    id: 'durga-kavacham',
    title: 'चण्डी कवचम् (ब्रह्मोक्तं श्री देव्याः कवचम्)',
    deity: 'Maa Durga (Nava Durga & Matrikas)',
    sourceText: 'Markandeya Purana (Durga Saptashati Anga)',
    tradition: 'Puranic Shakta',
    sanskrit: `ॐ नमश्चण्डिकायै।
मार्कण्डेय उवाच—
यद्गुह्यं परमं लोके सर्वरक्षाकरं नृणाम्।
यन्न कस्यचिदाख्यातं तन्मे ब्रूहि पितामह॥
ब्रह्मोवाच—
अस्ति गुह्यतमं विप्र सर्वभूतोपकारकम्।
देव्यास्तु कवचं पुण्यं तच्छृणुष्व महामुने॥
प्रथमं शैलपुत्री च द्वितीयं ब्रह्मचारिणी।
तृतीयं चन्द्रघण्टेति कूष्माण्डेति चतुर्थकम्॥
पञ्चमं स्कन्दमातेति षष्ठं कात्यायनीति च।
सप्तमं कालरात्रीति महागौरीति चाष्टमम्॥
नवमं सिद्धिदात्री च नवदुर्गाः प्रकीर्तिताः॥`,
    transliteration: `Om namaścaṇḍikāyai।
Mārkaṇḍeya uvāca—
Yadguhyaṁ paramaṁ loke sarvarakṣākaraṁ nṛṇām।
Yanna kasyacidākhyātaṁ tanme brūhi pitāmaha॥
Brahmovāca—
Asti guhyatamaṁ vipra sarvabhūtopakārakam।
Devyāstu kavacaṁ puṇyaṁ tacchṛṇuṣva mahāmune॥
Prathamaṁ śailaputrī ca dvitīyaṁ brahmacāriṇī।
Tṛtīyaṁ candraghaṇṭeti kūṣmāṇḍeti caturthakam॥
Pañcamaṁ skandamāteti ṣaṣṭhaṁ kātyāyanīti ca।
Saptamaṁ kālarātrīti mahāgaurīti cāṣṭamam॥
Navamaṁ siddhidātrī ca navadurgāḥ prakīrtitāḥ॥`,
    meaning: 'Markandeya asked: O Grandfather Brahma, please reveal that supreme mystery which grants total spiritual and physical protection to mortals. Lord Brahma said: There exists the most sacred shield (Kavacha) of the Divine Mother. First is Shailaputri, second Brahmacharini, third Chandraghanta, fourth Kushmanda, fifth Skandamata, sixth Katyayani, seventh Kalaratri, eighth Mahagauri, and ninth Siddhidatri — these are praised as the Nine Durgas.',
    guidance: 'Traditionally recited before the thirteen chapters of Durga Saptashati to establish divine protective armor around the aspirant.'
  },
  {
    id: 'argala-stotram',
    title: 'अर्गला स्तोत्रम् (रूपं देहि जयं देहि)',
    deity: 'Maa Mahalakshmi & Chandi',
    sourceText: 'Markandeya Purana / Devi Mahatmya',
    tradition: 'Puranic Shakta',
    sanskrit: `ॐ जयन्ती मङ्गला काली भद्रकाली कपालिनी।
दुर्गा क्षमा शिवा धात्री स्वाहा स्वधा नमोऽस्तु ते॥
जय त्वं देवि चामुण्डे जय भूतार्तिहारिणि।
जय सर्वगते देवि कालरात्रि नमोऽस्तु ते॥
मधुकैटभविद्रावि विधातृवरदे नमः।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥
महिषासुरनिर्णाशि भक्तानां सुखदे नमः।
रूपं देहि जयं देहि यशो देहि द्विषो जहि॥`,
    transliteration: `Om jayantī maṅgalā kālī bhadrakālī kapālinī।
Durgā kṣamā śivā dhātrī svāhā svadhā namo'stu te॥
Jaya tvaṁ devi cāmuṇḍe jaya bhūtārtihāriṇi।
Jaya sarvagate devi kālarātri namo'stu te॥
Madhukaiṭabhavidrāvi vidhātṛvarade namaḥ।
Rūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi॥
Mahiṣāsuranirṇāśi bhaktānāṁ sukhade namaḥ।
Rūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi॥`,
    meaning: 'O Jayanti (Victorious), Mangala (Auspicious), Kali, Bhadrakali, Kapalini, Durga, Kshama (Forgiving), Shiva, Dhatri, Svaha, and Svadha: salutations to You! Grant us spiritual beauty (divine realization), grant us victory over the ego, grant us noble renown, and destroy the inner enemies of hatred and desire!',
    guidance: 'Sung with deep devotion during dawn and dusk prayers for auspiciousness, courage, and inner liberation.'
  },
  {
    id: 'mahalakshmi-ashtakam',
    title: 'श्रीमहालक्ष्म्यष्टकम् (इन्द्रकृतम्)',
    deity: 'Maa Mahalakshmi',
    sourceText: 'Padma Purana',
    tradition: 'Srikula & Puranic Shakta',
    sanskrit: `नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते।
शङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तु ते॥
नमस्ते गरुडारूढे कोलासुरभयङ्करि।
सर्वपापहरे देवि महालक्ष्मि नमोऽस्तु ते॥
सर्वज्ञे सर्ववरदे सर्वदुष्टभयङ्करि।
सर्वदुःखहरे देवि महालक्ष्मि नमोऽस्तु ते॥
सिद्धिबुद्धिप्रदे देवि भुक्तिमुक्तिप्रदायिनि।
मन्त्रमूर्ते सदा देवि महालक्ष्मि नमोऽस्तु ते॥`,
    transliteration: `Namaste'stu mahāmāye śrīpīṭhe surapūjite।
Śaṅkhacakragadāhaste mahālakṣmi namo'stu te॥
Namaste garuḍārūḍhe kolāsurabhayaṅkari।
Sarvapāpahare devi mahālakṣmi namo'stu te॥
Sarvajñe sarvavarade sarvaduṣṭabhayaṅkari।
Sarvaduḥkhahare devi mahālakṣmi namo'stu te॥
Siddhibuddhiprade devi bhuktimuktipradāyini।
Mantramūrte sadā devi mahālakṣmi namo'stu te॥`,
    meaning: 'Salutations to You, O Mahamaya, who abides in the Sri Peetha, adored by the Devas, bearing the conch, discus, and mace in Your hands! O Devi who destroys all sins, confers spiritual attainment (Siddhi), intellect (Buddhi), enjoyment, and liberation: salutations to You!',
    guidance: 'Recited on Fridays and during daily morning prayer for mental peace, purity, and righteous prosperity.'
  },
  {
    id: 'saraswati-stotram',
    title: 'श्रीसरस्वती स्तोत्रम् (या कुन्देन्दुतुषारहारधवला)',
    deity: 'Maa Saraswati',
    sourceText: 'Shukla Yajurveda & Skanda Purana',
    tradition: 'Vedic-Agamic',
    sanskrit: `या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता
या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना।
या ब्रह्माच्युतशङ्करप्रभृतिभिर्देवैः सदा वन्दिता
सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥`,
    transliteration: `Yā kundendutuṣārahāradhavalā yā śubhravastrāvṛtā
Yā vīṇāvaradaṇḍamaṇḍitakarā yā śvetapadmāsanā।
Yā brahmācyutaśaṅkaraprabhṛtibhir devaiḥ sadā vanditā
Sā māṁ pātu sarasvatī bhagavatī niḥśeṣajāḍyāpahā॥`,
    meaning: 'May Mother Saraswati protect me — she who is as fair as the kunda flower, the moon, and a garland of snow; who is adorned in pristine white garments; whose hands are graced by the Veena and staff; who is seated upon a white lotus; and who is ever adored by Brahma, Achyuta, and Shankara. May she completely eliminate all intellectual inertia and ignorance from my mind.',
    guidance: 'Essential daily morning recitation before study, contemplative writing, and philosophical contemplation.'
  },
  {
    id: 'pratyangira-stotram',
    title: 'श्री प्रत्यङ्गिरा स्तोत्रम् (अपराजिता प्रार्थना)',
    deity: 'Maa Bhagwati Pratyangira',
    sourceText: 'Atharva Veda Parishishta / Meru Tantra',
    tradition: 'Atharvana Tantra & Protective Shaktism',
    sanskrit: `ॐ सिंहवक्त्रायै विद्महे महाशूलिन्यै धीमहि।
तन्नः प्रत्यङ्गिरा प्रचोदयात्॥
सर्वोपद्रवनाशिनि सर्वशत्रुनिवारिणि।
अपराजिते महामाये प्रपन्नं परिपालय॥
यतो यतो भयं स्यान्मे ततस्ततोऽभयं कुरु।
ज्वालामुखि नमस्तेऽस्तु प्रत्यङ्गिरे नमोऽस्तु ते॥`,
    transliteration: `Om siṁhavaktrāyai vidmahe mahāśūlinyai dhīmahi।
Tannaḥ pratyangirā pracodayāt॥
Sarvopadravanāśini sarvaśatrunivāriṇi।
Aparājite mahāmāye prapannaṁ paripālaya॥
Yato yato bhayaṁ syānme tatastato'bhayaṁ kuru।
Jvālāmukhi namaste'stu pratyangire namo'stu te॥`,
    meaning: 'We meditate upon the lion-faced sovereign goddess bearing the great trident. May Mother Pratyangira inspire and direct our consciousness! O destroyer of all afflictions, dispeller of hostile forces, invincible Queen of cosmic illusion, protect those who surrender at your feet. From whichever direction fear arises, dissolve it and grant fearlessness.',
    guidance: 'Public devotional hymn for mental courage and dissolution of anxiety. (Restricted ritual procedures require lineage initiation).'
  }
];

const DAILY_ROUTINE_STEPS = [
  {
    id: 'shaucha',
    number: 1,
    title: '1. Cleanliness & Sacred Preparation (शौच एवं स्नान)',
    desc: 'Bathing with clean water while mentally remembering sacred rivers (Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu, Kaveri). Wear clean, comfortable clothes (preferably red, yellow, or white cotton/silk).'
  },
  {
    id: 'dipa',
    number: 2,
    title: '2. Lighting the Sacred Lamp (दीप स्थापन)',
    desc: 'Light a pure ghee or sesame oil lamp facing East or North. The lamp signifies the dispelling of inner darkness and the witness of Supreme Consciousness (Chit-Dipa).'
  },
  {
    id: 'achamana',
    number: 3,
    title: '3. Purificatory Sips (आचमन एवं प्राणायाम)',
    desc: 'Perform three sips of clean water while chanting Om Keshavaya Namah, Om Narayanaya Namah, Om Madhavaya Namah. Sit comfortably in Sukhasana or Padmasana and take three deep rhythmic breaths to still the mind.'
  },
  {
    id: 'guru_ganesha',
    number: 4,
    title: '4. Guru & Ganesha Invocation (गुरु एवं गणेश स्मरण)',
    desc: 'Bow mentally to the holy lineage of spiritual preceptors (Sri Gurubhyo Namah) and invoke Lord Vighneshvara (Om Gam Ganapataye Namah) to clear obstacles on the contemplative path.'
  },
  {
    id: 'devi_dhyana',
    number: 5,
    title: '5. Devi Dhyana (श्री आदिपराशक्ति ध्यान)',
    desc: 'Close your eyes and visualize Adi Parashakti seated in your heart lotus (Hridaya Kamala) effulgent with golden-rose light, holding gestures of boons and fearlessness.'
  },
  {
    id: 'stotra_recitation',
    number: 6,
    title: '6. Stotra Recitation (स्तोत्र पाठ)',
    desc: 'Chant one or two primary devotional hymns (Devi Suktam, Durga Kavacham, or Argala Stotram) with clear Sanskrit pronunciation and mindful awareness of the meaning.'
  },
  {
    id: 'japa_meditation',
    number: 7,
    title: '7. Quiet Meditation (अन्तर्याग एवं ध्यान)',
    desc: 'Sit in silent stillness for 5 to 10 minutes. Observe the breath and witness the calm presence of maternal grace within your awareness.'
  },
  {
    id: 'samarpanam',
    number: 8,
    title: '8. Surrender of Action (समर्पण एवं शान्ति पाठ)',
    desc: 'Offer all efforts to the Supreme Mother with the prayer: "Kayena Vacha Manasendriyairva... Karomi yadyat sakalam parasmai Narayanayeti samarpayami." Chant Om Shantih Shantih Shantih.'
  }
];

export const DailySadhanaPage: React.FC = () => {
  const { user, toggleSaveStotra, savePersonalNote, toggleRoutineStep } = useAuth();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'routine' | 'library' | 'caution'>('dashboard');
  const [stotraSearch, setStotraSearch] = useState('');
  const [selectedDeityFilter, setSelectedDeityFilter] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [editingNoteKey, setEditingNoteKey] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState('');

  // Daily dynamic recommendations based on date
  const todayDateString = new Date().toISOString().split('T')[0];
  const dayIndex = new Date().getDay(); // 0 to 6

  // Select Devi of the day & Scripture of the day
  const deviOfTheDay = allDevis[dayIndex % allDevis.length] || allDevis[0];
  const scriptureOfTheDay = scriptures[dayIndex % scriptures.length] || scriptures[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSaveNote = (key: string) => {
    savePersonalNote(key, noteDraft);
    setEditingNoteKey(null);
  };

  const startEditNote = (key: string, currentText?: string) => {
    setEditingNoteKey(key);
    setNoteDraft(currentText || '');
  };

  // Filtered Stotras
  const filteredStotras = PRIMARY_STOTRA_LIBRARY.filter(stotra => {
    const q = stotraSearch.toLowerCase().trim();
    const matchesQuery =
      !q ||
      stotra.title.toLowerCase().includes(q) ||
      stotra.deity.toLowerCase().includes(q) ||
      stotra.sanskrit.includes(q) ||
      stotra.meaning.toLowerCase().includes(q);

    const matchesDeity =
      selectedDeityFilter === 'All' || stotra.deity.toLowerCase().includes(selectedDeityFilter.toLowerCase());

    return matchesQuery && matchesDeity;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 overflow-x-hidden min-w-0">
      {/* Header Banner */}
      <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-sacred-maroon via-sacred-dark to-sacred-surface border-2 border-sacred-borderGold/60 shadow-sacred-glow space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-dark/80 border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
            <Sparkles className="w-3.5 h-3.5 text-sacred-gold" />
            <span>॥ नित्यसाधना स्वाध्यायकेन्द्रम् ॥ Daily Sadhana & Devotional Centre</span>
          </div>

          {user && (
            <span className="text-xs font-mono font-bold text-sacred-goldLight bg-sacred-maroon/80 px-3 py-1 rounded border border-sacred-gold/30">
              Scholar: {user.name}
            </span>
          )}
        </div>

        <div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
            Daily Sadhana & Devotional Practice
          </h1>
          <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-2xl leading-relaxed mt-2 max-w-4xl">
            A comprehensive, scripturally grounded educational guide for personal Devi worship, primary hymns, meditation, and devotional reflection.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-sacred-borderGold/30 text-xs font-medium">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'dashboard'
                ? 'bg-sacred-maroon text-sacred-goldLight font-bold border border-sacred-gold shadow-sacred-glow'
                : 'bg-sacred-dark/80 text-sacred-ivoryMuted hover:text-sacred-ivory border border-sacred-border'
            }`}
          >
            Sadhana Dashboard
          </button>
          <button
            onClick={() => setActiveTab('routine')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'routine'
                ? 'bg-sacred-maroon text-sacred-goldLight font-bold border border-sacred-gold shadow-sacred-glow'
                : 'bg-sacred-dark/80 text-sacred-ivoryMuted hover:text-sacred-ivory border border-sacred-border'
            }`}
          >
            Nitya Vidhi (Daily Routine)
          </button>
          <button
            onClick={() => setActiveTab('library')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'library'
                ? 'bg-sacred-maroon text-sacred-goldLight font-bold border border-sacred-gold shadow-sacred-glow'
                : 'bg-sacred-dark/80 text-sacred-ivoryMuted hover:text-sacred-ivory border border-sacred-border'
            }`}
          >
            Mantra & Stotra Library
          </button>
          <button
            onClick={() => setActiveTab('caution')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'caution'
                ? 'bg-sacred-maroon text-sacred-goldLight font-bold border border-sacred-gold shadow-sacred-glow'
                : 'bg-sacred-dark/80 text-sacred-ivoryMuted hover:text-sacred-ivory border border-sacred-border'
            }`}
          >
            Shastra Viveka (Traditions & Caution)
          </button>
        </div>
      </div>

      {/* ========================================================
          TAB 1: SADHANA DASHBOARD
      ======================================================== */}
      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          {/* Top Cards: Devi of Day & Scripture of Day */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Devi of the Day */}
            <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-4 shadow-sacred-glow">
              <div className="flex items-center justify-between border-b border-sacred-borderGold/30 pb-2">
                <span className="text-xs font-mono font-bold text-sacred-gold uppercase">
                  Devi of the Day
                </span>
                <span className="text-xs text-sacred-ivoryMuted">{todayDateString}</span>
              </div>

              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">
                  {deviOfTheDay.primaryName}
                </h3>
                <div className="font-devanagari text-sm text-sacred-goldLight">
                  {deviOfTheDay.sanskritName}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed line-clamp-3">
                {deviOfTheDay.shortIntro}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[11px] bg-sacred-dark border border-sacred-border text-sacred-goldLight font-medium">
                  {deviOfTheDay.classification[0]}
                </span>
                <a
                  href={`/devi/${deviOfTheDay.id}`}
                  className="inline-flex items-center space-x-1.5 text-xs text-sacred-goldLight hover:text-sacred-gold font-semibold uppercase tracking-wider"
                >
                  <span>Explore Sacred Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Scripture of the Day */}
            <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-4 shadow-sacred-glow">
              <div className="flex items-center justify-between border-b border-sacred-borderGold/30 pb-2">
                <span className="text-xs font-mono font-bold text-sacred-gold uppercase">
                  Scripture of the Day
                </span>
                <span className="text-xs text-sacred-ivoryMuted">{scriptureOfTheDay.category}</span>
              </div>

              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">
                  {scriptureOfTheDay.title}
                </h3>
                <div className="font-devanagari text-sm text-sacred-goldLight">
                  {scriptureOfTheDay.sanskritTitle}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed line-clamp-3">
                {scriptureOfTheDay.subject || scriptureOfTheDay.summary}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[11px] bg-sacred-dark border border-sacred-border text-sacred-goldLight font-medium">
                  {scriptureOfTheDay.sectionInfo}
                </span>
                <a
                  href="/scriptures"
                  className="inline-flex items-center space-x-1.5 text-xs text-sacred-goldLight hover:text-sacred-gold font-semibold uppercase tracking-wider"
                >
                  <span>Open Scripture Archive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Daily Devotional Routine Checklist */}
          <div className="p-6 sm:p-8 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 shadow-sacred-glow space-y-4">
            <div className="flex items-center justify-between border-b border-sacred-borderGold/30 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-sacred-gold uppercase">
                  Interactive Practice Tracker
                </span>
                <h3 className="font-cinzel text-xl font-bold text-sacred-ivory">
                  Today&rsquo;s Devotional Checklist ({todayDateString})
                </h3>
              </div>
              <span className="text-xs text-sacred-ivoryMuted">Click items to mark progress</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {DAILY_ROUTINE_STEPS.map((step) => {
                const key = `${todayDateString}_${step.id}`;
                const isCompleted = user?.completedRoutines?.includes(key);

                return (
                  <button
                    key={step.id}
                    onClick={() => toggleRoutineStep(step.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isCompleted
                        ? 'bg-sacred-maroon/80 border-sacred-gold text-sacred-goldLight shadow-sacred-glow'
                        : 'bg-sacred-dark/70 border-sacred-border text-sacred-ivoryDim hover:border-sacred-gold/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] text-sacred-gold font-bold">
                        STEP #{step.number}
                      </span>
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4 text-sacred-ivoryMuted" />
                      )}
                    </div>
                    <div className="font-semibold text-xs text-sacred-ivory">{step.title}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Saved Stotras & Personal Study Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Saved Stotras */}
            <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-sacred-gold uppercase border-b border-sacred-borderGold/30 pb-2">
                <Bookmark className="w-4 h-4 text-sacred-gold" />
                <span>My Saved Devotional Stotras ({user?.savedStotras?.length || 0})</span>
              </div>

              {!user?.savedStotras || user.savedStotras.length === 0 ? (
                <div className="text-center py-8 text-xs text-sacred-ivoryMuted space-y-2">
                  <p>You have not saved any stotras yet.</p>
                  <button
                    onClick={() => setActiveTab('library')}
                    className="text-sacred-gold underline"
                  >
                    Browse the Mantra & Stotra Library
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {user.savedStotras.map((id) => {
                    const stotra = PRIMARY_STOTRA_LIBRARY.find(s => s.id === id);
                    if (!stotra) return null;
                    return (
                      <div
                        key={id}
                        className="p-3 rounded-lg bg-sacred-dark/80 border border-sacred-borderGold/20 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-cinzel font-bold text-sacred-ivory">{stotra.title}</div>
                          <div className="text-[11px] text-sacred-goldDark">{stotra.deity}</div>
                        </div>
                        <button
                          onClick={() => toggleSaveStotra(id)}
                          className="p-1 text-sacred-gold hover:text-white"
                          title="Remove from saved"
                        >
                          <BookmarkCheck className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Personal Study Notes */}
            <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-4">
              <div className="flex items-center justify-between border-b border-sacred-borderGold/30 pb-2">
                <span className="text-xs font-mono font-bold text-sacred-gold uppercase flex items-center space-x-1.5">
                  <Edit3 className="w-4 h-4 text-sacred-gold" />
                  <span>Personal Study Notes</span>
                </span>
                <span className="text-xs text-sacred-ivoryMuted">Private Journal</span>
              </div>

              <div className="space-y-3">
                {Object.entries(user?.personalNotes || {}).map(([key, note]) => (
                  <div key={key} className="p-3 rounded-lg bg-sacred-dark/80 border border-sacred-borderGold/20 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-sacred-gold font-semibold uppercase text-[10px]">
                      <span>Topic: {key}</span>
                      <button
                        onClick={() => startEditNote(key, note)}
                        className="hover:underline text-[10px]"
                      >
                        Edit
                      </button>
                    </div>
                    {editingNoteKey === key ? (
                      <div className="space-y-2">
                        <textarea
                          value={noteDraft}
                          onChange={(e) => setNoteDraft(e.target.value)}
                          className="w-full bg-sacred-surface border border-sacred-borderGold/50 rounded p-2 text-sacred-ivory text-xs focus:outline-none"
                          rows={3}
                        />
                        <button
                          onClick={() => handleSaveNote(key)}
                          className="px-3 py-1 bg-sacred-maroon text-sacred-goldLight rounded text-[11px] font-semibold"
                        >
                          Save Note
                        </button>
                      </div>
                    ) : (
                      <p className="text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                        {note}
                      </p>
                    )}
                  </div>
                ))}

                {(!user?.personalNotes || Object.keys(user.personalNotes).length === 0) && (
                  <div className="text-center py-8 text-xs text-sacred-ivoryMuted">
                    <span>No personal study notes recorded yet. You can add notes while exploring Devis and Stotras!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: NITYA VIDHI (DAILY ROUTINE)
      ======================================================== */}
      {activeTab === 'routine' && (
        <div className="space-y-8">
          <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-2">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
              Nitya Vidhi — The Traditional Daily Devotional Sequence
            </h2>
            <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
              Based on the Devi Bhagavata Purana, Markandeya Purana, and standard Shakta Smarta paddhatis. This routine is designed for universal public practice without requiring esoteric monastic initiation.
            </p>
          </div>

          <div className="space-y-4">
            {DAILY_ROUTINE_STEPS.map((step) => (
              <div
                key={step.id}
                className="p-5 sm:p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-2.5"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-sacred-maroon border border-sacred-gold flex items-center justify-center font-mono text-xs font-bold text-sacred-gold">
                    {step.number}
                  </div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-sacred-ivory">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed pl-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 3: MANTRA & STOTRA LIBRARY
      ======================================================== */}
      {activeTab === 'library' && (
        <div className="space-y-8">
          {/* Search and Filters */}
          <div className="p-4 sm:p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-sacred-gold absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={stotraSearch}
                onChange={(e) => setStotraSearch(e.target.value)}
                placeholder="Search devotional hymns by Sanskrit verse, deity, or meaning..."
                className="w-full bg-sacred-dark border border-sacred-borderGold/50 rounded-lg pl-12 pr-4 py-3 text-sm text-sacred-ivory placeholder-sacred-ivoryMuted focus:outline-none focus:border-sacred-gold"
              />
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="text-sacred-goldLight font-medium py-1">Filter by Deity:</span>
              {['All', 'Durga', 'Lakshmi', 'Saraswati', 'Adi Parashakti', 'Pratyangira'].map((deity) => (
                <button
                  key={deity}
                  onClick={() => setSelectedDeityFilter(deity)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    selectedDeityFilter === deity
                      ? 'bg-sacred-maroon border border-sacred-gold text-sacred-goldLight font-bold'
                      : 'bg-sacred-dark border border-sacred-border text-sacred-ivoryMuted hover:text-white'
                  }`}
                >
                  {deity}
                </button>
              ))}
            </div>
          </div>

          {/* Stotras List */}
          <div className="space-y-6">
            {filteredStotras.map((stotra) => {
              const isSaved = user?.savedStotras?.includes(stotra.id);

              return (
                <div
                  key={stotra.id}
                  className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-4 relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sacred-borderGold/30 pb-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-sacred-gold uppercase tracking-wider block">
                        {stotra.tradition} • {stotra.sourceText}
                      </span>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold gold-gradient-text mt-0.5">
                        {stotra.title}
                      </h3>
                      <div className="text-xs text-sacred-goldLight font-medium">
                        Presiding Deity: {stotra.deity}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {/* Save to user library */}
                      <button
                        onClick={() => toggleSaveStotra(stotra.id)}
                        className={`p-2 rounded-lg border transition-all ${
                          isSaved
                            ? 'bg-sacred-maroon border-sacred-gold text-sacred-goldLight'
                            : 'bg-sacred-dark border-sacred-border text-sacred-ivoryMuted hover:text-sacred-gold'
                        }`}
                        title={isSaved ? 'Saved in library' : 'Save for daily reading'}
                      >
                        {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                      </button>

                      {/* Copy Text */}
                      <button
                        onClick={() => handleCopy(`${stotra.sanskrit}\n\n${stotra.transliteration}\n\nMeaning:\n${stotra.meaning}`, stotra.id)}
                        className="p-2 rounded-lg bg-sacred-dark border border-sacred-border text-sacred-ivoryMuted hover:text-sacred-gold transition-all"
                        title="Copy Sanskrit and Translation"
                      >
                        {copiedId === stotra.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Sanskrit Original */}
                  <div className="p-4 sm:p-5 rounded-xl bg-sacred-dark/90 border border-sacred-borderGold/40 text-center">
                    <pre className="font-devanagari text-base sm:text-lg md:text-xl font-bold text-sacred-goldLight whitespace-pre-wrap leading-relaxed">
                      {stotra.sanskrit}
                    </pre>
                  </div>

                  {/* Transliteration */}
                  <div className="text-xs sm:text-sm text-sacred-ivoryMuted italic font-serif leading-relaxed px-1">
                    {stotra.transliteration}
                  </div>

                  {/* English Meaning */}
                  <div className="p-3.5 rounded-lg bg-sacred-dark/60 border border-sacred-border text-xs sm:text-sm text-sacred-ivory leading-relaxed font-cormorant text-base sm:text-lg">
                    <span className="text-sacred-goldDark font-sans text-xs font-bold block mb-1">
                      Meaning & Commentary:
                    </span>
                    {stotra.meaning}
                  </div>

                  {/* Recitation Guidance */}
                  <div className="text-[11px] text-sacred-goldDark bg-sacred-maroon/20 p-2.5 rounded border border-sacred-borderGold/20">
                    <strong>Recitation Guidance:</strong> {stotra.guidance}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 4: SHASTRA VIVEKA (TRADITIONS & CAUTION)
      ======================================================== */}
      {activeTab === 'caution' && (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-3">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
              Shastra Viveka — The Crucial Distinctions in Shakta Worship
            </h2>
            <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
              Traditional scriptures strictly distinguish between accessible universal devotion and advanced lineage-specific Tantric rituals. Understanding these boundaries ensures spiritual safety, clarity, and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 rounded-xl bg-sacred-surface border border-emerald-600/30 space-y-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold uppercase">
                1. General Devotional Worship (Bhakti / Nitya Puja)
              </span>
              <h3 className="font-cinzel text-lg font-bold text-sacred-ivory">Universal Accessibility</h3>
              <p className="text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                Open to all seekers without prerequisites. Includes lighting a sacred lamp, offering flowers, reciting the Devi Mahatmya, chanting stotras (Lalita Sahasranama, Argala, Kavacha), and contemplative prayer. Governed by sattvic love, cleanliness, and surrender.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-sacred-surface border border-amber-600/30 space-y-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] bg-amber-950/80 border border-amber-500/40 text-amber-300 font-bold uppercase">
                2. Traditional Upasana (Regular Contemplative Practice)
              </span>
              <h3 className="font-cinzel text-lg font-bold text-sacred-ivory">Steadfast Devotion</h3>
              <p className="text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                Regular daily discipline involving fixed japa counts of public mantras (such as Navarna or Gayatri), vrata observance during Navaratri, and study of sacred Shastras under traditional commentary.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-sacred-surface border border-red-600/30 space-y-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] bg-red-950/80 border border-red-500/40 text-red-300 font-bold uppercase">
                3. Formal Initiation-Dependent Sadhana (Diksha)
              </span>
              <h3 className="font-cinzel text-lg font-bold text-sacred-ivory">Guru-Parampara Requirement</h3>
              <p className="text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                Specific esoteric mantras (such as Sri Vidya Panchadashi/Shodashi, Chhinnamasta, Bagalamukhi, or smashana rites) require formal transmission (Upadesha) from a living traditional Guru. Attempting these without initiation is strictly cautioned by the Tantras.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] bg-sacred-maroon border border-sacred-gold/40 text-sacred-goldLight font-bold uppercase">
                4. Scholarly & Encyclopedic Principle
              </span>
              <h3 className="font-cinzel text-lg font-bold text-sacred-ivory">Our Digital Mission</h3>
              <p className="text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                SHAKTA TATTVA functions as an educational and philosophical encyclopedia. We document sacred knowledge to preserve authentic Indian heritage, without acting as a substitute for an authentic spiritual preceptor.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
