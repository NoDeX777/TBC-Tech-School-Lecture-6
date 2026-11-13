import React from 'react';

/**
 * დავალება 1 (ხელით დასაწერი) - LibraryHeader კომპონენტი
 * 
 * იღებს:
 * - title: ბიბლიოთეკის სათაური
 * - totalBooks: წიგნების საერთო რაოდენობა
 */
function LibraryHeader({ title = 'TBC Tech ბიბლიოთეკა', totalBooks = 0 }) {
  return (
    <header style={{
      backgroundColor: '#1e293b',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
      <div>
        <h2 style={{ margin: 0, fontSize: '22px', color: '#38bdf8' }}>
          📚 {title}
        </h2>
        <p style={{ margin: '4px 0 0 0', color: '#94a3b8', fontSize: '14px' }}>
          ონლაინ წიგნების კატალოგი — React Props & კომპონენტების სავარჯიშო
        </p>
      </div>

      <div style={{
        backgroundColor: '#334155',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#f8fafc'
      }}>
        სულ წიგნები: <span style={{ color: '#38bdf8' }}>{totalBooks}</span>
      </div>
    </header>
  );
}

export default LibraryHeader;

