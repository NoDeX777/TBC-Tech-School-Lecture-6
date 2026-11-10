import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

/**
 * თემა 4-ის შემოსასვლელი წერტილი (Entry Point)
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

