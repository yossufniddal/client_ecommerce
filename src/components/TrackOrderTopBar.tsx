import Link from 'next/link';
import styles from './TrackOrderTopBar.module.css';

export const TrackOrderTopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.leftSection}>
        <Link href="/" className={styles.iconButton} aria-label="Go back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
        <h1 className={styles.title}>Order #GR-4829</h1>
      </div>
      
      <button className={styles.iconButton} aria-label="More options">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      </button>
    </div>
  );
};
