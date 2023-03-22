import React from 'react';
import classNames from 'classnames/bind';

import styles from './globally.module.scss';
import work from './images/globally-work.png';

const cx = classNames.bind(styles);

const Globally = () => (
  <section className={cx('globally')}>
    <div className={cx('container', 'wrapper')}>
      <h2 className={cx('title')}>Get Paid in Crypto</h2>
      <p className={cx('text')}>Invoice Clients Anywhere in the World</p>
      <p className={cx('sub-text')}>
        Get paid in crypto globally, directly to your wallet. Enjoy faster payments, low commissions
        and security with Archway.
      </p>
      <button className={cx('button')}>Create account</button>
      <a className={cx('link')}>Learn more</a>
      <h3 className={cx('title-sub')}>Track Your Clients, Invoices & Crypto Payments Easily</h3>
      <p className={cx('text-information')}>
        We will provide you with a European bank account to which you will receive fiat. As soon as
        you get it, we will exchange it and send crypto directly to your wallet. Start earning
        crypto today!
      </p>
      <img src={work} alt="" loading="lazy" className={cx('image-work')} />
    </div>
  </section>
);

export default Globally;
