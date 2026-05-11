import React from 'react';
import styles from './Dashboard.module.css';

export const BodyComposition: React.FC = () => {
  const metrics = [
    { label: 'Masa muscular', value: '72.4 kg' },
    { label: '% de grasa corporal', value: '18.2 %' },
    { label: 'Nivel de hidratación', value: '62 %' },
    { label: 'Densidad ósea', value: '3.2 kg' },
    { label: 'Contenido de proteínas', value: '16.5 %' },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.compHeader}>
        <h3 className={styles.compTitle}>Análisis de la composición corporal</h3>
        <p className={styles.compSubtitle}>Escaneo completo de octubre de 2023</p>
      </div>

      <div className={styles.compositionSection}>
        <div className={styles.radarChart}>
          {/* Simple Radar Chart SVG Representation */}
          <svg viewBox="0 0 200 200" width="100%" height="100%">
            {/* Hexagon Grids */}
            {[1, 0.8, 0.6, 0.4].map((scale) => (
              <polygon
                key={scale}
                points="100,20 170,60 170,140 100,180 30,140 30,60"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1"
                transform={`translate(${100 - 100 * scale}, ${100 - 100 * scale}) scale(${scale})`}
              />
            ))}
            {/* Axis */}
            <line x1="100" y1="20" x2="100" y2="180" stroke="#E2E8F0" />
            <line x1="30" y1="60" x2="170" y2="140" stroke="#E2E8F0" />
            <line x1="30" y1="140" x2="170" y2="60" stroke="#E2E8F0" />
            
            {/* Data Shape (Blue) */}
            <polygon
              points="100,40 160,80 140,150 80,160 50,110 60,60"
              fill="rgba(0, 94, 184, 0.1)"
              stroke="#005EB8"
              strokeWidth="2"
            />
            
            {/* Labels (simplified) */}
            <text x="100" y="15" textAnchor="middle" fontSize="8" fill="#94A3B8" fontWeight="bold">MÚSCULO</text>
            <text x="180" y="65" textAnchor="start" fontSize="8" fill="#94A3B8" fontWeight="bold">GORDO %</text>
            <text x="180" y="145" textAnchor="start" fontSize="8" fill="#94A3B8" fontWeight="bold">AGUA</text>
            <text x="100" y="195" textAnchor="middle" fontSize="8" fill="#94A3B8" fontWeight="bold">HUESO</text>
            <text x="20" y="145" textAnchor="end" fontSize="8" fill="#94A3B8" fontWeight="bold">PROTEÍNA</text>
          </svg>
          
          <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '12px', fontSize: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#005EB8' }} />
              <span style={{ color: '#1E293B', fontWeight: 500 }}>Tú</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1px solid #CBD5E1' }} />
              <span style={{ color: '#94A3B8', fontWeight: 500 }}>Objetivo</span>
            </div>
          </div>
        </div>

        <div className={styles.metricsList}>
          {metrics.map((m) => (
            <div key={m.label} className={styles.metricItem}>
              <span className={styles.metricLabel}>{m.label}</span>
              <span className={styles.metricValue}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
