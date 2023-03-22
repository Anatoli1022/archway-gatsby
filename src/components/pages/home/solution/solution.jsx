import React from 'react';
import classNames from 'classnames/bind';

import styles from './solution.module.scss';
import marketplaces from './images/solution-marketplaces.svg';
import solution from './images/solution-solution.svg';

const cx = classNames.bind(styles);

const Solution = () => (
  <div className={cx('solution')}>
    <div className={cx('container', 'solution-container')}>
      <div className={cx('marketplaces-content')}>
        <img src={marketplaces} alt="" loading="lazy" aria-hidden="true" />
        <h3 className={cx('title', 'title-marketplaces')}>API for Marketplaces</h3>
        <p className={cx('text')}>
          Expand payment options to let people sell and buy cool things around the world
        </p>
        <a className={cx('link-marketplaces')}>Soon</a>
      </div>
      <div className={cx('solution-content')}>
        <img src={solution} alt="" loading="lazy" aria-hidden="true" />
        <h3 className={cx('title', 'title-solution')}>Solution for DAOs</h3>
        <p className={cx('text')}>
          If you want to pay your DAO contributors, token holders or other DAOs
        </p>
        <a className={cx('link-solution')}>Learn more</a>
      </div>
    </div>
  </div>
);

export default Solution;
