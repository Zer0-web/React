import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';

const List = props => (
      <section className={styles.component}>
        <Hero titleText={props.title} />
      </section>
);


export default List;
