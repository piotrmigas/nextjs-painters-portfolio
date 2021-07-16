import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { worksImgs } from "../data/worksImgs";
import { exhibitionImgs } from "../data/exhibitionImgs";

const Gallery = ({ options, loaded, onLoad }) => {
  const router = useRouter();

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <div className={`${!loaded ? "hidden" : "block"}`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
            className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-12 gap-2 mx-auto max-w-6xl px-12 pb-12"
          >
            {(router.pathname === "/works" ? worksImgs : exhibitionImgs)
              .sort((a, b) => b.id - a.id)
              .map(({ id, src, caption }) => (
                <div className="aspect-w-1 aspect-h-1" key={id}>
                  <img src={src} alt={caption} onLoad={onLoad} className="object-cover cursor-pointer" />
                </div>
              ))}
          </motion.div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default Gallery;
