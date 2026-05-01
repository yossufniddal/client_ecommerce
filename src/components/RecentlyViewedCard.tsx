'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './RecentlyViewedCard.module.css';

interface RecentlyViewedCardProps {
  id: string;
  title: string;
  price: number;
  weight: string;
  imageUrl: string;
}

export const RecentlyViewedCard = ({ title, price, weight, imageUrl }: RecentlyViewedCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => setQuantity(1);
  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => Math.max(0, q - 1));

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} fill className={styles.image} />
        
        <div className={styles.actionWrapper}>
          {quantity === 0 ? (
            <button className={styles.addButton} onClick={handleAdd} aria-label={`Add ${title} to cart`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          ) : (
            <div className={styles.quantityPill}>
              <button className={styles.decreaseBtn} onClick={handleDecrease}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <span className={styles.qtyText}>{quantity}</span>
              <button className={styles.increaseBtn} onClick={handleIncrease}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className={styles.content}>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.weight}>{weight}</p>
      </div>
    </div>
  );
};
