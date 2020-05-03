import React from 'react';
import PropTypes from 'prop-types';

import Navigator from '../Navigator';

import styles from './layout.module.scss';

const Layout = ({ children }) => (
    <>
      <Navigator />
      <main className={styles.main}>
        {children}
      </main>
    </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
