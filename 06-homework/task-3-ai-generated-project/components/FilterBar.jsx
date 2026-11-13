import React from 'react';

/**
 * დავალება 3 (AI პროექტი) - FilterBar კომპონენტი
 * 
 * ჟანრების ფილტრი
 */
function FilterBar({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div style={{
      display: 'flex',
      gap: '8px',
      overflowX: 'auto',
      paddingBottom: '12px',
      marginBottom: '20px'
    }}>
      {genres.map((genre) => {
        const isSelected = genre === selectedGenre;
        return (
          <button
            key={genre}
            onClick={() => onSelectGenre(genre)}
            style={{
              backgroundColor: isSelected ? '#38bdf8' : '#1e293b',
              color: isSelected ? '#0f172a' : '#94a3b8',
              border: isSelected ? '1px solid #38bdf8' : '1px solid #334155',
              padding: '6px 14px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: isSelected ? 'bold' : 'normal',
              whiteSpace: 'nowrap'
            }}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBar;

