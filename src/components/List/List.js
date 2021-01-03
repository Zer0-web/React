import React from 'react';
import styles from './List.scss';
import App from '../App.js';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h2>Hello world!</h2>
        <App />
      </section>
    )
  }
}

export default List;
