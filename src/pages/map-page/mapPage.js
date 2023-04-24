import Map from "../../components/mapContainer/mapContainer";
import "./mapPage.css";
import React, {
  useCallback,
  useRef,
  createRef,
  useEffect,
  useState,
} from "react";
import * as htmlToImage from "html-to-image";
import { SceneWithSpinningBoxes } from "../../components/babylonTest/babylonTest";
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../../redux/imageSlice/imageSlice";
import { useNavigate } from "react-router-dom";

function MapPage() {
  // const ref = createRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgData, setImgData] = useState();
  const ref = useRef();
  const data = useSelector((state) => state.image);
  const [refresh, setRefresh] = useState(false);

  console.log("data", data);

  const createFileName = (extension = "", ...names) => {
    if (!extension) {
      return "";
    }

    return `${names.join("")}.${extension}`;
  };

  const takeScreenShot = async (node) => {
    const dataURI = await htmlToImage.toJpeg(node);

    return dataURI;
  };

  const download = (image, { name = "img", extension = "png" } = {}) => {
    const a = document.createElement("a");
    setImgData(a);
    a.href = image;
    // a.download = createFileName(extension, name);
    console.log("img", a.href);
    dispatch(getImage({ imgVal: a.href }));
    a.click();
  };

  const downloadScreenshot = () => {
    console.log("ref?.current?.childNodes[0]", ref?.current?.childNodes[0]);

    const gmStyle =
      ref?.current?.childNodes[0]?.childNodes[0]?.childNodes[0].childNodes[0];
    takeScreenShot(gmStyle).then(download);
    navigate("/shapes");
  };

  return (
    <>
      <div className="map-container-box gap-x-6">
        <div className="map-page-container" ref={ref}>
          <Map />
        </div>
        <div className="text-container-map">
          <ul>
            <li>1. Navigate to area of the map you want to capture</li>
            <li>2. Click on continue button</li>
          </ul>

          <button onClick={downloadScreenshot} className="get-started-btn mt-4">
            Continue
          </button>
        </div>
      </div>
      {/* {imgData ? <img src={imgData.href} width={100} height={100} /> : null} */}
      {/* {imgData && <SceneWithSpinningBoxes tex={imgData?.href} />} */}
    </>
  );
}

export default MapPage;
