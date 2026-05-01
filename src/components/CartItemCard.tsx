import Image from 'next/image';
import styles from './CartItemCard.module.css';

export interface CartItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartItemCard = ({ item, onUpdateQuantity, onRemove }: CartItemCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={item.imageUrl} alt={item.title} fill className={styles.image} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.topRow}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.subtitle}>{item.subtitle}</p>
          </div>
          <button className={styles.deleteButton} onClick={() => onRemove(item.id)} aria-label="Remove item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
        
        <div className={styles.bottomRow}>
          <div className={styles.quantitySelector}>
            <button 
              className={styles.qtyBtn} 
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
              aria-label="Decrease quantity"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <span className={styles.qtyText}>{item.quantity}</span>
            <button 
              className={styles.qtyBtn} 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
          
          <span className={styles.price}>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
