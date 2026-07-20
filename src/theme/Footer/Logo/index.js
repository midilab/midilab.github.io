import React from 'react';
import Link from '@docusaurus/Link';

export default function FooterLogo({logo}) {
  const content = (
    <>
      <span className="logo-badge">m</span>
      <span className="footer-logo-text">midilab</span>
    </>
  );
  return logo.href ? (
    <Link
      href={logo.href}
      className="footer-logo-link"
      target={logo.target}>
      {content}
    </Link>
  ) : (
    <div className="footer-logo-link">{content}</div>
  );
}
