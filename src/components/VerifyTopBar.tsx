import Link from 'next/link';
import styles from './VerifyTopBar.module.css';

export const VerifyTopBar = () => {
  return (
    <div className={styles.topBar}>
      <Link href="/checkout/sign-in" className={styles.iconButton} aria-label="Go back to sign in">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>
      
      <h1 className={styles.title}>Verify your number</h1>
    </div>
  );
};
