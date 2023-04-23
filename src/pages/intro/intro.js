import "./intro.css";
import mapGif from "../../assets/images/location-maps.gif";
import add from "../../assets/images/plus.png";
import cube from "../../assets/images/cube.gif";
import { RightArrow } from "../../components/utils/icons";
import { useNavigate } from "react-router-dom";

function IntroPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="intro-container">
        <div className="intro-container-upper flex align-center gap-x-6">
          <img src={mapGif} height={200} width={200} />
          {/* <img src={add} style={{ width: "50px", height: "50px" }} /> */}
          <img src={cube} height={200} width={200} />
        </div>
        <div className="heading-text flex justify-center mt-4">
          {" "}
          Texture mapping by &nbsp;{" "}
          <a
            href="https://alihaiderkhan.com"
            target="_blank"
            style={{ fontStyle: "italic", color: "blue" }}
          >
            Ali Haider Khan
          </a>{" "}
        </div>
        <div className="  flex justify-center mt-4">
          <div
            className="get-started-btn gap-x-4"
            onClick={() => navigate("/mapping")}
          >
            {" "}
            Get Started <RightArrow />
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroPage;
