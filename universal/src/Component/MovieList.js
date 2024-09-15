import React from "react";
import "./movieList.css";

const MovieList = ({ nowShowing, movieDetails }) => {
  return (
    <div className="movie-list-container">
      {/* Now Showing Section */}
      <h1>Now Showing</h1>
      <div className="movies-grid">
        {nowShowing.map((movie, index) => (
          <div key={index} className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.description || "Description not available"}</p>

            {movie.trailer && (
              <div className="trailer-video">
                <iframe
                  src={movie.trailer.replace("watch?v=", "embed/")}
                  title={`${movie.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Movie Details Section */}
      <h1>Movie Details</h1>
      <div className="movies-details-grid">
        {movieDetails.map((movie, index) => (
          <div key={index} className="movie-detail-card">
            <h2>{movie.title}</h2>
            <p>{movie.description || "Description not available"}</p>
            <p>
              <strong>Cast:</strong> {movie.cast?.["Cast:"]}
            </p>

            {/* Cinema and Sessions Info */}
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

            {/* Embedded Trailer Video */}
            {movie.trailer && (
              <div className="trailer-video">
                <iframe
                  src={movie.trailer.replace("watch?v=", "embed/")}
                  title={`${movie.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
