import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const options = {
    buttons: {
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      showAutoplayButton: false,
    },
    settings: {
      disablePanzoom: true,
      disableWheelControls: true,
    },
    thumbnails: {
      showThumbnails: false,
    },
    caption: {
      captionColor: '#b9bbc0',
      captionFontFamily: 'Montserrat, sans-serif',
    },
  };

  return <Component {...pageProps} options={options} />;
}
