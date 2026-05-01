import Link from 'next/link';
import styles from './FilteredTopBar.module.css';

export const FilteredTopBar = () => {
  return (
    <div className={styles.topBar}>
      <Link href="/" className={styles.iconButton} aria-label="Go back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>
      
      <div className={styles.logo}>
        <span style={{color: 'var(--color-primary)'}}>Fresh</span>
        <span style={{color: 'var(--color-text-primary)'}}>Market</span>
      </div>
      
      <button className={styles.iconButton} aria-label="Search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  );
};
