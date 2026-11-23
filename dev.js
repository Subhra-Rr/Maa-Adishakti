import { createServer } from 'vite';
import react from '@vitejs/plugin-react';

process.chdir('D:/Maa Adishakti');

try {
  const server = await createServer({
    root: 'D:/Maa Adishakti',
    configFile: false,
    plugins: [react()],
    server: {
      port: 5173,
      host: true
    }
  });

  await server.listen();
  server.printUrls();
} catch (err) {
  console.error('Dev server error:', err);
  process.exit(1);
}
