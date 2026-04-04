import React from 'react';
import { EditableText, EditableImage } from './Editable';
import BrochureFooter from './BrochureFooter';

export default function Page2About({ editMode }) {
  return (
    <div style={{ position: 'relative', minHeight: 'var(--a4-height)', background: 'white', display: 'flex', flexDirection: 'column' }}>
      {/* Subtle background image */}
      <div
        className="p2-bg"
        style={{ backgroundImage: "url('/yacht_aerial.png')" }}
      />

      {/* Header strip */}
      <div className="page-header-strip">
        <span className="page-header-strip-title">
          <EditableText editMode={editMode}>Premium Elite Marine Services LLC</EditableText>
        </span>
        <span className="page-header-strip-page">02 / 06</span>
      </div>

      {/* Main content */}
      <div className="p2-content" style={{ paddingTop: 0, flex: 1 }}>
        <div className="p2-inner">
          <p className="section-eyebrow">
            <EditableText editMode={editMode}>Who We Are</EditableText>
          </p>
          <h2 className="section-title">
            <EditableText editMode={editMode}>About Premium Elite</EditableText>
            <br />
            <EditableText editMode={editMode}>Marine Services LLC</EditableText>
          </h2>
          <div className="gold-underline" />

          {/* Two column layout */}
          <div className="p2-two-col">
            {/* Left: Text */}
            <div className="p2-text-col">
              <p className="body-text">
                <EditableText editMode={editMode}>
                  Premium Elite Marine Services LLC is a UAE-based premium marine solutions company delivering comprehensive, end-to-end services across yacht charter, sales, management, maintenance, and marine engineering. Headquartered in Dubai, we operate with a global mindset and a local expertise, serving discerning clients across the GCC and beyond.
                </EditableText>
              </p>

              <div className="p2-quote">
                <p className="p2-quote-text">
                  <EditableText editMode={editMode}>
                    "Our foundation is built on trust, precision, and an unwavering commitment to delivering marine excellence at every touchpoint."
                  </EditableText>
                </p>
              </div>

              <p className="body-text">
                <EditableText editMode={editMode}>
                  From luxury superyacht charters to technical refit projects, our team of seasoned marine professionals brings global expertise to every engagement. We combine cutting-edge marine technology with time-honored seamanship to create solutions that are bespoke, reliable, and exceeding expectations.
                </EditableText>
              </p>

              <p className="body-text">
                <EditableText editMode={editMode}>
                  Our portfolio spans private yacht management, commercial marine operations, charter fleet management, crew training, and specialist technical services — all under one unified brand umbrella dedicated to the finest standards in the maritime world.
                </EditableText>
              </p>
            </div>

            {/* Right: Image + Info card */}
            <div className="p2-image-col">
              <div
                className="editable-image-wrap"
                style={{ borderRadius: '4px', overflow: 'hidden', height: '220px', boxShadow: '0 8px 30px rgba(11,31,58,0.15)' }}
                onClick={() => {}}
              >
                <EditableImage
                  src="/yacht_aerial.png"
                  alt="Luxury yacht aerial view"
                  editMode={editMode}
                  style={{ width: '100%', height: '220px' }}
                />
              </div>

              {/* Info card */}
              <div className="p2-info-card">
                <div className="p2-info-item">
                  <div className="p2-info-icon">📍</div>
                  <div>
                    <div className="p2-info-label">Headquarters</div>
                    <div className="p2-info-value">
                      <EditableText editMode={editMode}>Dubai, UAE</EditableText>
                    </div>
                  </div>
                </div>
                <div className="p2-info-item">
                  <div className="p2-info-icon">🗓️</div>
                  <div>
                    <div className="p2-info-label">Established</div>
                    <div className="p2-info-value">
                      <EditableText editMode={editMode}>Since 2009</EditableText>
                    </div>
                  </div>
                </div>
                <div className="p2-info-item">
                  <div className="p2-info-icon">🌍</div>
                  <div>
                    <div className="p2-info-label">Coverage</div>
                    <div className="p2-info-value">
                      <EditableText editMode={editMode}>GCC &amp; Global</EditableText>
                    </div>
                  </div>
                </div>
                <div className="p2-info-item">
                  <div className="p2-info-icon">⭐</div>
                  <div>
                    <div className="p2-info-label">Specialty</div>
                    <div className="p2-info-value">
                      <EditableText editMode={editMode}>Superyacht Specialists</EditableText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
            {[
              { icon: '🎯', title: 'Our Mission', text: 'To deliver unparalleled marine services that exceed expectations through innovation and expertise.' },
              { icon: '👁️', title: 'Our Vision', text: 'To be the most trusted and recognized marine solutions company across UAE and the GCC.' },
              { icon: '💎', title: 'Our Values', text: 'Integrity, Excellence, Precision, Safety, and Client-First approach in everything we do.' },
            ].map((v, i) => (
              <div key={i} style={{ background: '#F8F6F0', borderRadius: '6px', padding: '16px', borderTop: '3px solid var(--gold)' }}>
                <div style={{ fontSize: '22px', marginBottom: '8px' }}>{v.icon}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>
                  <EditableText editMode={editMode}>{v.title}</EditableText>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#5a6878', lineHeight: '1.6' }}>
                  <EditableText editMode={editMode}>{v.text}</EditableText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo footer */}
      <BrochureFooter variant="light" />
    </div>
  );
}
