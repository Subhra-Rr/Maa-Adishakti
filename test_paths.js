import fs from 'fs';

const d = fs.readFileSync('D:/Maa Adishakti/src/data/devis.ts', 'utf8');
const s = fs.readFileSync('D:/Maa Adishakti/src/data/supplementalDevis.ts', 'utf8');

const testIds = [
  'durga-prakriti', 'radha', 'lakshmi-prakriti', 'saraswati-prakriti', 'savitri-prakriti',
  'brahmani', 'maheshwari', 'kaumari', 'vaishnavi', 'varahi', 'indrani', 'chamunda', 'narasimhi',
  'pratyangira',
  'vimala-puri', 'tara-tarini', 'biraja-jajpur', 'samaleswari', 'mangala-kakatpur', 'sarala-jhankad', 'charchika'
];

testIds.forEach(id => {
  const regD = new RegExp(`id:\\s*['"]${id}['"][\\s\\S]*?imagePath:\\s*['"](.*?)['"]`);
  const matchD = d.match(regD);
  const regS = new RegExp(`id:\\s*['"]${id}['"][\\s\\S]*?imagePath:\\s*['"](.*?)['"]`);
  const matchS = s.match(regS);
  console.log(`${id}: devis=${matchD ? matchD[1] : 'none'}, supp=${matchS ? matchS[1] : 'none'}`);
});
