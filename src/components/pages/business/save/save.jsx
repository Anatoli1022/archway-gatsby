import React from 'react';
import classNames from 'classnames/bind';

import styles from './save.module.scss';

import accounting from '../../../../images/accounting.svg';
import regulatory from '../../../../images/regulatory.svg';
import restrictions from '../../../../images/restrictions.svg';
import payments from '../../../../images/payments.svg';

const cx = classNames.bind(styles);

const Save = () => (
  <section className={cx('save')}>
    <div className={cx('container-small')}>
      <div className={cx('save-container')}>
        <h2 className={cx('title')}>Save Money</h2>

        <div>
          <span className={cx('span')}>No monthly fees</span>
          <span className={cx('span')}>Low commission ~ 2%</span>
        </div>
      </div>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={accounting} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Accounting Friendly</h3>
          <p className={cx('text')}>
            Pay invoices using EUR or GBP. We deliver crypto to contractors.
          </p>
          <p className={cx('text')}>No crypto on accounting books</p>
        </li>
        <li className={cx('item')}>
          <img src={regulatory} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Regulatory Compliance</h3>
          <p className={cx('text')}>EU Licensed enjoy peace of mind</p>
          <p className={cx('text')}>Regulatory compliant</p>
        </li>
        <li className={cx('item')}>
          <img src={restrictions} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>No Restrictions</h3>
          <p className={cx('text')}>Send payments globally</p>
        </li>
        <li className={cx('item')}>
          <img src={payments} alt="" loading="lazy" aria-hidden="true" />
          <h3 className={cx('item-title')}>Faster Payments</h3>
          <p className={cx('text')}>Less time to process invoices</p>
          <p className={cx('text')}>Contractors receive their money faster</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Save;
