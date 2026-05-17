import { getCanvasType } from '../../util';

export default function canvasThemePlugin(context, options) {
  return {
    name: 'canvas-theme',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
              (function() {
                const pathname = window.location.pathname;
                const canvasType = '${getCanvasType.toString().replace(/\\/g, '\\\\')}';
                const type = canvasType(pathname);
                
                if (type === 'cinematic') {
                  document.body.className = 'canvas-night';
                } else {
                  document.body.className = 'canvas-light';
                }
              })();
            `,
          },
        ],
      };
    },
  };
}