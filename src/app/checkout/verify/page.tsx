'use client';

import { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import { VerifyTopBar } from '@/components/VerifyTopBar';
import styles from './Verify.module.css';

export default function VerifyPage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // We could theoretically read this from a URL query param like ?phone=...
  // For now, we use the design mockup's phone number
  const phoneNumber = '(555) 000-0000';

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    // Allow only the last character entered
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-advance to the next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <main className={styles.main}>
      <VerifyTopBar />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <rect x="9" y="9" width="6" height="6" rx="1" ry="1"></rect>
              <path d="M12 11v2"></path>
            </svg>
          </div>
          
          <h1 className={styles.title}>Enter Verification Code</h1>
          <p className={styles.subtitle}>
            We've sent a 6-digit code to <strong>{phoneNumber}</strong>
          </p>
          
          <div className={styles.otpContainer}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                placeholder="-"
                className={styles.otpInput}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
        </div>
        
        <div className={styles.footer}>
          <button className={styles.verifyButton}>
            Verify & Continue
          </button>
          
          <p className={styles.resendText}>Didn't receive the code?</p>
          <div className={styles.resendAction}>
            <button className={styles.resendButton}>Resend Code</button>
            <span className={styles.timer}>0:59</span>
          </div>
        </div>
      </div>
    </main>
  );
}
