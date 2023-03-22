import React from 'react';
import classNames from 'classnames/bind';

import styles from './benefits.module.scss';

import crypto from './images/benefits-crypto.svg';
import accounting from '../../../../images/accounting.svg';
import restrictions from '../../../../images/restrictions.svg';

const cx = classNames.bind(styles);

const Benefits = () => (
  <section className={cx('benefits')}>
    <div className={cx('container-small')}>
      <h2 className={cx('title')}>Benefits</h2>
      <p className={cx('text')}>
        Want to turn investor fiat or other funds into crypto to pay your DAO contributors, token
        holders or other DAOs like you but can’t because of regulation or legal restrictions?
      </p>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={crypto} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Crypto Without Hassle</h3>
          <p className={cx('item-text')}>No crypto on accounting books</p>
        </li>
        <li className={cx('item')}>
          <img src={accounting} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Accounting Friendly</h3>
          <p className={cx('item-text')}>For your investors</p>
        </li>
        <li className={cx('item')}>
          <img src={restrictions} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>No Restrictions</h3>
          <p className={cx('item-text')}>Skip the regulatory headaches</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Benefits;
