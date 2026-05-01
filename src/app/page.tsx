import { ProductCard } from '@/components/ProductCard';
import { SearchInput } from '@/components/SearchInput';
import { TopBar } from '@/components/TopBar';
import styles from './Home.module.css';

const popularProducts = [
  {
    id: '1',
    title: 'Premium Bananas',
    price: 2.49,
    weight: '1kg Bundle',
    imageUrl: '/images/bananas_1777488674452.png',
  },
  {
    id: '2',
    title: 'Red Fuji Apples',
    price: 0.89,
    weight: 'per piece',
    imageUrl: '/images/apples_1777488660157.png',
  },
  {
    id: '3',
    title: 'Fresh Strawberries',
    price: 4.99,
    weight: '250g Pack',
    imageUrl: '/images/apples_1777488660157.png', // Placeholder
  },
  {
    id: '4',
    title: 'Green Asparagus',
    price: 3.50,
    weight: 'Bunch',
    imageUrl: '/images/bananas_1777488674452.png', // Placeholder
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <TopBar />
      <div className={styles.searchContainer}>
        <SearchInput placeholder="Search fresh groceries..." />
      </div>

      <section className={styles.dealsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Weekly Deals</h2>
          <span className={styles.seeAll}>See all</span>
        </div>
        
        <div className={styles.promoList}>
          <div className={`${styles.promoCard} ${styles.promoHarvest}`}>
            <div className={styles.promoContent}>
              <span className={styles.promoBadge}>50% OFF</span>
              <h3>Organic Summer Harvest</h3>
              <p>Fresh from local farms to your door</p>
            </div>
          </div>
          
          <div className={`${styles.promoCard} ${styles.promoDairy}`}>
            <div className={styles.promoContent}>
              <span className={styles.promoBadge}>20% OFF</span>
              <h3>Premium Dairy Week</h3>
              <p>Artisanal selections for your breakfast</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
        </div>
        <div className={styles.categoryGrid}>
          
          <div className={styles.categoryCard}>
            <div className={styles.categoryIconBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 4 13c0-3.14 2.5-6.5 7-9 4.5 2.5 7 5.86 7 9a7 7 0 0 1-7 7z"></path>
                <path d="M11 20V13"></path>
              </svg>
            </div>
            <span className={styles.categoryLabel}>Fruits</span>
          </div>

          <div className={styles.categoryCard}>
            <div className={styles.categoryIconBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="15" r="7"></circle>
                <path d="M12 8v-4"></path>
                <path d="M12 6a4 4 0 0 1 4-4"></path>
              </svg>
            </div>
            <span className={styles.categoryLabel}>Veggies</span>
          </div>

          <div className={styles.categoryCard}>
            <div className={styles.categoryIconBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21a8 8 0 0 1-7.8-6.1c-.8-3.4 1.2-6.5 4.5-7.4a7.9 7.9 0 0 1 6.8 1 5.9 5.9 0 0 1 4.3 6.9C19.1 18.7 15.8 21 12 21z"></path>
                <circle cx="13" cy="13" r="3"></circle>
              </svg>
            </div>
            <span className={styles.categoryLabel}>Dairy</span>
          </div>

          <div className={styles.categoryCard}>
            <div className={styles.categoryIconBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12c-1.5 0-3-1-3-3s1.5-3 3-3c2 0 4 1 5 2 1-1 3-2 5-2 1.5 0 3 1 3 3s-1.5 3-3 3c-1 0-2-.5-3-1-1 1-3 1-4 1z"></path>
                <path d="M8 8v4"></path>
                <path d="M16 8v4"></path>
                <path d="M12 7v5"></path>
              </svg>
            </div>
            <span className={styles.categoryLabel}>Bakery</span>
          </div>

        </div>
      </section>

      <section className={styles.popularSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Popular Near You</h2>
          <span className={styles.seeAll}>See all</span>
        </div>
        <div className={styles.productGrid}>
          {popularProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
