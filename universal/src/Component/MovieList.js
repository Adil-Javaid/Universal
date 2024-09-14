import React from 'react';
import './movieList.css';

const MovieList = ({ nowShowing, movieDetails }) => {
  return (
    <div className="movie-list-container">
      <h1>Now Showing</h1>
      <div className="movies-grid">
        {nowShowing.map((movie, index) => (
          <div key={index} className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.description || 'Description not available'}</p>
            {movie.trailer && (
              <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
                <button className="trailer-btn">Watch Trailer</button>
              </a>
            )}
          </div>
        ))}
      </div>

      <h1>Movie Details</h1>
      <div className="movies-details-grid">
        {movieDetails.map((movie, index) => (
          <div key={index} className="movie-detail-card">
            <h2>{movie.title}</h2>
            <p>{movie.description || 'Description not available'}</p>
            <p><strong>Cast:</strong> {movie.cast["Cast:"]}</p>
            {movie.cinemas.map((cinema, cinemaIndex) => (
              <div key={cinemaIndex} className="cinema-info">
                <h3>{cinema.cinema_name}</h3>
                {cinema.sessions.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="session-info">
                    <strong>{session.session_date}:</strong>
                    {session.session_times.map((time, timeIndex) => (
                      <span key={timeIndex} className="session-time">
                        {time}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            {movie.trailer && (
              <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
                <button className="trailer-btn">Watch Trailer</button>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
