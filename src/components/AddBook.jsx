import React, { useState, useEffect } from 'react';

const AddBook = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const storedBookList = JSON.parse(localStorage.getItem('bookList'));
    if (storedBookList) {
      setBookList(storedBookList);
    }
  }, []);

  const handleRemove = (index) => {
    const storedBookList = JSON.parse(localStorage.getItem('bookList'));
    const updatedBookList = storedBookList.filter((_, i) => i !== index);
    localStorage.setItem('bookList', JSON.stringify(updatedBookList));
    setBookList(updatedBookList);
  };
  return (
    <div>
      <div className="book-list">
        {bookList.map((book) => (
          <li className="book-list-item" key={book.id}>
            <div className="list-details">
              <h2 className="book-category">Action</h2>
              <h2 className="book-title">{book.title}</h2>
              <h3 className="book-author">{book.author}</h3>
              <div className="list-detail-buttons">
                <button
                  type="button"
                  className="m-button"
                  onClick={() => handleRemove(book.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default AddBook;
