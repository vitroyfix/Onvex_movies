const MovieDetails = (props) => {
  const titles = [
    "Plot", "Director", "Writer", "Genre", "Language", "Cast", "Awards"
  ];

  return (
    <section className="movie-card">
      <div className="movie-card__poster">
        <img src={props.poster} alt={props.title} className="poster-image" />
      </div>
      <div>
        <button>X</button>
      </div>

      <div className="movie-card__title">
        <h3>{props.title}</h3>
      </div>

      <div className="movie-card__badges">
        <span className="badge badge-year">{props.badgeYear}</span>
        <span className="badge badge-rating">{props.badgeRating}</span>
        <span className="badge badge-runtime">{props.badgeRuntime}</span>
      </div>

      <div className="movie-card__rating">
        <strong>{props.rating}</strong> {props.votes}
      </div>

      <div className="movie-card__sections">
        {titles.map((title, index) => (
          <h4 key={index} className="section-title">{title}</h4>
        ))}
      </div>

      <div className="movie-card__details">
        <div className="detail-block">
          <h4 className="detail-title">{titles[0]}</h4>
          <p className="detail-content">{props.plot}</p>
        </div>

        <div className="detail-block">
          <h4 className="detail-title">{titles[1]}</h4>
          <p className="detail-content">{props.director}</p>
        </div>

        <div className="detail-block">
          <h4 className="detail-title">{titles[2]}</h4>
          <p className="detail-content">{props.writer}</p>
        </div>

        <div className="detail-block">
          <h4 className="detail-title">{titles[3]}</h4>
          <p className="detail-content">{props.genre}</p>
        </div>

        <div className="detail-block">
          <h4 className="detail-title">{titles[4]}</h4>
          <p className="detail-content">{props.language}</p>
        </div>

        <div className="detail-block">
          <h4 className="detail-title">{titles[5]}</h4>
          <p className="detail-content">{props.cast}</p>
        </div>

        <div className="detail-block">
          <h4 className="detail-title">{titles[6]}</h4>
          <p className="detail-content">{props.awards}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
