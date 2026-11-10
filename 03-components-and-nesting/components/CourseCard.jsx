import React from 'react';

/**
 * თემა 3: CourseCard კომპონენტი
 * 
 * ეს არის "ატომარული" კომპონენტი — ერთი კონკრეტული ბარათი.
 * ის გამოიყენება ხელახლა მრავალ ადგილას.
 */
function CourseCard() {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s ease'
    }}>
      <span style={{
        fontSize: '11px',
        fontWeight: 'bold',
        backgroundColor: '#e2e8f0',
        padding: '3px 8px',
        borderRadius: '10px',
        color: '#4a5568'
      }}>
        Frontend
      </span>

      <h3 style={{ margin: '10px 0 6px 0', fontSize: '18px', color: '#2d3748' }}>
        React დეველოპმენტი
      </h3>

      <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#718096' }}>
        Virtual DOM, JSX, კომპონენტური იერარქია და მონაცემთა ნაკადები.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '13px', color: '#3182ce', fontWeight: 'bold' }}>
          ხანგრძლივობა: 3 თვე
        </span>
        <button style={{
          backgroundColor: '#3182ce',
          color: 'white',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '13px'
        }}>
          დეტალურად
        </button>
      </div>
    </div>
  );
}

export default CourseCard;

