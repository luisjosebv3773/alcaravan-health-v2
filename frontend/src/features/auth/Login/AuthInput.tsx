import React, { type InputHTMLAttributes } from 'react';
import styles from './Login.module.css';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  rightAction?: React.ReactNode;
  forgotPasswordLink?: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  icon,
  rightAction,
  forgotPasswordLink,
  className,
  ...props
}) => {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputHeader}>
        <label className={styles.inputLabel}>{label}</label>
        {forgotPasswordLink && (
          <a href={forgotPasswordLink} className={styles.forgotPassword}>
            Forgot password?
          </a>
        )}
      </div>
      <div className={styles.inputWrapper}>
        {icon && <div className={styles.inputIcon}>{icon}</div>}
        <input 
          className={`${styles.inputField} ${className || ''}`} 
          style={{ paddingLeft: icon ? '48px' : '16px', paddingRight: rightAction ? '48px' : '16px' }}
          {...props} 
        />
        {rightAction && <div className={styles.inputAction}>{rightAction}</div>}
      </div>
    </div>
  );
};
