import { FilteredTopBar } from '@/components/FilteredTopBar';
import { SearchInput } from '@/components/SearchInput';
import { FilteredProductCard, BadgeType } from '@/components/FilteredProductCard';
import styles from './Category.module.css';

// Mock data based on design
const filters = ['All', 'Berries', 'Citrus', 'Stone Fruit'];

const products = [
  {
    id: '1',
    title: 'Organic Blueberries',
    subtitle: '6oz Pack',
    price: 4.99,
    unit: 'per pack',
    imageUrl: '/images/product_detail_design.png',
    badge: 'ORGANIC' as BadgeType,
  },
  {
    id: '2',
    title: 'Hass Avocados',
    subtitle: 'Large, Ripe',
    price: 1.50,
    unit: 'per lb',
    imageUrl: '/images/apples_1777488660157.png',
    badge: 'TOP RATED' as BadgeType,
  },
  {
    id: '3',
    title: 'Red Fuji Apples',
    subtitle: 'Sweet & Crunchy',
    price: 2.99,
    unit: 'per lb',
    imageUrl: '/images/apples_1777488660157.png',
  },
  {
    id: '4',
    title: 'Gold Pineapple',
    subtitle: 'Extra Sweet',
    price: 3.49,
    originalPrice: 4.99,
    unit: '',
    imageUrl: '/images/bananas_1777488674452.png',
    badge: 'SALE' as BadgeType,
  },
  {
    id: '5',
    title: 'Organic Strawberries',
    subtitle: '1lb Container',
    price: 5.25,
    unit: 'per pack',
    imageUrl: '/images/product_detail_design.png',
  },
  {
    id: '6',
    title: 'Yellow Peaches',
    subtitle: 'Juicy & Sweet',
    price: 2.49,
    unit: 'per lb',
    imageUrl: '/images/apples_1777488660157.png',
    badge: 'IN SEASON' as BadgeType,
    cartCount: 3,
  }
];

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // We can format the ID into a title: 'organic-fruits' -> 'Organic Fruits'
  const title = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className={styles.main}>
      <FilteredTopBar />
      
      <div className={styles.container}>
        <div className={styles.searchWrapper}>
          <SearchInput placeholder={`Search ${title}...`} />
        </div>

        <div className={styles.headerRow}>
          <h1 className={styles.pageTitle}>{title}</h1>
          <div className={styles.sortDropdown}>
            <span>Sort: Popular</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <div className={styles.filterPills}>
          {filters.map((filter, index) => (
            <button 
              key={filter} 
              className={`${styles.filterPill} ${index === 0 ? styles.activePill : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.productGrid}>
          {products.map(product => (
            <FilteredProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
