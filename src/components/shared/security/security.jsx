import React from 'react';
import classNames from 'classnames/bind';

import styles from './security.module.scss';
import security from './images/security-security.svg';
import support from './images/security-support.svg';

const cx = classNames.bind(styles);

const Security = () => (
  <div className={cx('security')}>
    <div className={cx('container', 'security-container')}>
      <div className={cx('container-info')}>
        <img src={security} alt="" loading="lazy" aria-hidden="true" />
        <div className={cx('content')}>
          <h3 className={cx('title')}>World Class Security</h3>
          <p className={cx('text')}>
            Experience Matters. We have been building crypto-related projects since 2014 with the
            highest standards.
          </p>
        </div>
      </div>
      <div className={cx('container-support')}>
        <img src={support} alt="" loading="lazy" aria-hidden="true" />
        <div className={cx('content')}>
          <h3 className={cx('title')}>World Class Support</h3>
          <p className={cx('text')}>
            Our experts are here to take you by the hand and answer any questions or concerns from
            the very beginning.
          </p>
          <a href="" className={cx('link')}>
            Book a call
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Security;
