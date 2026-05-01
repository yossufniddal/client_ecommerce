import Link from 'next/link';
import styles from './CheckoutTopBar.module.css';

export const CheckoutTopBar = () => {
  return (
    <div className={styles.topBar}>
      <Link href="/cart" className={styles.iconButton} aria-label="Go back to cart">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>
      
      <div className={styles.logo}>
        <span style={{color: 'var(--color-primary)'}}>FreshMarket</span>
      </div>
      
      {/* Empty div to balance flex space-between */}
      <div className={styles.placeholder}></div>
    </div>
  );
};
