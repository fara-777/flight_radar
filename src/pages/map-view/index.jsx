import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import planeIcon from "../../assets/plane.svg";
import { useSelector } from "react-redux";

const MapView = ({ openDetail }) => {
  const store = useSelector((store) => store.flightReducer);

  const markerIcon = new L.Icon({
    iconUrl: planeIcon,
    iconSize: [25, 35],
  });

  return (
    <div>
      {/* Map */}
      <MapContainer center={[53.0, 9.0]} zoom={5.5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {store.flights.map((fly) => (
          <Marker position={[fly.lat, fly.lan]} icon={markerIcon} key={fly.id}>
            <Popup>
              <div className="popup">
                <span> Kod:{fly.code}</span>
                <button
                  className="btn-detail"
                  onClick={() => openDetail(fly.id)}
                >
                  Detail
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
