import React from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getCanvasType } from '../../util';

export default function CanvasTheme({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  
  const canvasType = getCanvasType(location.pathname);
  
  // Apply canvas class to body
  React.useEffect(() => {
    document.body.className = '';
    if (canvasType === 'cinematic') {
      document.body.classList.add('canvas-night');
    } else {
      document.body.classList.add('canvas-light');
    }
  }, [canvasType]);
  
  return <>{children}</>;
}