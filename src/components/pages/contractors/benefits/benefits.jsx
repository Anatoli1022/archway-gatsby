import React from 'react';
import classNames from 'classnames/bind';

import styles from './benefits.module.scss';

import faster from '../../../../images/faster.svg';
import fees from '../../../../images/fees.svg';
import globally from '../../../../images/globally.svg';
import payments from '../../../../images/payments.svg';

const cx = classNames.bind(styles);

const Benefits = () => (
  <section className={cx('benefits')}>
    <div className={cx('container-small')}>
      <h2 className={cx('title')}>Benefits</h2>
      <p className={cx('text')}>
        With Archway you can accept global payments without restrictions, get paid faster, and pay
        less in commissions
      </p>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={faster} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Crypto Without Hassle</h3>
          <p className={cx('item-text')}>No crypto on accounting books</p>
        </li>
        <li className={cx('item')}>
          <img src={fees} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Accounting Friendly</h3>
          <p className={cx('item-text')}>For your investors</p>
        </li>
        <li className={cx('item')}>
          <img src={globally} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>No Restrictions</h3>
          <p className={cx('item-text')}>Skip the regulatory headaches</p>
        </li>
        <li className={cx('item')}>
          <img src={payments} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>No Restrictions</h3>
          <p className={cx('item-text')}>Skip the regulatory headaches</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Benefits;
