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
        We provide you with a EUR/GBP bank account, your employer sends the payment, then we quickly
        exchange the money and send the crypto to your wallet.
      </p>
      <p className={cx('text')}>
        Stop paying high fees on platforms like Upwork, Paypal and Western Union. Keep more of your
        money by getting paid in crypto with Archway today!
      </p>
      <button className={cx('button')}>Create account</button>
      <img src={invoice} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
      <ul className={cx('list')}>
        <li>
          <img src={one} alt="" loading="lazy" aria-hidden="true" />
          <p className={cx('item-text')}>
            Create your invoice with Archway. EU accounting compliant. And send to your business
            client.
          </p>
        </li>
        <li>
          <img src={two} alt="" loading="lazy" aria-hidden="true" />
          <p className={cx('item-text')}>
            Business will pay in EUR/GBP to Arhhway EU bank account on your behalf
          </p>
        </li>
        <li>
          <img src={three} alt="" loading="lazy" aria-hidden="true" />
          <p className={cx('item-text')}>
            As soon as we accept fiat payment, we exchange it to required stablecoin (USDT/USDC) and
            send it out to you
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Work;
