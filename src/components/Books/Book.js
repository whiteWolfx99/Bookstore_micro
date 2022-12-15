import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Book({
  book, handleRemoveBook,
}) {
  const [progress, setProgress] = useState(0);

  const handleProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  return (
    <div className="Book">
      <div className="text-book">
        <p className="category">{book[0].category}</p>
        <h3 className="title">{book[0].title}</h3>
        <span className="author">{book[0].author}</span>
        <div className="function-button">
          <button className="border-right-1" type="button">Comments</button>
          <button className="border-right-2" type="button" onClick={handleRemoveBook}>Remove</button>
          <button className="border-none" type="button">Edit</button>
        </div>
      </div>
      <div className="flex-items">
        <div className="progress-bar">
          <div className="progress">
            <CircularProgressbar value={progress} />
          </div>
          <div className="progress-percentage">
            <p>
              {progress}
              %
            </p>
            <span>Completed</span>
          </div>
        </div>
        <div className="progress-buttons">
          <p>CURRENT CHAPTER</p>
          <span>Chapter 17</span>
          <button type="button" onClick={handleProgress}>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
