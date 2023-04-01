import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { worksImgs } from '../data/worksImgs';
import { exhibitionImgs } from '../data/exhibitionImgs';

type GalleryProps = {
  setImgsLoaded: (value: boolean) => void;
  imgsLoaded: boolean;
  options: any;
};

const Gallery = ({ setImgsLoaded, imgsLoaded, options }: GalleryProps) => {
  const router = useRouter();
  const images = router.pathname === '/works' ? worksImgs : exhibitionImgs;

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const loadImage = async (image: any) => {
          await new Promise((resolve, reject) => {
            const loadImg = new Image();
            loadImg.src = image.src;
            loadImg.onload = () => resolve(image.src);
            loadImg.onerror = (err) => reject(err);
          });
        };
        await Promise.all(images.map((image) => loadImage(image)));
        setImgsLoaded(true);
      } catch (err) {
        console.log('Failed to load images', err);
      }
    };

    handleLoad();
  }, [images, setImgsLoaded]);

  return imgsLoaded ? (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          className='grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-12 gap-2 mx-auto max-w-6xl px-12 pb-12'
        >
          {images
            .sort((a, b) => b.id - a.id)
            .map(({ id, src, caption }) => (
              <div className='aspect-w-1 aspect-h-1 relative hover:bg-blue-400' key={id}>
                <img src={src} alt={caption} className='object-cover cursor-pointer hover:opacity-60' />
              </div>
            ))}
        </motion.div>
      </SRLWrapper>
    </SimpleReactLightbox>
  ) : null;
};

export default Gallery;
