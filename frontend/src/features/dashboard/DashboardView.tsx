import React from 'react';
import { Sidebar } from './Sidebar';
import { TopHeader } from './TopHeader';
import { StatCard } from './StatCard';
import { BodyComposition } from './BodyComposition';
import { TrendsSection } from './TrendsSection';
import { WelcomeHeader } from './WelcomeHeader';
import { RightSidebar } from './RightSidebar';
import styles from './Dashboard.module.css';

export const DashboardView: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      
      <main className={styles.mainContent}>
        <TopHeader />
        
        <div className={styles.dashboardScroll}>
          <div className={styles.leftColumn}>
            <WelcomeHeader 
              name="Mateo" 
              date="24 de octubre" 
            />

            {/* Top Cards Section */}
            <section className={styles.statsGrid}>
              <StatCard 
                label="IMC ACTUAL" 
                trend="-0,5%" 
                value="24.8" 
                status="Óptima" 
                progress={48} 
                color="#22C55E" 
              />
              <StatCard 
                label="RELACIÓN CINTURA-CADERA" 
                trend="-0,02%" 
                value="0.88" 
                status="Normal-Alto" 
                progress={72} 
                color="#F59E0B" 
              />
              <StatCard 
                label="GRASA VISCERAL" 
                trend="Sin cambios" 
                value="Level 9" 
                status="Saludable" 
                progress={35} 
                color="#22C55E" 
              />
            </section>

            {/* Body Composition */}
            <BodyComposition />

            {/* Trends Section */}
            <TrendsSection />
          </div>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </main>
    </div>
  );
};
