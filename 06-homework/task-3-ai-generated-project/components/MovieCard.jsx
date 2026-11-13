import React from 'react';

/**
 * დავალება 3 (AI პროექტი) - MovieCard კომპონენტი
 * 
 * გენერირებულია AI-ის მიერ და შემოწმებულია სტუდენტის მიერ
 */
function MovieCard({
  title,
  year,
  genre,
  rating,
  posterUrl = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400',
  onAddToWatchlist,
  isInWatchlist = false
}) {
  return (
    <div style={{
      border: '1px solid #334155',
      borderRadius: '10px',
      backgroundColor: '#1e293b',
      color: '#f8fafc',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{ position: 'relative', width: '100%', height: '200px', backgroundColor: '#0f172a' }}>
        <img
          src={posterUrl}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          color: '#fbbf24',
          padding: '4px 8px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: 'bold',
          border: '1px solid #d97706'
        }}>
          ⭐ {rating}
        </span>
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {genre}
            </span>
            <span style={{ fontSize: '12px', color: '#64748b' }}>
              {year}
            </span>
          </div>

          <h3 style={{ margin: '0 0 14px 0', fontSize: '18px', color: '#f1f5f9' }}>
            {title}
          </h3>
        </div>

        <button
          onClick={onAddToWatchlist}
          disabled={isInWatchlist}
          style={{
            width: '100%',
            backgroundColor: isInWatchlist ? '#334155' : '#0284c7',
            color: isInWatchlist ? '#94a3b8' : '#ffffff',
            border: 'none',
            padding: '10px',
            borderRadius: '6px',
            cursor: isInWatchlist ? 'default' : 'pointer',
            fontWeight: 'bold',
            fontSize: '13px',
            transition: 'background-color 0.2s'
          }}
        >
          {isInWatchlist ? 'დამატებულია ✓' : '+ Watchlist-ში დამატება'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;

