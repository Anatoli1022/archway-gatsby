import React from 'react';
import classNames from 'classnames/bind';

import styles from './work.module.scss';

import work from './images/daos-work.png';
import compliant from './images/daos-compliant.svg';

const cx = classNames.bind(styles);

const Work = () => (
  <section className={cx('work')}>
    <div className={cx('container', 'wrapper')}>
      <h2 className={cx('title')}>How it works</h2>
      <p className={cx('text')}>
        With Archway Finance you can stay aligned to the principles of your DAO. Receive EUR/GBP
        fiat funds and turn them into crypto for all your payment needs without any crypto on your
        books!
      </p>
      <p className={cx('text')}>
        Skip the regulatory nightmare and trust our secure, EU compliant platform to turn fiat into
        crypto for all your global payment needs.
      </p>
      <button className={cx('button')}>Create account</button>
      <img src={compliant} alt="EU compliant!" loading="lazy" className={cx('image-compliant')} />
      <img src={work} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
    </div>
  </section>
);

export default Work;
