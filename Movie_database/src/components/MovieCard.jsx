


const MovieCard = (props) => {
 
  const starCount = Math.round(props.rating);

  const stars = '⭐️'.repeat(starCount);

  return (
    <div>
      <div>
        <img src={props.poster} alt={props.title} />
        <div>{props.genre}</div>
        <div>⭐ {props.rating}</div>
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.year}</p>
        <div>
          <span>{stars}</span>
          <span> ({props.rating}/5)</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
