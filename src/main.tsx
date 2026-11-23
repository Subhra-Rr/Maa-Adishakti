import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { preloadDeviImages, DEVI_IMAGE_REGISTRY } from './components/DeviImage';

// Warm up priority deity portraits into memory cache during initial idle time
if (typeof window !== 'undefined') {
  const priorityPaths = [
    DEVI_IMAGE_REGISTRY['kali'],
    DEVI_IMAGE_REGISTRY['tara'],
    DEVI_IMAGE_REGISTRY['tripura-sundari'],
    DEVI_IMAGE_REGISTRY['durga'],
    DEVI_IMAGE_REGISTRY['shailaputri'],
    DEVI_IMAGE_REGISTRY['mahalakshmi'],
    DEVI_IMAGE_REGISTRY['mahasaraswati'],
    DEVI_IMAGE_REGISTRY['pratyangira']
  ].filter(Boolean);

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => preloadDeviImages(priorityPaths));
  } else {
    setTimeout(() => preloadDeviImages(priorityPaths), 800);
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
