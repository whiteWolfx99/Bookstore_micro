import React from 'react';
import PropTypes from 'prop-types';

function Book({
  book, handleRemoveBook, id,
}) {
  return (
    <li className="Book">
      <h3>{book[0].title}</h3>
      <p>{book[0].author}</p>
      <p>{book[0].category}</p>
      <p>{id}</p>
      <button type="button" onClick={handleRemoveBook}>Remove Book</button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
