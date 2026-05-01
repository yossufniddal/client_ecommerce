import Image from 'next/image';
import styles from './FilteredProductCard.module.css';

export type BadgeType = 'ORGANIC' | 'SALE' | 'TOP RATED' | 'IN SEASON' | null;

interface FilteredProductCardProps {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  unit: string;
  imageUrl: string;
  badge?: BadgeType;
  cartCount?: number;
}

export const FilteredProductCard = ({
  title,
  subtitle,
  price,
  originalPrice,
  unit,
  imageUrl,
  badge,
  cartCount = 0
}: FilteredProductCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} fill className={styles.image} />
        
        {badge && (
          <span className={`${styles.badge} ${styles[badge.replace(' ', '')]}`}>
            {badge}
          </span>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        
        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <div className={styles.priceRow}>
              <span className={styles.price}>${price.toFixed(2)}</span>
              {originalPrice && <span className={styles.originalPrice}>${originalPrice.toFixed(2)}</span>}
            </div>
            <span className={styles.unit}>{unit}</span>
          </div>
          
          <div className={styles.actionWrapper}>
            {cartCount > 0 ? (
              <button className={styles.cartButton} aria-label={`View ${cartCount} in cart`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className={styles.cartCountBadge}>{cartCount}</span>
              </button>
            ) : (
              <button className={styles.addButton} aria-label={`Add ${title} to cart`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
