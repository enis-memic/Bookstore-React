import React from 'react';
import Books from './Books';
import AddBook from './AddBook';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'One Simple Book',
      author: 'Enis',
    },
    {
      id: 2,
      title: 'Second Book',
      author: 'Enis 2',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Books key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};

export default BookList;
