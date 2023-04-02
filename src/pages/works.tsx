import { useState } from 'react';
import { Watch as Loader } from 'react-loader-spinner';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import { LightboxOptions } from '../../types';

type WorksProps = {
  options: LightboxOptions;
};

const Works = ({ options }: WorksProps) => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  return (
    <Layout title='Works'>
      <div className='flex justify-center py-4 items-center'>
        <h5 className='font-semibold'>Works</h5>
        <Loader height={19} width={19} wrapperClass={`${!imgsLoaded ? 'visible' : 'invisible'} pl-2`} />
      </div>
      <Gallery imgsLoaded={imgsLoaded} setImgsLoaded={setImgsLoaded} options={options} />
    </Layout>
  );
};

export default Works;
