'use client';

import { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { CartItemCard, CartItem } from '@/components/CartItemCard';
import { OrderSummary } from '@/components/OrderSummary';
import styles from './Cart.module.css';

const initialItems: CartItem[] = [
  {
    id: '1',
    title: 'Organic Hass Avocados',
    subtitle: '2 Pack • Ripen at Home',
    price: 2.99,
    quantity: 2,
    imageUrl: '/images/product_detail_design.png'
  },
  {
    id: '2',
    title: 'Pink Lady Apples',
    subtitle: '3lb Bag • Sweet & Tart',
    price: 4.50,
    quantity: 1,
    imageUrl: '/images/apples_1777488660157.png'
  },
  {
    id: '3',
    title: 'Whole Organic Milk',
    subtitle: '0.5 Gallon • Grass Fed',
    price: 6.25,
    quantity: 1,
    imageUrl: '/images/milk_1777488688804.png'
  }
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 0; // FREE
  const estimatedTaxes = subtotal * 0.085; // ~8.5% tax
  const totalAmount = subtotal + deliveryFee + estimatedTaxes;
  const savedAmount = 2.50; // Mock saved amount

  return (
    <main className={styles.main}>
      <TopBar />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>Your Cart</h1>
          <p className={styles.pageSubtitle}>Review your selections before checkout</p>
        </div>

        <div className={styles.cartItemsWrapper}>
          <div className={styles.cartItemsList}>
            {items.length > 0 ? (
              items.map(item => (
                <CartItemCard 
                  key={item.id} 
                  item={item} 
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemove}
                />
              ))
            ) : (
              <div className={styles.emptyCart}>
                <p>Your cart is empty.</p>
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className={styles.promoCodeRow}>
              <span className={styles.promoText}>Have a promo code?</span>
              <button className={styles.promoButton}>Add Code</button>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <OrderSummary 
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            estimatedTaxes={estimatedTaxes}
            totalAmount={totalAmount}
            savedAmount={savedAmount}
          />
        )}

        <div className={styles.trustBadges}>
          <div className={styles.trustBadge}>
            <div className={styles.trustIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <span>Quality Guard</span>
          </div>
          
          <div className={styles.trustBadge}>
            <div className={styles.trustIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <span>Express Delivery</span>
          </div>
          
          <div className={styles.trustBadge}>
            <div className={styles.trustIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <line x1="2" y1="22" x2="22" y2="2"></line>
              </svg>
            </div>
            <span>Eco-Friendly</span>
          </div>
        </div>
      </div>
    </main>
  );
}
