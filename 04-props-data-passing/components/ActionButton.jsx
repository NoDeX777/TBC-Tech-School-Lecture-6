import React from 'react';

/**
 * თემა 4: ფუნქციის გადაცემა Props-ით (Callback Props / Event Handling)
 * 
 * მონაცემთა ნაკადი React-ში არის ზემოდან ქვემოთ (Unidirectional).
 * თუ შვილ კომპონენტს სურს მშობელ კომპონენტს აცნობოს მოვლენის შესახებ,
 * მშობელი გადასცემს ფუნქციას props-ის სახით, რომელსაც შვილი გამოიძახებს.
 */
function ActionButton({ label, onClick, variant = 'primary' }) {
  const isPrimary = variant === 'primary';

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isPrimary ? '#3182ce' : '#e2e8f0',
        color: isPrimary ? '#ffffff' : '#2d3748',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        transition: 'background-color 0.2s',
        marginRight: '8px'
      }}
    >
      {label}
    </button>
  );
}

export default ActionButton;

