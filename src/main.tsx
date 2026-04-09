import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Filter out harmless warnings from Three.js and Spline
const originalWarn = console.warn;
console.warn = (...args) => {
  if (typeof args[0] === 'string') {
    if (args[0].includes('Multiple instances of Three.js being imported')) return;
    if (args[0].includes('updating from')) return;
  }
  originalWarn(...args);
};

const originalLog = console.log;
console.log = (...args) => {
  if (typeof args[0] === 'string' && args[0] === 'CONNECTED') return;
  originalLog(...args);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
