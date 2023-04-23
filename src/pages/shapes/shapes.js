import { SceneWithSpinningBoxes } from "../../components/babylonTest/babylonTest";
import { useSelector } from "react-redux";

function Shapes() {
  const imgData = useSelector((state) => state.value.imgVal);
  console.log("imgData", imgData);
  return (
    <>
      <div className="flex justify-center align-center">
        <div>list</div>
        <div
          className="flex justify-center align-center"
          style={{ height: "50%", width: "50%" }}
        >
          {" "}
          <SceneWithSpinningBoxes tex={imgData} />
        </div>
      </div>
    </>
  );
}

export default Shapes;
