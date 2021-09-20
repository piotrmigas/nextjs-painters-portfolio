import { useEffect } from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { worksImgs } from "../data/worksImgs";
import { exhibitionImgs } from "../data/exhibitionImgs";

const Gallery = ({ options, setImgsLoaded, imgsLoaded }) => {
  const router = useRouter();

  const images = router.pathname === "/works" ? worksImgs : exhibitionImgs;

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.src;
        loadImg.onload = () => resolve(image.src);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(images.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    imgsLoaded && (
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-12 gap-2 mx-auto max-w-6xl px-12 pb-12"
          >
            {images
              .sort((a, b) => b.id - a.id)
              .map(({ id, src, caption }) => (
                <div className="aspect-w-1 aspect-h-1 relative" key={id}>
                  <img src={src} alt={caption} className="object-cover cursor-pointer" />
                </div>
              ))}
          </motion.div>
        </SRLWrapper>
      </SimpleReactLightbox>
    )
  );
};

export default Gallery;
