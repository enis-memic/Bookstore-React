/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Books.module.css';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;
  const removeBooks = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className={StyleSheet.book}>
        <div className={styles.description}>
          <p>{title}</p>
          <p>{author}</p>
          <button type="button" onClick={removeBooks}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
