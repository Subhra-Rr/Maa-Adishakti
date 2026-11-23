import { allDevis } from './src/data/index.ts';

const testIds = [
  'durga-prakriti', 'radha', 'lakshmi-prakriti', 'saraswati-prakriti', 'savitri-prakriti',
  'brahmani', 'maheshwari', 'kaumari', 'vaishnavi', 'varahi', 'indrani', 'chamunda', 'narasimhi',
  'pratyangira',
  'vimala-puri', 'tara-tarini', 'biraja-jajpur', 'samaleswari', 'mangala-kakatpur', 'sarala-jhankad', 'charchika'
];

testIds.forEach(id => {
  const devi = allDevis.find(d => d.id === id);
  if (!devi) {
    console.log(`NOT FOUND: ${id}`);
  } else {
    console.log(`${id}: name="${devi.primaryName}", imagePath="${devi.imagePath}", imageAssets[0]=${devi.imageAssets?.[0]?.imagePath}`);
  }
});
