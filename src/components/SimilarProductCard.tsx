import Image from 'next/image';
import styles from './SimilarProductCard.module.css';

interface SimilarProductCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export const SimilarProductCard = ({ title, price, imageUrl }: SimilarProductCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} fill className={styles.image} />
        <button className={styles.addButton} aria-label={`Add ${title} to cart`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      <div className={styles.content}>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};
