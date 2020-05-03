import React from 'react';
import PropTypes from 'prop-types';

import styles from './card.module.scss';

const Card = ({ className, children }) => (
  <div className={`${styles.card} ${className}`}>
    <div>
      {children}
    </div>
  </div>
);

Card.defaultProps = {
  className: ''
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Card;
