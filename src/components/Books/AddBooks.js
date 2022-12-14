import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks, addBookAsync } from '../../redux/books/books';

function AddBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleAddBook = async (title, author) => {
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
