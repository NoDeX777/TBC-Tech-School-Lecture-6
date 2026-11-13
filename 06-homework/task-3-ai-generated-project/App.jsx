import React, { useState } from 'react';
import MovieCard from './components/MovieCard.jsx';
import FilterBar from './components/FilterBar.jsx';
import WatchlistSummary from './components/WatchlistSummary.jsx';

/**
 * დავალება 3: MovieHub - AI-ით გენერირებული მინი-პროექტი
 */
function App() {
  const [selectedGenre, setSelectedGenre] = useState('ყველა');
  const [watchlist, setWatchlist] = useState([]);

  const genres = ['ყველა', 'Sci-Fi', 'დრამა', 'ექშენი', 'ანიმაცია'];

  const movies = [
    {
      id: 1,
      title: 'ინსეფშენი (Inception)',
      year: 2010,
      genre: 'Sci-Fi',
      rating: 8.8,
      posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400'
    },
    {
      id: 2,
      title: 'ინტერსტელარი (Interstellar)',
      year: 2014,
      genre: 'Sci-Fi',
      rating: 8.7,
      posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400'
    },
    {
      id: 3,
      title: 'ბნელი რაინდი (The Dark Knight)',
      year: 2008,
      genre: 'ექშენი',
      rating: 9.0,
      posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400'
    },
    {
      id: 4,
      title: 'სპაიდერ-მენი: სამყაროს მიღმა',
      year: 2023,
      genre: 'ანიმაცია',
      rating: 8.7,
      posterUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400'
    }
  ];

  const handleAddToWatchlist = (movie) => {
    if (!watchlist.includes(movie.id)) {
      setWatchlist([...watchlist, movie.id]);
    }
  };

  const handleClearWatchlist = () => {
    setWatchlist([]);
  };

  const filteredMovies = selectedGenre === 'ყველა'
    ? movies
    : movies.filter((m) => m.genre === selectedGenre);

  return (
    <div style={{ maxWidth: '960px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <header style={{ borderBottom: '2px solid #38bdf8', paddingBottom: '16px', marginBottom: '20px' }}>
        <h1 style={{ color: '#0284c7', margin: 0 }}>🎬 MovieHub — AI Mini-Project</h1>
        <p style={{ color: '#64748b', margin: '6px 0 0 0' }}>
          დავალება 3: AI ასისტენტის დახმარებით შექმნილი კომპონენტები და Props არქიტექტურა
        </p>
      </header>

      <WatchlistSummary
        watchlistCount={watchlist.length}
        onClearWatchlist={handleClearWatchlist}
      />

      <FilterBar
        genres={genres}
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px'
      }}>
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
            rating={movie.rating}
            posterUrl={movie.posterUrl}
            isInWatchlist={watchlist.includes(movie.id)}
            onAddToWatchlist={() => handleAddToWatchlist(movie)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

