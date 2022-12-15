import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks, addBookAsync } from '../../redux/books/books';

function AddBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleAddBook = async (title, author) => {
    if (title !== '' || author !== '') {
      const category = 'Action';
      const newBook = {
        item_id: Math.floor(Math.random() * 1000),
        title,
        author,
        category,
      };
      await dispatch(addBookAsync(newBook));
      setTitle('');
      setAuthor('');
      dispatch(fetchBooks());
    }
  };

  return (
    <div className="add-container">
      <h2>ADD NEW BOOK</h2>
      <div className="add-data">
        <div className="data-first">
          <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="data-last">
          <input type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <button onClick={() => handleAddBook(title, author)} type="submit">ADD BOOK</button>
        </div>
      </div>
    </div>
  );
}

export default AddBooks;
