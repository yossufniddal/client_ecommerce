import React from 'react';
import styles from './QuantitySelector.module.css';

interface QuantitySelectorProps {
  quantity: number;
  onAdd: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onAdd, onIncrease, onDecrease }) => {
  const isExpanded = quantity > 0;

  return (
    <div className={`${styles.wrapper} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.collapsibleContent}>
        <button className={styles.decreaseButton} onClick={onDecrease} aria-label="Decrease quantity" tabIndex={isExpanded ? 0 : -1}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <button 
        className={styles.increaseButton} 
        onClick={isExpanded ? onIncrease : onAdd} 
        aria-label={isExpanded ? "Increase quantity" : "Add to cart"}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};
