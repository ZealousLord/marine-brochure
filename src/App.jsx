import React, { useState, useRef, useEffect } from 'react';
import Page1Cover from './components/Page1Cover';
import Page2About from './components/Page2About';
import Page3Expertise from './components/Page3Expertise';
import Page4Services from './components/Page4Services';
import Page5Specialized from './components/Page5Specialized';
import Page6WhyContact from './components/Page6WhyContact';
import './index.css';

const pages = [
  { id: 'p1', label: 'Cover' },
  { id: 'p2', label: 'About Us' },
  { id: 'p3', label: 'Expertise' },
  { id: 'p4', label: 'Core Services' },
  { id: 'p5', label: 'Specialized' },
  { id: 'p6', label: 'Contact' },
];


export default function App() {
  const [editMode, setEditMode] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [activePage, setActivePage] = useState(0);

  // Refs for the outer page-section wrappers (used for scroll tracking)
  const sectionRefs = useRef([]);
  // Refs for the actual .brochure-page divs (used for PDF capture)
  const brochurePageRefs = useRef([]);

  // Track active page on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((r) => r === entry.target);
            if (idx !== -1) setActivePage(idx);
          }
        });
      },
      { threshold: 0.35 }
    );
    sectionRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const scrollToPage = (idx) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDownloadPDF = async () => {
    if (exporting) return;

    setExporting(true);
    setExportProgress(0);

    // Turn off edit mode so contentEditable borders don't show in PDF
    const wasEditing = editMode;
    setEditMode(false);

    // Wait for React to re-render with edit mode off
    await new Promise((r) => setTimeout(r, 500));

    try {
      const [html2canvasModule, jsPDFModule] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);

      const html2canvas = html2canvasModule.default;
      const { jsPDF } = jsPDFModule;

      // A4 exact dimensions in mm
      const PAGE_W = 210;
      const PAGE_H = 297;

      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true,
      });

      const totalPages = brochurePageRefs.current.length;

      for (let i = 0; i < totalPages; i++) {
        const el = brochurePageRefs.current[i];
        if (!el) continue;

        setExportProgress(Math.round(((i) / totalPages) * 90));

        // Scroll element into view so off-screen content renders
        el.scrollIntoView();
        await new Promise((r) => setTimeout(r, 120));

        // Capture at 2× resolution for crispness
        const canvas = await html2canvas(el, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: '#ffffff',
          width: el.offsetWidth,
          height: el.offsetHeight,
          windowWidth: el.offsetWidth,
          windowHeight: el.offsetHeight,
          scrollX: 0,
          scrollY: 0,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.92);

        // Always fit image to exactly A4 (stretch/compress to fill)
        // This guarantees no cut-off and no blank space.
        const canvasRatio = canvas.height / canvas.width;
        let imgW = PAGE_W;
        let imgH = PAGE_W * canvasRatio;

        // If taller than A4, scale down to fit
        if (imgH > PAGE_H) {
          imgH = PAGE_H;
          imgW = PAGE_H / canvasRatio;
        }

        // Centre on page
        const offsetX = (PAGE_W - imgW) / 2;
        const offsetY = (PAGE_H - imgH) / 2;

        // Add new page for pages after the first
        if (i > 0) pdf.addPage();

        pdf.addImage(imgData, 'JPEG', offsetX, offsetY, imgW, imgH);
      }

      setExportProgress(100);
      await new Promise((r) => setTimeout(r, 300));
      pdf.save('Premium-Elite-Marine-Services-Brochure.pdf');

    } catch (err) {
      console.error('PDF export error:', err);
      alert(`PDF export failed: ${err.message || err}`);
    }

    setExporting(false);
    setExportProgress(0);
    setEditMode(wasEditing);
  };

  return (
    <div className={`app-shell ${editMode ? 'edit-mode' : ''}`}>

      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="nav-brand">
          <div className="nav-logo-icon">⚓</div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">Premium Elite Marine Services LLC</span>
            <span className="nav-brand-sub">Brochure Studio</span>
          </div>
        </div>
        <div className="nav-actions">
          <button
            id="btn-edit-mode"
            className={`btn btn-outline ${editMode ? 'active' : ''}`}
            onClick={() => setEditMode(!editMode)}
            disabled={exporting}
          >
            {editMode ? '✅ Exit Edit' : '✏️ Edit Mode'}
          </button>
          <button
            id="btn-download-pdf"
            className="btn btn-primary"
            onClick={handleDownloadPDF}
            disabled={exporting}
          >
            {exporting
              ? exportProgress > 0
                ? `⏳ ${exportProgress}% — Building PDF…`
                : '⏳ Preparing…'
              : '⬇️ Download PDF'}
          </button>
        </div>
      </nav>

      {/* Export progress bar */}
      {exporting && (
        <div className="export-progress-bar">
          <div
            className="export-progress-fill"
            style={{ width: `${exportProgress}%` }}
          />
        </div>
      )}

      {/* Page navigation dots */}
      <div className="page-nav">
        {pages.map((p, idx) => (
          <div
            key={p.id}
            className={`page-dot ${activePage === idx ? 'active' : ''}`}
            onClick={() => scrollToPage(idx)}
          >
            <span className="page-dot-tooltip">{p.label}</span>
          </div>
        ))}
      </div>

      {/* Brochure Content */}
      <main className="brochure-main">
        {pages.map((p, idx) => (
          <div
            key={p.id}
            id={p.id}
            className="page-section"
            ref={(el) => (sectionRefs.current[idx] = el)}
          >
            <div className="page-label">Page {idx + 1} — {p.label}</div>
            <div
              className="brochure-page"
              ref={(el) => (brochurePageRefs.current[idx] = el)}
            >
              {idx === 0 && <Page1Cover editMode={editMode} />}
              {idx === 1 && <Page2About editMode={editMode} />}
              {idx === 2 && <Page3Expertise editMode={editMode} />}
              {idx === 3 && <Page4Services editMode={editMode} />}
              {idx === 4 && <Page5Specialized editMode={editMode} />}
              {idx === 5 && <Page6WhyContact editMode={editMode} />}
            </div>
          </div>
        ))}
      </main>

      {/* Edit Mode Indicator */}
      {editMode && (
        <div className="edit-indicator">
          ✏️ Edit Mode Active — Click Any Text or Image to Edit
        </div>
      )}
    </div>
  );
}
