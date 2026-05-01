"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import { Button } from './Button';
import { QuantitySelector } from './QuantitySelector';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  weight: string;
  imageUrl: string;
  badge?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, price, weight, imageUrl, badge }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => setQuantity(1);
  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => Math.max(0, q - 1));

  return (
    <div className={styles.card}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <div className={styles.imageContainer}>
        {imageUrl ? (
          <Image src={imageUrl} alt={title} fill style={{ objectFit: 'cover' }} />
        ) : (
          <div className={styles.placeholder}>No Image</div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.weight}>{weight}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <QuantitySelector 
            quantity={quantity} 
            onAdd={handleAdd} 
            onIncrease={handleIncrease} 
            onDecrease={handleDecrease} 
          />
        </div>
      </div>
    </div>
  );
};
