import React from 'react';
import classNames from 'classnames/bind';

import styles from './work.module.scss';

import invoice from '../../../../images/invoice.png';
import one from '../../../../images/one.svg';
import two from '../../../../images/two.svg';
import three from '../../../../images/three.svg';

const cx = classNames.bind(styles);

const Work = () => (
  <section className={cx('work')}>
    <div className={cx('container', 'wrapper')}>
      <h2 className={cx('title')}>How it works</h2>
      <p className={cx('text')}>
        Archway Finance lets you pay your contractors with crypto using EUR or GBP while keeping
        crypto off your books. Businesses pay in fiat, contractors get paid in crypto. 
      </p>
      <button className={cx('button')}>Create account</button>
      <img src={invoice} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
      <ul className={cx('list')}>
        <li>
          <img src={one} alt="" loading="lazy" aria-hidden="true" />
          <p className={cx('item-text')}>
            Contractor creates an invoice and sends it to the business
          </p>
        </li>
        <li>
          <img src={two} alt="" loading="lazy" aria-hidden="true" />
          <p className={cx('item-text')}>Business transfers EUR/GBP to Archway banking accounts</p>
        </li>
        <li>
          <img src={three} alt="" loading="lazy" aria-hidden="true" />
          <p className={cx('item-text')}>
            Archway accepts fiat payment, exchanges it for crypto and sends it out to the contractor
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Work;
