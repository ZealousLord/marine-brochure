import React from 'react';
import { EditableText, EditableImage } from './Editable';
import BrochureFooter from './BrochureFooter';

export default function Page1Cover({ editMode }) {
  return (
    <>
      {/* Full-bleed background image */}
      <div className="p1-bg" style={{ backgroundImage: "url('/yacht_cover.png')" }} />

      {/* Dark overlay */}
      <div className="p1-overlay" />

      {/* Wave decoration */}
      <svg className="p1-wave" viewBox="0 0 794 80" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,40 C150,80 350,0 530,40 C710,80 760,20 794,40 L794,80 L0,80 Z"
          fill="rgba(212,175,55,0.4)"
        />
        <path
          d="M0,55 C200,20 400,70 600,45 C700,30 760,60 794,55 L794,80 L0,80 Z"
          fill="rgba(212,175,55,0.15)"
        />
      </svg>

      {/* Content layer */}
      <div className="p1-content">
        {/* Header row */}
        <div className="p1-header">
          <div className="p1-logo">
            {/* D3 Yacht Charter logo (logo1) replaces anchor emoji */}
            <img
              src="/logo1_d3.png"
              alt="D3 Yacht Charter"
              style={{
                height: '128px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'brightness(1.6)',
              }}
            />
            <div className="p1-logo-text">
              <EditableText tag="span" className="p1-logo-main" editMode={editMode}>
                Premium Elite Marine Services LLC
              </EditableText>
              <EditableText tag="span" className="p1-logo-sub" editMode={editMode}>
                UAE Marine Solutions
              </EditableText>
            </div>
          </div>
          <div className="p1-badge">
            <EditableText editMode={editMode}>Est. 2009 · Dubai, UAE</EditableText>
          </div>
        </div>

        {/* Main hero content */}
        <div className="p1-main">
          <div className="p1-gold-line" />
          <div className="p1-eyebrow">
            <EditableText editMode={editMode}>Official Company Brochure 2025</EditableText>
          </div>

          <h1 className="p1-title">
            <EditableText tag="span" editMode={editMode}>Premium</EditableText>{' '}
            <span className="p1-title-gold">
              <EditableText tag="span" editMode={editMode}>Elite Marine</EditableText>
            </span>
            <br />
            <EditableText tag="span" editMode={editMode}>Services LLC</EditableText>
          </h1>

          <div className="p1-subtitle">
            <EditableText editMode={editMode}>
              Engineering Excellence. Delivering Marine Perfection.
            </EditableText>
          </div>

          <div className="p1-tagline-box">
            <p className="p1-tagline">
              <EditableText editMode={editMode}>
                A Complete End-to-End Marine Solutions Company | 15+ Years Expertise | Superyacht Specialists
              </EditableText>
            </p>
          </div>

          {/* Stats row */}
          <div className="p1-stats">
            <div className="p1-stat">
              <span className="p1-stat-num">
                <EditableText editMode={editMode}>15+</EditableText>
              </span>
              <span className="p1-stat-label">
                <EditableText editMode={editMode}>Years Expertise</EditableText>
              </span>
            </div>
            <div className="p1-stat">
              <span className="p1-stat-num">
                <EditableText editMode={editMode}>500+</EditableText>
              </span>
              <span className="p1-stat-label">
                <EditableText editMode={editMode}>Yachts Serviced</EditableText>
              </span>
            </div>
            <div className="p1-stat">
              <span className="p1-stat-num">
                <EditableText editMode={editMode}>50+</EditableText>
              </span>
              <span className="p1-stat-label">
                <EditableText editMode={editMode}>Expert Crew</EditableText>
              </span>
            </div>
            <div className="p1-stat">
              <span className="p1-stat-num">
                <EditableText editMode={editMode}>UAE</EditableText>
              </span>
              <span className="p1-stat-label">
                <EditableText editMode={editMode}>Based &amp; Global</EditableText>
              </span>
            </div>
          </div>
        </div>

        {/* Contact info bar */}
        <div className="p1-footer">
          <span className="p1-footer-text">
            <EditableText editMode={editMode}>www.premiumelitemarine.ae</EditableText>
          </span>
          <span className="p1-footer-text">
            <EditableText editMode={editMode}>info@premiumelitemarine.ae</EditableText>
          </span>
          <span className="p1-footer-text">
            <EditableText editMode={editMode}>+971 XX XXX XXXX</EditableText>
          </span>
        </div>
      </div>

      {/* Logo footer — pinned to bottom of page */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3 }}>
        <BrochureFooter variant="dark" />
      </div>
    </>
  );
}
