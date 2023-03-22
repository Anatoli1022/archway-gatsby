import React from 'react';
import classNames from 'classnames/bind';

import styles from './get.module.scss';

import globally from '../../../../images/globally.svg';
import faster from '../../../../images/faster.svg';
import payments from '../../../../images/payments.svg';

const cx = classNames.bind(styles);

const Get = () => (
  <section className={cx('get')}>
    <div className={cx('container-small', 'get-container')}>
      <h2 className={cx('title')}>Global Clients</h2>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={globally} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>No monthly fees</h3>
          <p className={cx('text')}>
            Don't miss out on opportunities because of your country or bank situation anymore.
            Invoice any client, anytime, anywhere in the world.
          </p>
        </li>
        <li className={cx('item')}>
          <img src={faster} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Faster payments</h3>
          <p className={cx('text')}>
            With crypto payments, your money gets in your hands faster. Within 24 hours of your
            employer sending payment to Archway, we exchange it and send crypto to your wallet.
          </p>
        </li>
        <li className={cx('item')}>
          <img src={payments} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Direct to your wallet</h3>
          <p className={cx('text')}>
            We are a non-custodial solution. You retain full ownership and control over your money
            at all times. Crypto is sent to your cold wallet or the hot wallet of your choice.
          </p>
        </li>
      </ul>

      <div className={cx('links-container')}>
        <a href="" className={cx('link')}>
          Get Paid in Crypto
        </a>
        <a href="" className={cx('link')}>
          Learn more
        </a>
      </div>
    </div>
  </section>
);

export default Get;
