import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Calendar, GraduationCap, Settings } from 'lucide-react';
import styles from './Dashboard.module.css';
import logo from '../../assets/logo_mini.png';

export const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'My Results', icon: <FileText size={20} />, path: '/results' },
    { name: 'Appointments', icon: <Calendar size={20} />, path: '/appointments' },
    { name: 'Education', icon: <GraduationCap size={20} />, path: '/education' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logoImg} />
        </div>
        <span className={styles.brandName}>Alcaraván Health</span>
      </div>
      
      <nav className={styles.navMenu}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            <span className={styles.navIcon}>{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div style={{ padding: '24px', borderTop: '1px solid #F3F4F6', marginTop: 'auto' }}>
        {/* Placeholder for potential logout or bottom items */}
      </div>
    </aside>
  );
};
