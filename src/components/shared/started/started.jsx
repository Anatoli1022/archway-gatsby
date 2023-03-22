import React from 'react';
import classNames from 'classnames/bind';

import styles from './started.module.scss';

import quote from './images/started-quote.svg';

const cx = classNames.bind(styles);

const Started = () => (
  <section className={cx('started')}>
    <div className={cx('container')}>
      <h2 className={cx('title-started')}>Get started today!</h2>
      <div className={cx('container-started')}>
        <div className={cx('information')}>
          <h3 className={cx('title')}>Businesses</h3>
          <p className={cx('text')}>
            It's time to end your contractor payment nightmares and save money by paying in crypto.{' '}
          </p>
          <a href="" className={cx('link', 'link-businesses')}>
            Pay in Crypto
          </a>
        </div>
        <div className={cx('information')}>
          <h3 className={cx('title')}>Contractors</h3>
          <p className={cx('text')}>
            Keep more of your money in your pocket and get paid faster (even with global payments)
            when you get paid in crypto.
          </p>
          <a href="" className={cx('link', 'link-contractors')}>
            Get Paid in Crypto
          </a>
        </div>
      </div>
      <div className={cx('wrapper-quote')}>
        <img src={quote} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
        <blockquote className={cx('blockquote')}>
          We didn't expect to use Archway for all our contractors so quickly
        </blockquote>
        <cite className={cx('cite')}>
          Kirthy Iver <span className={cx('cite-span')}>CEO Comico, Game Dev, Germany</span>
        </cite>
      </div>
    </div>
  </section>
);

export default Started;
