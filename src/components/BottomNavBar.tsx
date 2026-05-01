import Link from 'next/link';
import styles from './BottomNavBar.module.css';

interface BottomNavBarProps {
  activeTab: 'shop' | 'search' | 'cart' | 'profile';
}

export const BottomNavBar = ({ activeTab }: BottomNavBarProps) => {
  return (
    <nav className={styles.navBar}>
      <Link href="/" className={`${styles.navItem} ${activeTab === 'shop' ? styles.navItemActive : ''}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: activeTab === 'shop' ? "'FILL' 1" : "'FILL' 0" }}>storefront</span>
        <span className={styles.navLabel}>Shop</span>
      </Link>
      
      <Link href="/search" className={`${styles.navItem} ${activeTab === 'search' ? styles.navItemActive : ''}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: activeTab === 'search' ? "'FILL' 1" : "'FILL' 0" }}>search</span>
        <span className={styles.navLabel}>Search</span>
      </Link>
      
      <Link href="/cart" className={`${styles.navItem} ${activeTab === 'cart' ? styles.navItemActive : ''}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: activeTab === 'cart' ? "'FILL' 1" : "'FILL' 0" }}>shopping_cart</span>
        <span className={styles.navLabel}>Cart</span>
      </Link>
      
      <Link href="/profile" className={`${styles.navItem} ${activeTab === 'profile' ? styles.navItemActive : ''}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: activeTab === 'profile' ? "'FILL' 1" : "'FILL' 0" }}>person</span>
        <span className={styles.navLabel}>Profile</span>
      </Link>
    </nav>
  );
};
