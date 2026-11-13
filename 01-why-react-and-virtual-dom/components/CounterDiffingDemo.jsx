import React, { useState } from 'react';

/**
 * თემა 1: Virtual DOM Reconciliation / Diffing დემონსტრაცია
 * 
 * ღილაკზე დაჭერისას იცვლება მხოლოდ `counter` ცვლადი.
 * ბრაუზერის DevTools Elements ტაბში ჩანს, რომ მხოლოდ რიცხვის შემცველი ტექსტური კვანძი
 * ციმციმებს (იცვლება), ხოლო დანარჩენი UI უცვლელი რჩება!
 */
function CounterDiffingDemo() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px' }}>
      <h3 style={{ color: '#2b6cb0' }}>3. Diffing-ის პრაქტიკული დემონსტრაცია</h3>
      <p>
        დააკვირდით ბრაუზერის ინსპექტორში: ღილაკზე დაჭერისას განახლდება <strong>მხოლოდ</strong> რიცხვი,
        მთლიანი კომპონენტი თავიდან არ იხატება DOM-ში.
      </p>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <p style={{ fontSize: '18px', margin: '0 0 10px 0' }}>
          მრიცხველი: <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#3182ce' }}>{count}</span>
        </p>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#3182ce',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '8px'
          }}
        >
          გაზრდა (+1)
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            backgroundColor: '#e2e8f0',
            color: '#4a5568',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          განულება
        </button>
      </div>

      <small style={{ color: '#718096' }}>
        * ეს არის React-ის უპირატესობა: ოპტიმიზებული და მაღალი წარმადობის ინტერფეისი.
      </small>
    </div>
  );
}

export default CounterDiffingDemo;

