import React from 'react';
import styles from './Anchor.module.scss';

export default function Anchor({children, href, target = '_blank'}) {
  return (
    <a className={styles.root} href={href} target={target}>
      {children}
    </a>
  );
}