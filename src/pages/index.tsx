import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { soloExhibitions } from '../data/soloExhibitions';
import { groupExhibitions } from '../data/groupExhibitions';

const Home = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
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
    >
      <Layout title="Emilia Kina's Portfolio">
        <div className='max-w-6xl px-12 mx-auto'>
          <h5 className='py-4 text-center font-semibold'>About</h5>
          <p className='pb-4'>
            Born in 1990. In 2010-2015, I studied at the Faculty of Paiting at the Jan Matejko Academy of Fine Arts in
            Krakow. My works primarily in painting and photography. I works spring from theoretical considerations and
            are rich in references to traditional painting. The motif of image-curtain which I employs is a clear
            reference to the Renaissance concept of a painting as a window onto the world. The theme of opening is
            replaced with the self-covering image, at once manifesting its physicality. I am is interested in the
            materiality of the image, a simple form arising from complex problems.The image in the world, which is
            constantly being reproduced and copied, slowly loses its source. In my creative work I focus on
            reproductions, making more copies myself.
          </p>
          <h5 className='py-4 font-semibold'>SOLO EXHIBITIONS:</h5>
          <ul className='pb-4 divide-y divide-gray-300'>
            {soloExhibitions
              .sort((a, b) => b.id - a.id)
              .map(({ name, id }) => (
                <li key={id} className='py-1 pl-4'>
                  {name}
                </li>
              ))}
          </ul>
          <h5 className='py-4 font-semibold'>GROUP EXHIBITIONS:</h5>
          <ul className='pb-4 divide-y divide-gray-300'>
            {groupExhibitions
              .sort((a, b) => b.id - a.id)
              .map(({ name, id }) => (
                <li key={id} className='py-1 pl-4'>
                  {name}
                </li>
              ))}
          </ul>
          <p className='font-semibold py-5'>
            Contact:{' '}
            <a href='mailto:kinaemila@gmail.com' className='text-blue-600 no-underline hover:text-blue-700'>
              kinaemila@gmail.com
            </a>
          </p>
        </div>
      </Layout>
    </motion.div>
  );
};

export default Home;
