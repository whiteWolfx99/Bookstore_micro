import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

function AddBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleAddBook = (title, author) => {
    const id = Math.floor(Math.random() * 100);
    const newBook = {
      id,
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button onClick={() => handleAddBook(title, author)} type="submit">Add Book</button>
    </div>
  );
}

export default AddBooks;
