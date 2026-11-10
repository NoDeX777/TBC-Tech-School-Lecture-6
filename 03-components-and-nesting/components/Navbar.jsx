import React from 'react';

/**
 * თემა 3: Navbar კომპონენტი
 * დამოუკიდებელი, ხელახლა გამოყენებადი სანავიგაციო კომპონენტი
 */
function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1a365d',
      color: 'white',
      padding: '14px 20px',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
        🚀 TBC Tech School
      </div>

      <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
        <a href="#courses" style={{ color: '#e2e8f0', textDecoration: 'none' }}>კურსები</a>
        <a href="#about" style={{ color: '#e2e8f0', textDecoration: 'none' }}>ჩვენს შესახებ</a>
        <a href="#contact" style={{ color: '#e2e8f0', textDecoration: 'none' }}>კონტაქტი</a>
      </div>
    </nav>
  );
}

export default Navbar;

