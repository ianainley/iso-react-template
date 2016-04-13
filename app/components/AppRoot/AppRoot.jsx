import React from 'react';
import Head from '../Head';
import classnames from 'classnames/bind';
import styles from './AppRoot.styles.css';

const cx = classnames.bind(styles);

class AppRoot extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <div className={cx('test-class')}>
          Welcome to the app root.
          <span className={cx('nested-test')}>Nested</span>
        </div>
        <span className={cx('nested-test')}>Not Nested</span>
      </div>
    );
  }
}

export default AppRoot;
