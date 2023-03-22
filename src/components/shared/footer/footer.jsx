import React from 'react';
import classNames from 'classnames/bind';

import styles from './footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx('footer')}>
    <div className={cx('container')}>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <h4 className={cx('item-title')}>Product</h4>
          <a href="" className={cx('item-link')}>
            For business
          </a>
          <a href="" className={cx('item-link')}>
            For contractors
          </a>
          <a href="" className={cx('item-link')}>
            For DAOs
          </a>
          <a href="" className={cx('item-link')}>
            About Us
          </a>
        </li>
        <li className={cx('item')}>
          <h4 className={cx('item-title')}>Social</h4>
          <a href="" className={cx('item-link')}>
            Twitter
          </a>
          <a href="" className={cx('item-link')}>
            LinkedIn
          </a>
        </li>
      </ul>
      <div className={cx('wrapper')}>
        <p className={cx('copyright')}>2023, Archway</p>
        <p className={cx('copyright')}>Terms & Conditions, Privacy</p>
      </div>
    </div>
  </footer>
);

export default Footer;
