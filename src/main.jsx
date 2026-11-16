import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  useEffect(() => {
    // Keep the existing page renderer and browser-side shopping demo intact
    // while mounting the website inside a React application.
    const script = document.createElement('script');
    script.src = '/assets/js/app.js';
    script.async = false;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return <div id="app" aria-live="polite"><div className="react-loading">LA CINDERAE</div></div>;
}

createRoot(document.getElementById('root')).render(<App />);
