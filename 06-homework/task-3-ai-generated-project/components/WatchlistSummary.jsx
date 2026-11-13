import React from 'react';

/**
 * დავალება 3 (AI პროექტი) - WatchlistSummary კომპონენტი
 * 
 * აჩვენებს არჩეული ფილმების შეჯამებას
 */
function WatchlistSummary({ watchlistCount, onClearWatchlist }) {
  return (
    <div style={{
      backgroundColor: '#0f172a',
      border: '1px solid #1e293b',
      borderRadius: '8px',
      padding: '14px 20px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#f8fafc'
    }}>
      <div>
        <span style={{ fontSize: '15px' }}>
          🎬 თქვენს Watchlist-შია: <strong style={{ color: '#38bdf8' }}>{watchlistCount}</strong> ფილმი
        </span>
      </div>

      {watchlistCount > 0 && (
        <button
          onClick={onClearWatchlist}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #ef4444',
            color: '#f87171',
            padding: '4px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          გასუფთავება
        </button>
      )}
    </div>
  );
}

export default WatchlistSummary;

