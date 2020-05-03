import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './navigator.module.scss';

const Navigator = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link to="/" activeClassName={styles.active}>
          <FontAwesomeIcon icon={faChild} />
        </Link>
      </li>
      <li>
        <Link to="/projects" activeClassName={styles.active}>
          <FontAwesomeIcon icon={faLaptopCode} />
        </Link>
      </li>
      <li>
        <a href="https://github.com/SabrinaFZ" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/sabrina-fernandez-zambrano/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigator;
