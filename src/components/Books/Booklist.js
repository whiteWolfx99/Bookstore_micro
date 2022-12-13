import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import Book from './Book';

function Booklist() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          handleRemoveBook={() => handleRemoveBook(book.id)}
        />
      ))}
    </div>
  );
}

export default Booklist;
