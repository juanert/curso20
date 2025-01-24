import propTypes from "prop-types";

/**
 * @description Component to show the movie card
 * @param {string} title - Title of the movie
 * @param {string} image - Image of the movie
 * @param {number} releaseYear - Release year of the movie
 */
function MovieCard({ title, image, releaseYear }) {
  return (
    <div className="border rounded-xl p-4 flex flex-col items-center text-center gap-2">
      <img className="h-[150px]" src={image} alt={title} />
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="font-thin text-lg">{releaseYear}</p>
    </div>
  );
}

MovieCard.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  releaseYear: propTypes.number.isRequired,
};

export default MovieCard;
