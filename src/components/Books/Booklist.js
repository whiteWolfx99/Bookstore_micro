import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookAsync, fetchBooks } from '../../redux/books/books';
import Book from './Book';

function Booklist() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = async (id) => {
    await dispatch(removeBookAsync(id));
    dispatch(fetchBooks());
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <ul key={books.item_id}>
        {Object.keys(books).map((key) => (
          <Book
            key={key}
            id={key}
            book={books[key]}
            handleRemoveBook={() => handleRemoveBook(key)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Booklist;
