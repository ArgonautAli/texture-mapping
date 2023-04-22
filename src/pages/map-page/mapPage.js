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

export default function MapPage() {
  // const ref = createRef(null);
  const [imgData, setImgData] = useState();
  const ref = useRef();

  // useEffect(()=>{

  // }, [])

  console.log("ref", ref);

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

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    setImgData(a);
    a.href = image;
    a.download = createFileName(extension, name);
    console.log("img", a.href);
    a.click();
  };

  const downloadScreenshot = () => {
    console.log("ref?.current?.childNodes[0]", ref?.current?.childNodes[0]);
    const gmStyle =
      ref?.current?.childNodes[0]?.childNodes[0]?.childNodes[0].childNodes[0];
    takeScreenShot(gmStyle).then(download);
  };

  console.log(
    "a",
    ref?.current?.childNodes[0]?.childNodes[0]?.childNodes[0].childNodes[0]
  );

  return (
    <>
      <button onClick={downloadScreenshot}>Download screenshot</button>
      <div className="map-page-container" ref={ref}>
        <Map />
      </div>
      {imgData ? <img src={imgData.href} width={100} height={100} /> : null}
      <SceneWithSpinningBoxes />
    </>
  );
}
