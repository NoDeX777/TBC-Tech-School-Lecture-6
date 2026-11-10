import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// იმპორტი თითოეული თემის App კომპონენტიდან
import AppTopic1 from './01-why-react-and-virtual-dom/App.jsx';
import AppTopic2 from './02-jsx-syntax/App.jsx';
import AppTopic3 from './03-components-and-nesting/App.jsx';
import AppTopic4 from './04-props-data-passing/App.jsx';
import AppTopic5 from './05-practical-exercises/App.jsx';

function MasterApp() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: '1. Why React & Virtual DOM', component: <AppTopic1 /> },
    { id: 2, title: '2. JSX სინტაქსი', component: <AppTopic2 /> },
    { id: 3, title: '3. კომპონენტები & ჩაშენება', component: <AppTopic3 /> },
    { id: 4, title: '4. Props - მონაცემთა გადაცემა', component: <AppTopic4 /> },
    { id: 5, title: '5. პრაქტიკული სავარჯიშოები', component: <AppTopic5 /> }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div>
      {/* ზედა სანავიგაციო პანელი თემების გადასართველად */}
      <nav style={{
        backgroundColor: '#0f172a',
        padding: '12px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
      }}>
        <div style={{ color: '#38bdf8', fontWeight: 'bold', fontSize: '16px' }}>
          🎓 TBC Tech School — ლექცია 3
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  backgroundColor: isActive ? '#0284c7' : '#1e293b',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: isActive ? '1px solid #38bdf8' : '1px solid #334155',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: isActive ? 'bold' : 'normal',
                  transition: 'all 0.2s'
                }}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
      </nav>

      {/* არჩეული თემის კონტენტი */}
      <div>
        {currentTab.component}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MasterApp />
  </React.StrictMode>
);

