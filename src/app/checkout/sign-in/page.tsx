'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckoutTopBar } from '@/components/CheckoutTopBar';
import styles from './SignIn.module.css';

export default function SignInPage() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <main className={styles.main}>
      <CheckoutTopBar />
      
      {/* Background Gradient Layer */}
      <div className={styles.backgroundGradient}></div>
      
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          
          <h1 className={styles.title}>Sign in to Checkout</h1>
          <p className={styles.subtitle}>Sign in to track your order and earn rewards.</p>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>PHONE NUMBER</label>
              <div className={styles.phoneInputContainer}>
                <div className={styles.countryCode}>
                  <span>+1</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <input 
                  type="tel" 
                  className={styles.input} 
                  placeholder="(555) 000-0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            
            <button className={styles.continueButton} type="submit">
              Continue
            </button>
          </form>
          
          <p className={styles.footerText}>
            By continuing, you agree to our <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
