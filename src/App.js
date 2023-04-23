import logo from "./logo.svg";
import "./App.css";
import Map from "./components/mapContainer/mapContainer";
import MapPage from "./pages/map-page/mapPage";
import AppRoutes from "./components/utils/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
