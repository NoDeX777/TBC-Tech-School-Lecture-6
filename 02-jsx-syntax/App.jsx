import React from 'react';
import JsxRules from './components/JsxRules.jsx';
import JsxExpressions from './components/JsxExpressions.jsx';
import ConditionalRendering from './components/ConditionalRendering.jsx';
import ListRendering from './components/ListRendering.jsx';

/**
 * თემა 2-ის მთავარი გამშვები აპლიკაციის კომპონენტი
 * თემა: JSX სინტაქსი და წესები
 */
function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <header style={{ borderBottom: '2px solid #3182ce', paddingBottom: '12px', marginBottom: '24px' }}>
        <h1 style={{ color: '#2c5282', margin: 0 }}>თემა 2: JSX სინტაქსი და თავისებურებები</h1>
        <p style={{ color: '#718096', margin: '6px 0 0 0' }}>
          TBC Tech School - Full Stack Development (ლექცია 3)
        </p>
      </header>

      <main>
        <JsxRules />
        <JsxExpressions />
        <ConditionalRendering />
        <ListRendering />
      </main>

      <footer style={{ marginTop: '30px', textAlign: 'center', color: '#a0aec0', fontSize: '13px' }}>
        TBC Tech School © JSX სინტაქსის პრაქტიკული მაგალითები
      </footer>
    </div>
  );
}

export default App;

