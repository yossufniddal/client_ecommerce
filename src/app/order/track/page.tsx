'use client';

import { TrackOrderTopBar } from '@/components/TrackOrderTopBar';
import styles from './TrackOrder.module.css';

export default function TrackOrderPage() {
  return (
    <main className={styles.main}>
      <TrackOrderTopBar />
      
      <div className={styles.container}>
        
        {/* Interactive Map Section */}
        <section className={styles.mapSection}>
          <div 
            className={styles.mapImage}
            style={{ backgroundImage: `url('/images/map_3d.png')` }}
            aria-label="3D map showing delivery route"
          />
          
          {/* Animated Moped Overlay */}
          <div className={styles.mopedOverlay}>
            <div className={styles.mopedIconWrapper}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                {/* Simplified moped path matching material-symbols-outlined for moped */}
                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v10h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2V7c0-1.1-.9-2-2-2zm-11 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-4-4H8V9h4v5zm4.5-4l-1.5 4h-1l1.5-4h1z"/>
              </svg>
            </div>
          </div>
          
          {/* Estimated Delivery Overlay Card */}
          <div className={styles.deliveryStatusCardWrapper}>
            <div className={styles.deliveryStatusCard}>
              <div className={styles.deliveryInfoRow}>
                <div className={styles.clockIconWrapper}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <p className={styles.deliveryLabel}>ESTIMATED DELIVERY</p>
                  <h2 className={styles.deliveryTime}>Arriving in 12 mins</h2>
                </div>
              </div>
              <div className={styles.truckIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Status Timeline */}
        <section className={styles.sectionCard}>
          <h3 className={styles.sectionTitle}>Delivery Status</h3>
          <div className={styles.timeline}>
            
            {/* Step 1: Order Placed */}
            <div className={`${styles.step} ${styles.stepActive}`}>
              <div className={styles.stepIconWrapper}>
                <div className={styles.stepIconCompleted}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <div className={styles.stepContent}>
                <div>
                  <p className={styles.stepTitle}>Order Placed</p>
                  <p className={styles.stepDesc}>Your order has been received</p>
                </div>
                <span className={styles.stepTime}>10:45 AM</span>
              </div>
            </div>

            {/* Step 2: Order Packed */}
            <div className={`${styles.step} ${styles.stepActive}`}>
              <div className={styles.stepIconWrapper}>
                <div className={styles.stepIconCompleted}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <div className={styles.stepContent}>
                <div>
                  <p className={styles.stepTitle}>Order Packed</p>
                  <p className={styles.stepDesc}>Items are checked and packed</p>
                </div>
                <span className={styles.stepTime}>11:10 AM</span>
              </div>
            </div>

            {/* Step 3: Out for Delivery (Active) */}
            <div className={styles.step}>
              <div className={styles.stepIconWrapper}>
                <div className={styles.stepIconCurrent}>
                  <div className={styles.stepIconPulse}></div>
                </div>
              </div>
              <div className={styles.stepContent}>
                <div>
                  <p className={styles.stepTitleActive}>Out for Delivery</p>
                  <p className={styles.stepDescActive}>Alex is on the way to you</p>
                </div>
                <span className={styles.stepBadgeActive}>ACTIVE</span>
              </div>
            </div>

            {/* Step 4: Delivered */}
            <div className={`${styles.step} ${styles.stepLast}`}>
              <div className={styles.stepIconWrapper}>
                <div className={styles.stepIconPending}></div>
              </div>
              <div className={styles.stepContent}>
                <div>
                  <p className={styles.stepTitlePending}>Delivered</p>
                  <p className={styles.stepDescPending}>Enjoy your fresh groceries!</p>
                </div>
                <span className={styles.stepTimePending}>--:--</span>
              </div>
            </div>

          </div>
        </section>

        {/* Courier Section */}
        <section className={`${styles.sectionCard} ${styles.courierCard}`}>
          <div className={styles.courierRow}>
            <div className={styles.courierInfo}>
              <div className={styles.courierImageWrapper}>
                <img src="/images/courier.png" alt="Courier Alex Johnston" className={styles.courierImage} />
              </div>
              <div>
                <h4 className={styles.courierName}>Alex Johnston</h4>
                <div className={styles.ratingRow}>
                  <svg className={styles.starIcon} viewBox="0 0 24 24" fill="#FACC15" width="16" height="16">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className={styles.ratingScore}>4.8</span>
                  <span className={styles.ratingCount}>(2.4k reviews)</span>
                </div>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.chatButton} aria-label="Chat with courier">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
              <button className={styles.callButton} aria-label="Call courier">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Order Summary Section */}
        <section className={styles.summaryCard}>
          <div className={styles.summaryHeader}>
            <h3 className={styles.sectionTitle}>Order Summary</h3>
            <span className={styles.itemCount}>3 Items</span>
          </div>
          
          <div className={styles.itemList}>
            {/* Item 1 */}
            <div className={styles.itemRow}>
              <div className={styles.itemImageWrapper}>
                <img src="/images/kale.png" alt="Organic Kale Bunch" className={styles.itemImage} />
              </div>
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>Organic Kale Bunch</p>
                <p className={styles.itemMeta}>1 unit • 250g</p>
              </div>
              <p className={styles.itemPrice}>$3.50</p>
            </div>

            {/* Item 2 */}
            <div className={styles.itemRow}>
              <div className={styles.itemImageWrapper}>
                <img src="/images/bananas.png" alt="Fairtrade Bananas" className={styles.itemImage} />
              </div>
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>Fairtrade Bananas</p>
                <p className={styles.itemMeta}>1kg bunch</p>
              </div>
              <p className={styles.itemPrice}>$1.20</p>
            </div>

            {/* Item 3 */}
            <div className={styles.itemRow}>
              <div className={styles.itemImageWrapper}>
                <img src="/images/milk.png" alt="Whole Farm Milk" className={styles.itemImage} />
              </div>
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>Whole Farm Milk</p>
                <p className={styles.itemMeta}>1L Glass Bottle</p>
              </div>
              <p className={styles.itemPrice}>$2.80</p>
            </div>
          </div>

          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total Amount</span>
            <span className={styles.totalPrice}>$7.50</span>
          </div>
        </section>

      </div>
    </main>
  );
}
