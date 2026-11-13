import React from 'react';
import BuggyUserCard from './components/BuggyUserCard.jsx';
import BuggyNotification from './components/BuggyNotification.jsx';

/**
 * დავალება 2: შეასწორე შეცდომები
 * 
 * 🔍 პირობა:
 * ამ დავალებაში (App.jsx, BuggyUserCard.jsx, BuggyNotification.jsx)
 * დაშვებულია ზუსტად 7 შეცდომა (Virtual DOM, JSX წესები, კომპონენტის დასახელება და Props-ის გამოყენება).
 * 
 * იპოვეთ და შეასწორეთ 7-ვე შეცდომა ისე, რომ აპლიკაციამ უშეცდომოდ იმუშაოს ბრაუზერში!
 */
function App() {
  const students = [
    {
      id: 1,
      name: 'ლევან ბერიძე',
      role: 'სტუდენტი',
      score: 88,
      subjects: ['React საფუძვლები', 'JSX სინტაქსი', 'Git']
    },
    {
      id: 2,
      name: 'თამარ გელოვანი',
      role: 'სტაჟიორი',
      score: 95,
      subjects: ['Virtual DOM', 'Component Architecture', 'JavaScript ES6+']
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <header style={{ borderBottom: '2px solid #ef4444', paddingBottom: '12px', marginBottom: '20px' }}>
        <h1 style={{ color: '#b91c1c', margin: 0 }}>დავალება 2: შეასწორე 7 შეცდომა კოდში</h1>
        <p style={{ color: '#64748b', margin: '6px 0 0 0' }}>
          ყურადღებით შეამოწმეთ კონსოლი და გაასწორეთ JSX-ისა და Props-ის წესების დარღვევები.
        </p>
      </header>

      <BuggyNotification message="ყურადღება: კოდში დამალულია ზუსტად 7 შეცდომა!" type="warning" />

      <main style={{ marginTop: '20px' }}>
        {students.map((student) => (
          <BuggyUserCard
            key={student.id}
            name={student.name}
            role={student.role}
            score={student.score}
            subjects={student.subjects}
          />
        ))}
      </main>
    </div>
  );
}

export default App;

