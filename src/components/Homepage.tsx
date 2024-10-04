import * as React from 'react';
import RSLogo from './svg/rs-logo';
import LongS from './svg/long-s';
import * as styles from '../styles/homepage.module.css';

interface HomepageProps {}

export default function Homepage(props: HomepageProps) {
  return (
    <>
      <div className={styles.longSWrapper}>
        <LongS className={styles.longS} />
      </div>
      <div className={styles.root}>
        <RSLogo className={styles.logo} />
        <div className={styles.textContainer}>
          <p>
            Website coming soon... <br />
            stay tuned!
          </p>
          <p className={styles.message}>
            Interested in a MTB skills lesson or coaching session? <br />
            Give us a call or text us at{' '}
            <a className="tel" href="tel:+17045599202">
              +1 (704) 559-9202
            </a>
            {''}.
          </p>
        </div>
      </div>
    </>
  );
}
