import logo from "./logo.svg";
import "./App.css";
import Map from "./components/mapContainer/mapContainer";
import MapPage from "./pages/map-page/mapPage";
import AppRoutes from "./components/utils/routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
