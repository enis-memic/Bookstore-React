import React from 'react';

const AddBook = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
