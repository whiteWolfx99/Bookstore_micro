import React from 'react';
import AddBooks from '../../components/Books/AddBooks';
import Booklist from '../../components/Books/Booklist';

const Books = () => (
  <div className="body-container">
    <Booklist />
    <AddBooks />
  </div>
);

export default Books;
