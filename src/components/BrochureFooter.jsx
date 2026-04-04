import React from 'react';

/**
 * BrochureFooter — appears at the bottom of every brochure page.
 * Shows all 3 logos side by side.
 * @param {string} variant - 'dark' (white logos on dark bg) | 'light' (logos on white bg)
 */
export default function BrochureFooter({ variant = 'light' }) {
  const isDark = variant === 'dark';

  return (
    <div
      className="brochure-footer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        padding: '0px 52px',
        borderTop: isDark
          ? '1px solid rgba(212,175,55,0.25)'
          : '1px solid rgba(11,31,58,0.10)',
        background: isDark
          ? 'rgba(0,0,0,0.30)'
          : 'rgba(248,246,240,0.85)',
        flexShrink: 0,
      }}
    >
      <img
        src="/logo1_d3.PNG"
        alt="D3 Yacht Charter"
        style={{
          height: '90px',
          width: 'auto',
          objectFit: 'contain',
          filter: isDark ? 'brightness(1.8)' : 'invert(1) brightness(0.3)',
        }}
      />
      <div
        style={{
          width: '1px',
          height: '32px',
          background: isDark
            ? 'rgba(212,175,55,0.3)'
            : 'rgba(11,31,58,0.15)',
          flexShrink: 0,
        }}
      />
      <img
        src="/logo2_yachts.png"
        alt="Yachts"
        style={{
          height: '90px',
          width: 'auto',
          objectFit: 'contain',
          filter: isDark ? 'brightness(1.8)' : 'invert(1) brightness(0.3)',
        }}
      />
      <div
        style={{
          width: '1px',
          height: '32px',
          background: isDark
            ? 'rgba(212,175,55,0.3)'
            : 'rgba(11,31,58,0.15)',
          flexShrink: 0,
        }}
      />
      <img
        src="/logo3_white.PNG"
        alt="Partner Logo"
        style={{
          height: '90px',
          width: 'auto',
          objectFit: 'contain',
          filter: isDark ? 'brightness(1.8)' : 'invert(1) brightness(0.3)',
        }}
      />
    </div>
  );
}
