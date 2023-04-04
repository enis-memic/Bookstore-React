import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';

const BooksList = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (event) => {
    event.preventDefault();
    const item_id = `item${books.length + 1}`;
    const category = 'Fiction'; // hardcoded for example
    dispatch(
      addBook({
        item_id,
        title,
        author,
        category,
      }),
    );
    setTitle('');
    setAuthor('');
  };

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <div className="book-list">
        {books.map((book) => (
          <li className="book-list-item" key={book.item_id}>
            <div className="list-details">
              <h2 className="book-category">{book.category}</h2>
              <h2 className="book-title">{book.title}</h2>
              <h3 className="book-author">{book.author}</h3>
              <div className="list-detail-buttons">
                <button
                  type="button"
                  className="m-button"
                  onClick={() => handleRemoveBook(book.item_id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </div>
      <div className="formSections">
        <h2 className="add-new">ADD NEW BOOK</h2>
        <div className="FormContainer">
          <form onSubmit={handleAddBook}>
            <input
              placeholder="Book title"
              className="AddBook"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              placeholder="Author"
              type="text"
              className="Author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit">ADD BOOK</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
