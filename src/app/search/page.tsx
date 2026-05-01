import { TopBar } from '@/components/TopBar';
import { SearchInput } from '@/components/SearchInput';
import { RecentlyViewedCard } from '@/components/RecentlyViewedCard';
import styles from './Search.module.css';

const trendingSearches = [
  'Avocados', 'Almond Milk', 'Organic Chicken', 'Greek Yogurt', 'Paper Towels'
];

const recentlyViewed = [
  {
    id: '1',
    title: 'Organic Blueberries',
    price: 4.99,
    weight: '6 oz pack',
    imageUrl: '/images/product_detail_design.png', // reusing an image for now
  },
  {
    id: '2',
    title: 'Hass Avocado',
    price: 1.50,
    weight: 'Large, Each',
    imageUrl: '/images/apples_1777488660157.png',
  },
  {
    id: '3',
    title: 'Whole Milk',
    price: 3.49,
    weight: '1/2 Gallon',
    imageUrl: '/images/milk_1777488688804.png',
  }
];

export default function SearchPage() {
  return (
    <main className={styles.main}>
      <TopBar />
      
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <SearchInput placeholder="Search for fresh groceries..." />
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Browse Categories</h2>
          <div className={styles.categoryGrid}>
            <div className={`${styles.categoryCard} ${styles.produceCard}`}>
              <div className={styles.cardOverlay}>
                <span className={styles.organicBadge}>ORGANIC</span>
                <h3>Produce</h3>
              </div>
            </div>
            <div className={styles.rowCards}>
              <div className={`${styles.categoryCard} ${styles.meatCard}`}>
                <div className={styles.cardOverlay}>
                  <h3>Meat</h3>
                </div>
              </div>
              <div className={`${styles.categoryCard} ${styles.seafoodCard}`}>
                <div className={styles.cardOverlay}>
                  <h3>Seafood</h3>
                </div>
              </div>
            </div>
            <div className={`${styles.categoryCard} ${styles.frozenCard}`}>
              <div className={styles.cardOverlay}>
                <h3>Frozen Foods</h3>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trending Searches</h2>
            <span className={styles.clearAll}>Clear all</span>
          </div>
          <div className={styles.trendingPills}>
            {trendingSearches.map(term => (
              <button key={term} className={styles.trendingPill}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                {term}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Recently Viewed</h2>
          <div className={styles.recentlyViewedScroll}>
            {recentlyViewed.map(item => (
              <RecentlyViewedCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
