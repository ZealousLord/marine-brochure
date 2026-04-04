import React from 'react';
import { EditableText, EditableImage } from './Editable';
import BrochureFooter from './BrochureFooter';

const usps = [
  { icon: '🏆', highlight: '15+ Years of Expertise', rest: ' in the UAE marine market with a proven track record of excellence.' },
  { icon: '⛵', highlight: 'Superyacht Specialists', rest: ' — certified and experienced with vessels up to 80m+ LOA.' },
  { icon: '🔄', highlight: 'End-to-End Solutions', rest: ' covering charter, sales, management, crew, and full technical services.' },
  { icon: '👨‍✈️', highlight: 'Professional Teams', rest: ' of certified captains, engineers, crew managers, and marine consultants.' },
  { icon: '✅', highlight: 'High Service Quality', rest: ' with ISO-aligned processes and stringent quality control on every project.' },
  { icon: '🌍', highlight: 'Global Reach, Local Expertise', rest: ' — headquartered in Dubai with a worldwide operational network.' },
];

export default function Page6WhyContact({ editMode }) {
  return (
    <div style={{ position: 'relative', minHeight: 'var(--a4-height)', display: 'flex', flexDirection: 'column' }}>
      {/* Background */}
      <div className="p6-bg" style={{ backgroundImage: "url('/yacht_sailing.png')" }} />
      <div className="p6-overlay" />

      <div className="p6-content" style={{ flex: 1 }}>
        {/* Header */}
        <div className="p6-header">
          <span className="p6-header-brand">
            <EditableText editMode={editMode}>Premium Elite Marine Services LLC</EditableText>
          </span>
          <span className="p6-header-page">06 / 06</span>
        </div>

        <div className="p6-inner">
          {/* Why Choose Us */}
          <div className="p6-why-section">
            {/* Left: USP list */}
            <div>
              <p style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px', fontWeight: '600' }}>
                <EditableText editMode={editMode}>The Premium Difference</EditableText>
              </p>
              <h2 className="p6-why-title">
                <EditableText editMode={editMode}>Why Choose</EditableText>
                <br />
                <EditableText editMode={editMode}>Premium Elite Marine?</EditableText>
              </h2>
              <div style={{ width: '56px', height: '3px', background: 'linear-gradient(90deg, var(--gold), transparent)', marginBottom: '16px' }} />
              <p className="p6-why-sub">
                <EditableText editMode={editMode}>
                  When excellence is non-negotiable, discerning clients choose Premium Elite Marine for our uncompromising commitment to quality, safety, and customer satisfaction.
                </EditableText>
              </p>

              <div className="p6-usp-list">
                {usps.map((usp, i) => (
                  <div key={i} className="p6-usp-item">
                    <div className="p6-usp-check">{usp.icon}</div>
                    <div className="p6-usp-text">
                      <span className="p6-usp-highlight">
                        <EditableText editMode={editMode}>{usp.highlight}</EditableText>
                      </span>
                      <EditableText editMode={editMode}>{usp.rest}</EditableText>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image + certs */}
            <div className="p6-yacht-panel">
              <div style={{ borderRadius: '6px', overflow: 'hidden', height: '220px', border: '1px solid rgba(212,175,55,0.2)' }}>
                <EditableImage
                  src="/yacht_marina.png"
                  alt="Luxury yacht marina"
                  editMode={editMode}
                  style={{ width: '100%', height: '220px' }}
                />
              </div>

              <div className="p6-certifications">
                {[
                  { val: 'ISO', label: 'Certified' },
                  { val: 'STCW', label: 'Compliant' },
                  { val: 'UAE', label: 'Licensed' },
                  { val: '24/7', label: 'Support' },
                ].map((c, i) => (
                  <div key={i} className="p6-cert">
                    <span className="p6-cert-val">
                      <EditableText editMode={editMode}>{c.val}</EditableText>
                    </span>
                    <EditableText editMode={editMode}>{c.label}</EditableText>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div style={{
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.25)',
                borderRadius: '6px',
                padding: '16px',
              }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', marginBottom: '10px' }}>
                  <EditableText editMode={editMode}>
                    "Premium Elite Marine delivered beyond every expectation. Their team's dedication to perfection is truly unmatched in the UAE."
                  </EditableText>
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--gold-light)', fontWeight: '600' }}>
                  <EditableText editMode={editMode}>— Yacht Owner, Dubai</EditableText>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="p6-contact">
            <div className="p6-contact-title">
              <EditableText editMode={editMode}>Get in Touch</EditableText>
            </div>

            <div className="p6-contact-grid">
              <div className="p6-contact-item">
                <div className="p6-contact-icon">📞</div>
                <div>
                  <div className="p6-contact-label">Phone</div>
                  <div className="p6-contact-value">
                    <EditableText editMode={editMode}>+971 XX XXX XXXX</EditableText>
                  </div>
                </div>
              </div>
              <div className="p6-contact-item">
                <div className="p6-contact-icon">✉️</div>
                <div>
                  <div className="p6-contact-label">Email</div>
                  <div className="p6-contact-value">
                    <EditableText editMode={editMode}>info@premiumelitemarine.ae</EditableText>
                  </div>
                </div>
              </div>
              <div className="p6-contact-item">
                <div className="p6-contact-icon">🌐</div>
                <div>
                  <div className="p6-contact-label">Website</div>
                  <div className="p6-contact-value">
                    <EditableText editMode={editMode}>www.premiumelitemarine.ae</EditableText>
                  </div>
                </div>
              </div>
            </div>

            <div className="p6-social-row">
              <span className="p6-social-label">Follow Us</span>
              {['📘', '📷', '💼', '🐦'].map((icon, i) => (
                <div key={i} className="p6-social-btn">{icon}</div>
              ))}
              <div style={{ marginLeft: 'auto' }}>
                <span className="p6-footer-gold">
                  <EditableText editMode={editMode}>Premium Elite Marine Services LLC — Dubai, UAE</EditableText>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo footer — dark variant */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <BrochureFooter variant="dark" />
      </div>
    </div>
  );
}
