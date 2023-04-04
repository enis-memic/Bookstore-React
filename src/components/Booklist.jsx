/*eslint-disable*/
import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';
import AddBook from './AddBook';

const BooksList = () => {
  const bookings = useSelector((state) => state.books);
  return (
    <div>
      {bookings &&
        bookings.map((book) => (
          <Books
            id={book.id}
            title={book.title}
            author={book.author}
            key={book.id}
          />
        ))}
      <AddBook />
    </div>
  );
};

export default BooksList;
