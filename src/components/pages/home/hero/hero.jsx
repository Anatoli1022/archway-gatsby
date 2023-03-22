import React from 'react';
import classNames from 'classnames/bind';

import styles from './hero.module.scss';
import invoice from '../../../../images/invoice.png';

const cx = classNames.bind(styles);

const Hero = () => (
  <section className={cx('hero')}>
    <div className={cx('container')}>
      <h1 className={cx('title')}>
        Pay people in crypto<span className={cx('title-span')}> while staying in fiat</span>
      </h1>
      <p className={cx('text')}>
        No crypto on accounting books for businesses.Contractors paid globally, hassle-free.
      </p>
      <div className={cx('images-wrapper')}>
        <img src={invoice} className={cx('image')} alt="" loading="eager" aria-hidden="true" />
      </div>
    </div>
  </section>
);

export default Hero;
