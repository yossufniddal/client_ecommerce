import Link from 'next/link';
import styles from './AddressTopBar.module.css';

export const AddressTopBar = () => {
  return (
    <div className={styles.topBar}>
      <Link href="/checkout/verify" className={styles.iconButton} aria-label="Go back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>
      
      <h1 className={styles.title}>Add Delivery Address</h1>
    </div>
  );
};
