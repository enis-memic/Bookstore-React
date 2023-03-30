/* eslint-disable react/prop-types */

import React from 'react';
import styles from './Books.module.css';

const Books = (props) => {
  const { title, author } = props;
  return (
    <div>
      <div className={StyleSheet.book}>
        <div className={styles.description}>
          <p>{title}</p>
          <p>{author}</p>
          <button type="button">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Books;
