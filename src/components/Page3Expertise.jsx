import React from 'react';
import { EditableText, EditableImage } from './Editable';
import BrochureFooter from './BrochureFooter';

const sectors = [
  {
    icon: '🛥️',
    title: 'Private Sector',
    text: 'Tailored services for private yacht owners — from day-to-day management to bespoke charter experiences and full technical support.',
  },
  {
    icon: '🌐',
    title: 'Commercial Sector',
    text: 'Supporting commercial marine operations with certified engineering, vessel management, and compliance solutions across the GCC.',
  },
  {
    icon: '⛵',
    title: 'Charter Sector',
    text: 'End-to-end charter fleet operations, crewing, guest services, and marketing support to maximize vessel utilization and revenue.',
  },
];

const metrics = [
  { num: '15+', label: 'Years at Sea' },
  { num: '500+', label: 'Yachts Served' },
  { num: '3', label: 'Marine Sectors' },
  { num: '100%', label: 'Client Satisfaction' },
];

export default function Page3Expertise({ editMode }) {
  return (
    <div style={{ position: 'relative', minHeight: 'var(--a4-height)' }}>
      <div className="p3-bg" />

      <div className="p3-content">
        {/* Header */}
        <div className="p3-header">
          <span className="p3-header-brand">
            <EditableText editMode={editMode}>Premium Elite Marine Services LLC</EditableText>
          </span>
          <span className="p3-header-page">03 / 06</span>
        </div>

        {/* Body */}
        <div className="p3-body">
          <p className="p3-section-eyebrow">
            <EditableText editMode={editMode}>What We Do Best</EditableText>
          </p>
          <h2 className="p3-title">
            <EditableText editMode={editMode}>Our Expertise</EditableText>
          </h2>
          <div className="gold-line" />

          <p className="p3-intro">
            <EditableText editMode={editMode}>
              We bring global marine experience rooted in decades of sea-proven expertise. Our multi-disciplinary team covers every facet of the marine industry — from luxury private yachting to large-scale commercial marine operations — delivering world-class results with precision and passion.
            </EditableText>
          </p>

          {/* Core Sectors */}
          <div className="p3-sectors">
            {sectors.map((s, i) => (
              <div key={i} className="p3-sector-card">
                <div className="p3-sector-icon">{s.icon}</div>
                <div className="p3-sector-title">
                  <EditableText editMode={editMode}>{s.title}</EditableText>
                </div>
                <div className="p3-sector-text">
                  <EditableText editMode={editMode}>{s.text}</EditableText>
                </div>
              </div>
            ))}
          </div>

          {/* Image strip */}
          <div className="p3-img-strip">
            <div style={{ borderRadius: '4px', overflow: 'hidden', height: '140px' }}>
              <EditableImage
                src="/yacht_engineering.png"
                alt="Marine engineers at work"
                editMode={editMode}
                style={{ width: '100%', height: '140px' }}
              />
            </div>
            <div style={{ borderRadius: '4px', overflow: 'hidden', height: '140px' }}>
              <EditableImage
                src="/yacht_sailing.png"
                alt="Luxury yacht sailing"
                editMode={editMode}
                style={{ width: '100%', height: '140px' }}
              />
            </div>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="p3-metrics" style={{ marginTop: 'auto' }}>
          {metrics.map((m, i) => (
            <div key={i} className="p3-metric">
              <span className="p3-metric-num">
                <EditableText editMode={editMode}>{m.num}</EditableText>
              </span>
              <span className="p3-metric-label">
                <EditableText editMode={editMode}>{m.label}</EditableText>
              </span>
            </div>
          ))}
        </div>

        {/* Logo footer — dark variant since page is dark navy */}
        <BrochureFooter variant="dark" />
      </div>
    </div>
  );
}
