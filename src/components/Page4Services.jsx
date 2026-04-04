import React from 'react';
import { EditableText, EditableImage } from './Editable';
import BrochureFooter from './BrochureFooter';

const services = [
  {
    icon: '🛥️',
    img: '/yacht_cover.png',
    title: 'Luxury Yacht Charter & Operations',
    text: "Experience the finest in maritime luxury. We manage end-to-end charter operations — crewing, itinerary planning, provisioning, guest services, and full vessel management — ensuring every voyage is flawless and memorable.",
  },
  {
    icon: '🤝',
    img: '/yacht_marina.png',
    title: 'Yacht Sales & Brokerage',
    text: "Our expert brokerage team facilitates the buying and selling of luxury yachts with full market intelligence, legal due diligence, sea trials, and post-sale support. Trusted by private and institutional clients alike.",
  },
  {
    icon: '⚙️',
    img: '/yacht_aerial.png',
    title: 'Yacht Management',
    text: "Comprehensive yacht management that covers financial administration, crew management, regulatory compliance, insurance coordination, and proactive maintenance planning — giving owners complete peace of mind.",
  },
  {
    icon: '🔧',
    img: '/yacht_engineering.png',
    title: 'Yacht Maintenance & Technical Services',
    text: "From routine servicing to complex technical overhauls, our certified marine engineers deliver precision maintenance across hull, engine, electrical, and navigation systems — keeping your vessel at peak performance.",
  },
];

export default function Page4Services({ editMode }) {
  return (
    <div className="p4-content">
      {/* Header strip */}
      <div className="p4-top">
        <span className="p4-top-label">
          <EditableText editMode={editMode}>Premium Elite Marine Services LLC</EditableText>
        </span>
        <span className="p4-top-page" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.6rem' }}>04 / 06</span>
      </div>

      <div className="p4-inner">
        <p className="section-eyebrow">
          <EditableText editMode={editMode}>What We Offer</EditableText>
        </p>
        <h2 className="section-title">
          <EditableText editMode={editMode}>Core Services</EditableText>
        </h2>
        <div className="gold-underline" />

        <p className="body-text" style={{ maxWidth: '560px', marginBottom: '8px' }}>
          <EditableText editMode={editMode}>
            Our core service portfolio covers the complete lifecycle of yacht ownership and operation, ensuring world-class support at every stage.
          </EditableText>
        </p>

        {/* 2x2 Service Grid */}
        <div className="p4-services-grid">
          {services.map((svc, i) => (
            <div key={i} className="p4-service-card">
              <div style={{ height: '130px', overflow: 'hidden' }}>
                <EditableImage
                  src={svc.img}
                  alt={svc.title}
                  editMode={editMode}
                  style={{ width: '100%', height: '130px' }}
                />
              </div>
              <div className="p4-card-body">
                <div className="p4-card-icon">{svc.icon}</div>
                <div className="p4-card-title">
                  <EditableText editMode={editMode}>{svc.title}</EditableText>
                </div>
                <div className="p4-card-text">
                  <EditableText editMode={editMode}>{svc.text}</EditableText>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo footer */}
      <BrochureFooter variant="light" />
    </div>
  );
}
