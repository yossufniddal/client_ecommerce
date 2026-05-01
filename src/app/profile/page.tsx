'use client';

import Link from 'next/link';
import { ProfileTopBar } from '@/components/ProfileTopBar';
import { BottomNavBar } from '@/components/BottomNavBar';
import styles from './Profile.module.css';

export default function ProfilePage() {
  return (
    <main className={styles.main}>
      <ProfileTopBar />
      
      {/* Profile Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatarWrapper}>
            <img 
              src="/images/profile_pic.png" 
              alt="Alex Johnston" 
              className={styles.avatarImage} 
            />
          </div>
          <div className={styles.editBadge}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>
          </div>
        </div>
        
        <h2 className={styles.profileName}>Alex Johnston</h2>
        
        <div className={styles.memberPill}>
          <span className={styles.memberText}>PLATINUM MEMBER</span>
        </div>
      </section>

      <div className={styles.container}>
        
        {/* Stats Bento Grid */}
        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>24</span>
            <span className={styles.statLabel}>Orders placed</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>1.2k</span>
            <span className={styles.statLabel}>Points earned</span>
          </div>
        </section>

        {/* Menu List Section */}
        <section className={styles.menuSection}>
          <div className={styles.menuCard}>
            
            {/* My Orders */}
            <Link href="/order/track" className={styles.menuItem}>
              <div className={styles.menuItemLeft}>
                <div className={styles.menuIconWrapper}>
                  <span className="material-symbols-outlined">receipt</span>
                </div>
                <span className={styles.menuItemLabel}>My Orders</span>
              </div>
              <span className={`material-symbols-outlined ${styles.chevronRight}`}>chevron_right</span>
            </Link>

            {/* Saved Addresses */}
            <Link href="/checkout/select-address" className={styles.menuItem}>
              <div className={styles.menuItemLeft}>
                <div className={styles.menuIconWrapper}>
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className={styles.menuItemLabel}>Saved Addresses</span>
              </div>
              <span className={`material-symbols-outlined ${styles.chevronRight}`}>chevron_right</span>
            </Link>

            {/* Help Center */}
            <Link href="#" className={`${styles.menuItem} ${styles.menuItemLast}`}>
              <div className={styles.menuItemLeft}>
                <div className={styles.menuIconWrapper}>
                  <span className="material-symbols-outlined">help_outline</span>
                </div>
                <span className={styles.menuItemLabel}>Help Center</span>
              </div>
              <span className={`material-symbols-outlined ${styles.chevronRight}`}>chevron_right</span>
            </Link>
            
          </div>

          {/* Logout Button */}
          <button className={styles.logoutButton}>
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </section>

      </div>

      <BottomNavBar activeTab="profile" />
    </main>
  );
}
