import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, addBook, removeBook } from '../redux/books/books';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (books.length === 0) {
    return <div>Loading...</div>;
  }

  const handleAddBook = (event) => {
    event.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        category,
      }),
    ).then(() => {
      setTitle('');
      setAuthor('');
      setCategory('');
      window.location.reload();
    });
  };

  const handleRemoveBook = (item_id) => {
    dispatch(removeBook(item_id));
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
            <select
              id="category"
              name="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">--Please choose category--</option>
              <option value="Fiction">Fiction</option>
              <option value="Nonfiction">Nonfiction</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Mystery">Mystery</option>
              <option value="Thriller">Thriller</option>
              <option value="Romance">Romance</option>
              <option value="Crime">Crime</option>
            </select>
            <button type="submit">ADD BOOK</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
