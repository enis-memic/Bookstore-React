import React from 'react';

const Books = (props) => {
  const { title, author } = props;
  return (
    <div>
      <div className="">
        <div className="">
          <p>{title}</p>
          <p>{author}</p>
          <button type="button">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Books;
