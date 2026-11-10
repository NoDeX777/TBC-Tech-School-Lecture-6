import React from 'react';
import DeclarativeVsImperative from './components/DeclarativeVsImperative.jsx';
import VirtualDomExplanation from './components/VirtualDomExplanation.jsx';
import CounterDiffingDemo from './components/CounterDiffingDemo.jsx';

/**
 * თემა 1-ის მთავარი გამშვები აპლიკაციის კომპონენტი
 * თემა: რატომ React? და Virtual DOM-ის კონცეფცია
 */
function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <header style={{ borderBottom: '2px solid #3182ce', paddingBottom: '12px', marginBottom: '24px' }}>
        <h1 style={{ color: '#2c5282', margin: 0 }}>თემა 1: რატომ React? & Virtual DOM</h1>
        <p style={{ color: '#718096', margin: '6px 0 0 0' }}>
          TBC Tech School - Full Stack Development (ლექცია 3)
        </p>
      </header>

      <main>
        <DeclarativeVsImperative />
        <VirtualDomExplanation />
        <CounterDiffingDemo />
      </main>

      <footer style={{ marginTop: '30px', textAlign: 'center', color: '#a0aec0', fontSize: '13px' }}>
        TBC Tech School © React-ის შესავალი
      </footer>
    </div>
  );
}

export default App;

