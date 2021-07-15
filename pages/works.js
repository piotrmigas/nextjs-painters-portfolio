import { useState, useCallback } from "react";
import Loader from "react-loader-spinner";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

const Works = ({ options }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <Layout title="Works">
      <div className="flex justify-center py-4 items-center">
        <h5 className="font-semibold">Works</h5>
        <Loader type="Watch" height={19} width={19} className={`${!loaded ? "visible" : "invisible"} pl-2`} />
      </div>
      <Gallery options={options} onLoad={onLoad} loaded={loaded} />
    </Layout>
  );
};

export default Works;
