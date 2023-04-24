import { SceneWithSpinningBoxes } from "../../components/babylonTest/babylonTest";
import { useSelector, useDispatch } from "react-redux";
import "./shapes.css";
import { useState } from "react";
import { getShape } from "../../redux/shapeSlice/shapeSlice";

function Shapes() {
  const dispatch = useDispatch();
  const imgData = useSelector((state) => state.image.value.imgVal);
  const [selectedShape, setSelectedShape] = useState("");
  console.log("imgData", imgData);
  const list = ["Cuboid", "Sphere", "Disc", "Torus", "Capsule"];

  function shapeSelectorHandler(el) {
    setSelectedShape(el);
    dispatch(getShape({ shapeVal: el }));
  }
  return (
    <>
      <div className="shapes-container flex justify-center align-center">
        <div className="list-container gap-y-6">
          <ul>
            <p className=".select-shape-text"> Select Shape</p>
            {list.map((el) => {
              return (
                <li
                  className="list-elements "
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
    </>
  );
}

export default Shapes;
