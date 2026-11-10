import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

/**
 * თემა 1-ის შემოსასვლელი წერტილი (Entry Point)
 * React 18+ createRoot მეთოდი, რომელიც აკავშირებს Virtual DOM-ს რეალურ DOM-თან
 */
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;

