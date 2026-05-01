'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SelectAddressTopBar } from '@/components/SelectAddressTopBar';
import styles from './SelectAddress.module.css';

// Mock Data
const SAVED_ADDRESSES = [
  {
    id: '1',
    type: 'Home',
    isDefault: true,
    address: '452 Fresh Garden Way, Apt 4B\nGreen Valley, California 90210'
  },
  {
    id: '2',
    type: 'Work',
    isDefault: false,
    address: '88 Market Square, Suite 1200\nFinancial District, California 90211'
  }
];

export default function SelectAddressPage() {
  const [selectedId, setSelectedId] = useState<string>('1');

  return (
    <main className={styles.main}>
      <SelectAddressTopBar />
      
      <div className={styles.container}>
        
        {/* Map Header Card */}
        <div className={styles.mapCard}>
          {/* Map Pattern Placeholder */}
          <div className={styles.mapPattern}></div>
          
          <div className={styles.locationPill}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Your Current Location
          </div>
        </div>

        {/* Saved Addresses Section */}
        <div className={styles.savedSection}>
          <h2 className={styles.sectionTitle}>Saved Addresses</h2>
          
          <div className={styles.addressList}>
            {SAVED_ADDRESSES.map((addr) => {
              const isSelected = selectedId === addr.id;
              
              return (
                <div 
                  key={addr.id}
                  className={`${styles.addressCard} ${isSelected ? styles.addressCardSelected : ''}`}
                  onClick={() => setSelectedId(addr.id)}
                >
                  <div className={styles.radioWrapper}>
                    <div className={`${styles.radio} ${isSelected ? styles.radioSelected : ''}`}>
                      {isSelected && <div className={styles.radioInner}></div>}
                    </div>
                  </div>
                  
                  <div className={styles.addressInfo}>
                    <div className={styles.addressHeader}>
                      <div className={styles.titleRow}>
                        <span className={styles.addressType}>{addr.type}</span>
                        {addr.isDefault && <span className={styles.defaultBadge}>DEFAULT</span>}
                      </div>
                      
                      <button className={styles.editButton} aria-label="Edit address">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <p className={styles.addressText}>{addr.address}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Add New Address Button */}
          <Link href="/checkout/address" className={styles.addAddressButton}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
              <line x1="12" y1="7" x2="12" y2="13"></line>
              <line x1="9" y1="10" x2="15" y2="10"></line>
            </svg>
            + Add New Address
          </Link>
        </div>

      </div>
      
      {/* Fixed Bottom Action */}
      <div className={styles.bottomBar}>
        <button className={styles.submitButton}>
          Deliver to this Address
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </main>
  );
}
