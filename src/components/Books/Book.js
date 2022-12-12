import React from 'react';
import PropTypes from 'prop-types';

function Book({
  title, author, handleRemoveBook,
}) {
  return (
    <div className="Book">
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={handleRemoveBook}>Remove Book</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
