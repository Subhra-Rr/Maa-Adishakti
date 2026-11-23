import { createServer } from 'vite';
import react from '@vitejs/plugin-react';

try {
  const server = await createServer({
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
