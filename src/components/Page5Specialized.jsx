import React from 'react';
import { EditableText, EditableImage } from './Editable';
import BrochureFooter from './BrochureFooter';

const workshopItems = [
  'Hull, Deck & Structural Works',
  'Engine & Mechanical Works',
  'Interior & Custom Works',
  'Electrical & Navigation Systems',
  'Plumbing & Hydraulic Systems',
  'Full Refit & Upgrade Projects',
];

const crewItems = [
  'Crew Recruitment & Selection',
  'Professional Training Programs',
  'Certification & Licensing',
  'Visa Processing & PRO Services',
  'Payroll & HR Management',
  'STCW Compliance Support',
];

export default function Page5Specialized({ editMode }) {
  return (
    <div className="p5-content">
      {/* Header strip */}
      <div className="p5-top">
        <span className="p5-top-label">
          <EditableText editMode={editMode}>Premium Elite Marine Services LLC</EditableText>
        </span>
        <span className="p5-top-page">05 / 06</span>
      </div>

      <div className="p5-inner">
        <p className="section-eyebrow">
          <EditableText editMode={editMode}>Specialist Capabilities</EditableText>
        </p>
        <h2 className="section-title">
          <EditableText editMode={editMode}>Our Specialized Services</EditableText>
        </h2>
        <div className="gold-underline" />

        <p className="body-text" style={{ maxWidth: '580px' }}>
          <EditableText editMode={editMode}>
            Beyond our core offerings, we deliver a suite of highly specialized marine services crafted for clients who demand technical mastery, regulatory compliance, and operational excellence in every detail.
          </EditableText>
        </p>

        {/* Two-column layout */}
        <div className="p5-two-col">
          {/* Workshop & Technical */}
          <div className="p5-service-group">
            <div className="p5-group-header">
              <div className="p5-group-icon">🔧</div>
              <div className="p5-group-title">
                <EditableText editMode={editMode}>Workshop &amp; Technical Services</EditableText>
              </div>
            </div>
            <div className="p5-items">
              {workshopItems.map((item, i) => (
                <div key={i} className="p5-item">
                  <div className="p5-item-bullet"><span>✓</span></div>
                  <div className="p5-item-text">
                    <EditableText editMode={editMode}>{item}</EditableText>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Crew Management */}
          <div className="p5-service-group">
            <div className="p5-group-header">
              <div className="p5-group-icon">👥</div>
              <div className="p5-group-title">
                <EditableText editMode={editMode}>Crew Management &amp; Compliance</EditableText>
              </div>
            </div>
            <div className="p5-items">
              {crewItems.map((item, i) => (
                <div key={i} className="p5-item">
                  <div className="p5-item-bullet"><span>✓</span></div>
                  <div className="p5-item-text">
                    <EditableText editMode={editMode}>{item}</EditableText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supporting images */}
        <div className="p5-img-block">
          <div style={{ borderRadius: '4px', overflow: 'hidden', height: '150px', boxShadow: '0 4px 16px rgba(11,31,58,0.1)' }}>
            <EditableImage
              src="/yacht_engineering.png"
              alt="Marine technical workshop"
              editMode={editMode}
              style={{ width: '100%', height: '150px' }}
            />
          </div>
          <div style={{ borderRadius: '4px', overflow: 'hidden', height: '150px', boxShadow: '0 4px 16px rgba(11,31,58,0.1)' }}>
            <EditableImage
              src="/yacht_interior.png"
              alt="Yacht interior custom works"
              editMode={editMode}
              style={{ width: '100%', height: '150px' }}
            />
          </div>
        </div>

        {/* Bottom callout */}
        <div style={{
          background: 'linear-gradient(135deg, var(--navy), var(--navy-mid))',
          borderRadius: '6px',
          padding: '20px 24px',
          marginTop: '22px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <div style={{ fontSize: '28px', flexShrink: 0 }}>⚓</div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: '700', color: 'var(--gold-light)', marginBottom: '4px' }}>
              <EditableText editMode={editMode}>All Services Under One Roof</EditableText>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5' }}>
              <EditableText editMode={editMode}>
                From a single engine service to a complete vessel refit and crew deployment — Premium Elite Marine handles it all with seamless efficiency.
              </EditableText>
            </div>
          </div>
        </div>
      </div>

      {/* Logo footer */}
      <BrochureFooter variant="light" />
    </div>
  );
}
