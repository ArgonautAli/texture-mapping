import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo } from "react";
import "./mapContainer.css";

function Map() {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = { lat: 28.7041, lng: 77.1025 };
  // useEffect(() => {
  //   window.location.reload();
  // }, []);

  console.log("loader", isLoaded);
  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            // initialCenter={{
            //   lat: 40.854885,
            //   lng: -88.081807,
            // }}
            zoom={10}
          />
        </>
      )}
    </div>
  );
}

export default Map;
