'use client';

import { useState } from 'react';
import { AddressTopBar } from '@/components/AddressTopBar';
import styles from './Address.module.css';

type AddressType = 'Home' | 'Work' | 'Partner' | 'Other';

export default function AddressPage() {
  const [selectedType, setSelectedType] = useState<AddressType>('Home');

  return (
    <main className={styles.main}>
      <AddressTopBar />
      
      <div className={styles.container}>
        
        {/* Map Section */}
        <div className={styles.mapCard}>
          <div className={styles.mapPlaceholder}>
            {/* Using a background pattern/gradient to simulate a map for now */}
            <div className={styles.mapPin}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          </div>
          <div className={styles.mapActionRow}>
            <div className={styles.mapActionText}>
              <span className={styles.mapActionTitle}>Set location on map</span>
              <span className={styles.mapActionSubtitle}>Drag the pin to adjust your exact location</span>
            </div>
            <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>

        {/* Form Section */}
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Neighborhood</label>
            <div className={styles.selectWrapper}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>Select Neighborhood</option>
                <option value="downtown">Downtown</option>
                <option value="suburbs">Suburbs</option>
              </select>
              <svg className={styles.selectIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Area</label>
            <div className={styles.selectWrapper}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>Select Area</option>
                <option value="north">North Area</option>
                <option value="south">South Area</option>
              </select>
              <svg className={styles.selectIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Building no.</label>
            <input type="text" className={styles.input} placeholder="e.g. 42" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Floor no.</label>
            <input type="text" className={styles.input} placeholder="e.g. 5" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Apartment number</label>
            <input type="text" className={styles.input} placeholder="e.g. 501" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Full address</label>
            <textarea 
              className={styles.textarea} 
              placeholder="Enter street name, landmarks, and additional instructions for the delivery partner..."
              rows={4}
            />
          </div>

          {/* Address Type Pill Selector */}
          <div className={styles.pillGroupWrapper}>
            <label className={styles.label}>Save Address As</label>
            <div className={styles.pillContainer}>
              <button 
                type="button"
                className={`${styles.pill} ${selectedType === 'Home' ? styles.pillActive : ''}`}
                onClick={() => setSelectedType('Home')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </button>
              
              <button 
                type="button"
                className={`${styles.pill} ${selectedType === 'Work' ? styles.pillActive : ''}`}
                onClick={() => setSelectedType('Work')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Work
              </button>
              
              <button 
                type="button"
                className={`${styles.pill} ${selectedType === 'Partner' ? styles.pillActive : ''}`}
                onClick={() => setSelectedType('Partner')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                Partner
              </button>
              
              <button 
                type="button"
                className={`${styles.pill} ${selectedType === 'Other' ? styles.pillActive : ''}`}
                onClick={() => setSelectedType('Other')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Other
              </button>
            </div>
          </div>
        </form>

      </div>
      
      {/* Fixed Bottom Action */}
      <div className={styles.bottomBar}>
        <button className={styles.submitButton}>
          Deliver to this Address
        </button>
      </div>
    </main>
  );
}
