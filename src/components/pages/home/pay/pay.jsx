import React from 'react';
import classNames from 'classnames/bind';

import styles from './pay.module.scss';
import invoice from './images/pay-invoice.png';
import map from './images/pay-map.jpg';

const cx = classNames.bind(styles);

const Pay = () => (
  <section className={cx('pay')}>
    <div className={cx('container', 'wrapper')}>
      <div className={cx('pay-container')}>
        <div className={cx('paid-wrapper')}>
          <span className={cx('text-info')}>For Businesses</span>
          <h2 className={cx('title')}>Pay in Crypto, Stay in Fiat</h2>
          <p className={cx('text')}>Contractors paid globally without any crypto on your books</p>
          <a className={cx('link', 'link-pay')}>Pay with crypto</a>
          <a className={cx('link', 'link-learn')}>Learn more</a>
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
      <figure>
        <img src={map} alt="map" loading="lazy" />
        <figcaption className={cx('figcaption')}>
          Archway allows overseas contractors to issue invoices with EU bank details
        </figcaption>
      </figure>
    </div>
  </section>
);

export default Pay;
