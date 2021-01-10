import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';


const List = props => (
  <section className={styles.component}>
    <Hero titleText={props.title} />
      <div className={styles.description}>
        {props.children}
      </div>
  </section>
);


export default List;

