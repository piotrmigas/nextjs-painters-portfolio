import { useState } from "react";
import Loader from "react-loader-spinner";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

const ExhibitionViews = ({ options }) => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  return (
    <Layout title="Exhibition Views">
      <div className="flex justify-center py-4 items-center">
        <h5 className="font-semibold">Exhibition Views</h5>
        <Loader type="Watch" height={19} width={19} className={`${!imgsLoaded ? "visible" : "invisible"} pl-2`} />
      </div>
      <Gallery options={options} imgsLoaded={imgsLoaded} setImgsLoaded={setImgsLoaded} />
    </Layout>
  );
};

export default ExhibitionViews;
