import React from 'react';
import { AppointmentCard } from './AppointmentCard';
import { GoalItem } from './GoalItem';
import styles from './Dashboard.module.css';

export const RightSidebar: React.FC = () => {
  const goals = [
    { label: 'Hidratación', current: '2.1L', total: '3L', percent: 70 },
    { label: 'Contador de pasos', current: '4,500', total: '8,000', percent: 56 },
    { label: 'Sueño profundo', current: '6h', total: '7h', percent: 85 },
  ];

  return (
    <aside className={styles.rightColumn}>
      <div className={styles.section}>
        <h3 className={styles.sectionLabel}>Next Appointment</h3>
        <AppointmentCard 
          date="Oct 28, 2023"
          time="09:15 AM"
          location="Clínica General"
          doctorName="Dr. Elena Rodriguez"
          doctorRole="Médico Principal"
          doctorAvatar="https://ui-avatars.com/api/?name=Elena+Rodriguez&background=CBD5E1&color=1E293B"
        />
      </div>

      <div className={styles.goalsContainer}>
        <div className={styles.goalsHeader}>
          <h3 className={styles.sectionLabel} style={{ marginBottom: 0 }}>Metas Diarias</h3>
          <span className={styles.goalsBadge}>60% Hecho</span>
        </div>

        {goals.map((goal) => (
          <GoalItem key={goal.label} {...goal} />
        ))}
      </div>
    </aside>
  );
};
