"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import type { LatLngExpression } from "leaflet";

interface LeafletMapProps {
  center?: LatLngExpression;
  zoom?: number;
  markerPosition?: LatLngExpression;
  popupText?: string;
}

export default function LeafletMap({
  center,
  markerPosition,
  zoom,
  popupText,
}: LeafletMapProps) {
  useEffect(() => {
    // @ts-ignore
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconUrl: "/assets/icons/map-icon.svg",
      iconRetinaUrl: "/assets/icons/marker-icon.svg",
      shadowUrl: "/assets/icons/marker-icon.svg",
      iconSize: [32, 32],
      shadowSize: [40, 40],
      iconAnchor: [16, 32],
      shadowAnchor: [20, 32],
      popupAnchor: [0, -32],
    });
  }, []);

  return (
    <div className="relative z-0 h-96 w-full lg:h-80">
      <MapContainer
        scrollWheelZoom={false}
        doubleClickZoom={false}
        center={center}
        zoom={zoom}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={markerPosition as LatLngExpression}>
          <Popup>{popupText}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
