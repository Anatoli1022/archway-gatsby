import React from 'react';
import classNames from 'classnames/bind';

import styles from './header.module.scss';

import header from './images/header-logo.svg';
import { Link } from 'gatsby';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('container', 'header-container')}>
      <Link to="/">
        <img src={header} alt="Archway" loading="eager" />
      </Link>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <Link to="/business" className={cx('link')}>
            business
          </Link>
        </li>
        <li className={cx('item')}>
          <Link to="/dados" className={cx('link')}>
            DAOs
          </Link>
        </li>
        <li className={cx('item')}>
          <Link to="/contractors" className={cx('link')}>
            contractors
          </Link>
        </li>
      </ul>
      <div className={cx('button-wrapper')}>
        <button className={cx('button')}>Log In</button>
        <button className={cx('button')}>Get Started</button>
      </div>
    </div>
  </header>
);

export default Header;
