export interface LightboxOptions {
  buttons: {
    showDownloadButton: boolean;
    showFullscreenButton: boolean;
    showThumbnailsButton: boolean;
    showAutoplayButton: boolean;
  };
  settings: {
    disablePanzoom: boolean;
    disableWheelControls: boolean;
  };
  thumbnails: {
    showThumbnails: boolean;
  };
  caption: {
    captionColor: string;
    captionFontFamily: string;
  };
}
