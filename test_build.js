import { build } from 'vite';
import react from '@vitejs/plugin-react';

process.chdir('D:/Maa Adishakti');

try {
  await build({
    root: 'D:/Maa Adishakti',
    configFile: false,
    plugins: [react()],
    build: {
      outDir: 'dist_test',
      emptyOutDir: true
    }
  });
  console.log('Build to dist_test SUCCESSFUL!');
} catch (e) {
  console.error('Error:', e);
}
