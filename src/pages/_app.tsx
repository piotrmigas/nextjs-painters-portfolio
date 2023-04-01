import '../styles/globals.css';
import type { AppProps } from 'next/app';

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
