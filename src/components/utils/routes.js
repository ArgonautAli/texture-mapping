import { Route, Routes } from "react-router-dom";
import IntroPage from "../../pages/intro/intro";
import MapPage from "../../pages/map-page/mapPage";
import Shapes from "../../pages/shapes/shapes";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/mapping" element={<MapPage />} />
        <Route path="/shapes" element={<Shapes />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
