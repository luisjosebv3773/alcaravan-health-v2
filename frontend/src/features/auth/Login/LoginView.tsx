import React from 'react';
import { LoginSidebar } from './LoginSidebar';
import { LoginForm } from './LoginForm';
import styles from './Login.module.css';

export const LoginView: React.FC = () => {
  return (
    <div className={styles.container}>
      <LoginSidebar />
      <LoginForm />
    </div>
  );
};
