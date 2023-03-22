import React from 'react';
import classNames from 'classnames/bind';

import styles from './hero.module.scss';
import invoice from './images/hero-invoice.png';

const cx = classNames.bind(styles);

const Hero = () => (
  <section className={cx('hero')}>
    <div className={cx('container')}>
      <div className={cx('hero-container')}>
        <div>
          <span className={cx('text-info')}>For Businesses</span>
          <h2 className={cx('title')}>
            Save money <span className={cx('title-span')}>paying overseas contractors</span>
          </h2>
          <p className={cx('text')}>Pay in crypto, stay in fiat. No crypto on your books.</p>
          <button className={cx('button')}>Create account</button>
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
