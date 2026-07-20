import React from 'react'
import clsx from 'clsx'
import {ThemeClassNames} from '@docusaurus/theme-common'

export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx(ThemeClassNames.layout.footer.container, 'footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {logo && (
          <div className="margin-bottom--sm">
            <div className="footer__brand-row">
              {logo}
            </div>
            <p className="footer__brand-desc">Open source DIY electronic music instruments. Built by makers, for makers.</p>
          </div>
        )}
        {links}
      </div>
      {copyright && (
        <div className="footer__bottom text--center">
          {copyright}
        </div>
      )}
    </footer>
  )
}
