import React from 'react';
import Book from './Book';

function Booklist() {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suz Collins',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
}

export default Booklist;
