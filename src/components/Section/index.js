import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './section.module.scss';

const Section = ({
  className, title, items, render, childrenStyles, active
}) => {
  const [isOpen, setOpen] = useState(active);
  const sectionRef = useRef(null);

  useEffect(
    () => {
      if (sectionRef.current) {
        window.scrollTo({
          behavior: 'smooth',
          top: sectionRef.current.offsetTop
        });
      }
    },
    [isOpen]
  );

  const toggleSection = () => {
    setOpen(!isOpen);
  };

  return (
    <section ref={sectionRef} className={`${className} ${styles.section}`}>
      <h3 onClick={toggleSection}>
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </h3>
      <div className={`${styles.items} ${childrenStyles.items}`}>
        {
          items && isOpen ? items.map((item, index) => (
            render(item, index, styles)
          )) : null
        }
      </div>
    </section>
  );
};

Section.defaultProps = {
  className: '',
  title: 'Title',
  items: [],
  render: () => {},
  childrenStyles: {},
  active: false
};

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  render: PropTypes.func.isRequired,
  childrenStyles: PropTypes.object,
  active: PropTypes.bool
};

export default Section;
