import React from 'react';

import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <h1>Sabrina Fernández Zambrano</h1>
    <h2>Front-end Developer</h2>
    <h3><span role="img" aria-label="location">📍</span>Madrid, Spain</h3>
  </header>
);

export default Header;
