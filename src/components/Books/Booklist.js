import React from 'react';
import Book from './Book';

function Booklist() {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
    },
    {
      id: 3,
      title: 'Twilight',
      author: 'Stephenie Meyer',
    },
  ];
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
    </div>
  );
}

export default Booklist;
