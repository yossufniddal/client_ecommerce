import styles from './OrderSummary.module.css';

interface OrderSummaryProps {
  subtotal: number;
  deliveryFee: number;
  estimatedTaxes: number;
  totalAmount: number;
  savedAmount: number;
}

export const OrderSummary = ({ 
  subtotal, 
  deliveryFee, 
  estimatedTaxes, 
  totalAmount, 
  savedAmount 
}: OrderSummaryProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <h2>Order Summary</h2>
      </div>
      
      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.label}>Subtotal</span>
          <span className={styles.value}>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className={styles.row}>
          <span className={styles.label}>Delivery Fee</span>
          {deliveryFee === 0 ? (
            <span className={styles.freeValue}>FREE</span>
          ) : (
            <span className={styles.value}>${deliveryFee.toFixed(2)}</span>
          )}
        </div>
        
        <div className={styles.row}>
          <span className={styles.label}>Estimated Taxes</span>
          <span className={styles.value}>${estimatedTaxes.toFixed(2)}</span>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.totalRow}>
          <div className={styles.totalTextContainer}>
            <span className={styles.totalLabel}>TOTAL AMOUNT</span>
            <span className={styles.totalValue}>${totalAmount.toFixed(2)}</span>
          </div>
          {savedAmount > 0 && (
            <div className={styles.savedBadge}>
              Saved ${savedAmount.toFixed(2)}
            </div>
          )}
        </div>
        
        <button className={styles.checkoutButton}>
          <span>PROCEED TO CHECKOUT</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        
        <div className={styles.secureContainer}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span>Secure SSL Encrypted Checkout</span>
        </div>
      </div>
    </div>
  );
};
