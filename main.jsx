import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// ლექციის თემები
import AppTopic1 from './01-why-react-and-virtual-dom/App.jsx';
import AppTopic2 from './02-jsx-syntax/App.jsx';
import AppTopic3 from './03-components-and-nesting/App.jsx';
import AppTopic4 from './04-props-data-passing/App.jsx';
import AppTopic5 from './05-practical-exercises/App.jsx';

// საშინაო დავალების თემები
import HomeworkTask1 from './06-homework/task-1-manual-coding/App.jsx';
import HomeworkTask2 from './06-homework/task-2-find-and-fix-errors/App.jsx';
import HomeworkTask3 from './06-homework/task-3-ai-generated-project/App.jsx';

function MasterApp() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: '1. Why React & Virtual DOM', component: <AppTopic1 /> },
    { id: 2, title: '2. JSX სინტაქსი', component: <AppTopic2 /> },
    { id: 3, title: '3. კომპონენტები & ჩაშენება', component: <AppTopic3 /> },
    { id: 4, title: '4. Props - მონაცემები', component: <AppTopic4 /> },
    { id: 5, title: '5. პრაქტიკა', component: <AppTopic5 /> },
    { id: 6, title: '📚 დავალება 1: ბიბლიოთეკა', component: <HomeworkTask1 /> },
    { id: 7, title: '🔍 დავალება 2: 7 შეცდომა', component: <HomeworkTask2 /> },
    { id: 8, title: '🎬 დავალება 3: AI MovieHub', component: <HomeworkTask3 /> }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div>
      {/* ზედა სანავიგაციო პანელი */}
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
        <div style={{ color: '#38bdf8', fontWeight: 'bold', fontSize: '15px' }}>
          🎓 TBC Tech School — ლექცია 3 & დავალებები
        </div>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            const isHomework = tab.id >= 6;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  backgroundColor: isActive
                    ? (isHomework ? '#7c3aed' : '#0284c7')
                    : '#1e293b',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: isActive
                    ? (isHomework ? '1px solid #c084fc' : '1px solid #38bdf8')
                    : '1px solid #334155',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '12px',
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

      {/* აქტიური კომპონენტის რენდერინგი */}
      <div style={{ minHeight: 'calc(100vh - 60px)' }}>
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
