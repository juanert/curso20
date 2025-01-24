import propTypes from "prop-types";

/**
 * @description Component to show the pagination of the movies
 * @param {number} numberPage - Number of the current page
 * @param {function} changePage - Function to change the current page
 * @param {boolean} nextPage - Boolean to know if there is a next page
 */
function Pagination({ numberPage, changePage, nextPage }) {
  return (
    <div className="flex justify-center gap-4 py-8">
      {numberPage > 1 && (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          onClick={() => changePage(numberPage - 1)}
        >
          Previous
        </button>
      )}
      <p className="text-lg">{numberPage}</p>
      {nextPage && (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          onClick={() => changePage(numberPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}

Pagination.propTypes = {
  numberPage: propTypes.number.isRequired,
  changePage: propTypes.func.isRequired,
  nextPage: propTypes.bool.isRequired,
};

export default Pagination;
