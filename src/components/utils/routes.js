import { Route, Routes } from "react-router-dom";
import IntroPage from "../../pages/intro/intro";
import MapPage from "../../pages/map-page/mapPage";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/mapping" element={<MapPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
