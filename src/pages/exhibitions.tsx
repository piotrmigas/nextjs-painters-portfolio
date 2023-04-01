import { useState } from 'react';
import { Watch as Loader } from 'react-loader-spinner';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import { LightboxOptions } from '../../types';

const ExhibitionViews = ({ options }: { options: LightboxOptions }) => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  return (
    <Layout title='Exhibition Views'>
      <div className='flex justify-center py-4 items-center'>
        <h5 className='font-semibold'>Exhibition Views</h5>
        <Loader height={19} width={19} wrapperClass={`${!imgsLoaded ? 'visible' : 'invisible'} pl-2`} />
      </div>
      <Gallery imgsLoaded={imgsLoaded} setImgsLoaded={setImgsLoaded} options={options} />
    </Layout>
  );
};

export default ExhibitionViews;
