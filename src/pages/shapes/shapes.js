import { SceneWithSpinningBoxes } from "../../components/babylonTest/babylonTest";
import { useSelector, useDispatch } from "react-redux";
import "./shapes.css";
import { useState } from "react";
import { getShape } from "../../redux/shapeSlice/shapeSlice";
import { useNavigate } from "react-router-dom";
import { clrImage } from "../../redux/imageSlice/imageSlice";

function Shapes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imgData = useSelector((state) => state.image.value.imgVal);
  const [selectedShape, setSelectedShape] = useState("Cuboid");
  console.log("imgData", imgData);
  const list = ["Sphere", "Disc", "Torus", "Capsule", "Cuboid", "Cube"];

  function shapeSelectorHandler(el) {
    setSelectedShape(el);
    dispatch(getShape({ shapeVal: el }));
  }
  return (
    <>
      <div className="shapes-container flex justify-center align-center">
        <div className="list-container gap-y-6">
          <ul>
            <p className="select-shape-text"> Select Shape</p>
            <hr />
            {list.map((el) => {
              return (
                <li
                  className="list-elements"
                  onClick={() => {
                    shapeSelectorHandler(el);
                  }}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="flex justify-center align-center"
          style={{ width: "50%" }}
        >
          {" "}
          <SceneWithSpinningBoxes tex={imgData} />
        </div>
      </div>
      <div className="try-again-container">
        <div
          className="get-started-btn"
          onClick={() => {
            dispatch(clrImage());
            navigate("/mapping");
            window.location.reload();
          }}
        >
          Try again
        </div>
      </div>
    </>
  );
}

export default Shapes;
