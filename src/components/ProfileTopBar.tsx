import Link from 'next/link';
import styles from './ProfileTopBar.module.css';

export const ProfileTopBar = () => {
  return (
    <div className={styles.topBar}>
      <Link href="/" className={styles.iconButton} aria-label="Go back">
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
      
      <h1 className={styles.title}>Profile</h1>
      
      <button className={styles.iconButtonPrimary} aria-label="Settings">
        <span className="material-symbols-outlined">settings</span>
      </button>
    </div>
  );
};
