import React from 'react';
import styles from './TopBar.module.css';

export const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <button className={styles.iconButton}>
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      
      <div className={styles.logo}>
        FreshMarket
      </div>
      
      <button className={styles.iconButton}>
        <div className={styles.cartIconWrapper}>
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span className={styles.badge}>3</span>
        </div>
      </button>
    </div>
  );
};
