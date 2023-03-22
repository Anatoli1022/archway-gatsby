import React from 'react';
import classNames from 'classnames/bind';

import styles from './crypto.module.scss';

import fees from '../../../../images/fees.svg';
import regulatory from '../../../../images/regulatory.svg';
import payments from './images/crypto-payments.svg';

const cx = classNames.bind(styles);

const Crypto = () => (
  <section className={cx('crypto')}>
    <div className={cx('container-small')}>
      <h2 className={cx('title')}>Why Pay in Crypto?</h2>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={fees} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>No monthly fees</h3>
          <p className={cx('text')}>
            Businesses save money with payments, while contractors keep more of their hard earned
            money in their pocket.
          </p>
        </li>
        <li className={cx('item')}>
          <img src={regulatory} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Easy setup</h3>
          <p className={cx('text')}>
            So easy to use even grandma could do it! Full onboarding support available for both
            businesses and contractors.
          </p>
        </li>
        <li className={cx('item')}>
          <img src={payments} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Fiat payments for businesses</h3>
          <p className={cx('text')}>
            Enjoy the comfort of paying crypto without having it on your books. Fiat Payments
            available in: EUR/USD/GBP
          </p>
        </li>
      </ul>

      <div className={cx('links-container')}>
        <a href="" className={cx('link')}>
          Pay with crypto
        </a>
        <a href="" className={cx('link')}>
          Learn more
        </a>
      </div>
    </div>
  </section>
);

export default Crypto;
