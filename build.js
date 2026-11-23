import { build } from 'vite';
import react from '@vitejs/plugin-react';

try {
  await build({
    configFile: false,
    plugins: [react()],
    build: {
      outDir: 'dist',
      emptyOutDir: false,
      copyPublicDir: false
    }
  });
  console.log('Vite build succeeded cleanly!');
} catch (err) {
  console.error('Build error:', err);
  process.exit(1);
}
