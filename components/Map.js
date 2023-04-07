import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

export const Maps = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((results) => ({
    longitude: results.long,
    latitude: results.lat,
  }));
  const center = getCenter(coordinates);
  return (
    <Map
      mapStyle="mapbox://styles/mayank0908/clg5f275k000g01nr47v34udq"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: "100%", height: "100%", maxHeight: "100%" }}
    >
      {searchResults.map((results) => (
        <div key={results.long}>
          <Marker
            longitude={results.long}
            latitude={results.lat}
            offsetLeft={-10}
            offsetTop={-20}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <p
              aria-label="push-pin"
              role="img"
              onClick={() => setSelectedLocation(results)}
              className="cursor-pointer text2x animate-bounce"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === results.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={results.lat}
              longitude={results.long}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                border:'1px solid black',
                backgroundColor:'white'
              }}
            >
              {results.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
};
