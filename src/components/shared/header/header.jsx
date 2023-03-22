import React from 'react';
import classNames from 'classnames/bind';

import styles from './header.module.scss';

import header from './images/header-logo.svg';
import { Link } from 'gatsby';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('container', 'header-container')}>
      <a href="/">
        <img src={header} alt="Archway" loading="eager" />
      </a>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <a href="/business" className={cx('link')}>
            business
          </a>
        </li>
        <li className={cx('item')}>
          <a href="/dados" className={cx('link')}>
            DAOs
          </a>
        </li>
        <li className={cx('item')}>
          <a href="/contractors" className={cx('link')}>
            contractors
          </a>
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
