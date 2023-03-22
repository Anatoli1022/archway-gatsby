import React from 'react';
import classNames from 'classnames/bind';

import styles from './hero.module.scss';
import invoice from './images/hero-paid.png';

const cx = classNames.bind(styles);

const Hero = () => (
  <section className={cx('hero')}>
    <div className={cx('container')}>
      <div className={cx('hero-container')}>
        <div>
          <span className={cx('text-info')}>For Businesses</span>
          <h2 className={cx('title')}>
            Get paid in crypto&nbsp;globally.{' '}
            <span className={cx('title-span')}>Easy and Fast.</span>
          </h2>
          <p className={cx('text')}>
            As an overseas contractor and freelancer, you deserve to keep more of your earnings.
          </p>
          <button className={cx('button')}>Make invoice</button>
        </div>
        <div>
          <img
            src={invoice}
            alt=""
            className={cx('invoice-image')}
            loading="lazy"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
