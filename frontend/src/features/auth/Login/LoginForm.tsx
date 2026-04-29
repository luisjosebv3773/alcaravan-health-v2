import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { AuthInput } from './AuthInput';
import { SocialAuthButtons } from './SocialAuthButtons';
import styles from './Login.module.css';

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.formSection}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Bienvenido de nuevo</h2>
          <p className={styles.formSubtitle}>Ingresa tus credenciales para continuar</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <AuthInput
            label="Correo Electrónico"
            type="email"
            placeholder="doctor.name@health.org"
            icon={<Mail size={20} />}
          />

          <AuthInput
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            icon={<Lock size={20} />}
            forgotPasswordLink="#"
            rightAction={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#A9B4B9' }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            }
          />

          <div className={styles.rememberMe}>
            <input type="checkbox" id="remember" className={styles.checkbox} />
            <label htmlFor="remember" className={styles.rememberLabel}>
              Remember me for 30 days
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Iniciar Sesión
          </button>
        </form>

        <div className={styles.divider}>O accede con</div>
        <SocialAuthButtons />
      </div>

      <div className={styles.footer}>
        <a href="#" className={styles.footerLink}>SECURITY STANDARDS</a>
        <a href="#" className={styles.footerLink}>PRIVACY POLICY</a>
        <a href="#" className={styles.footerLink}>SUPPORT</a>
      </div>
    </div>
  );
};
