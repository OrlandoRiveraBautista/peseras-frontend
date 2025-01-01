import React, { useState, useEffect, useMemo } from "react";
import { useMap, Polyline } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import { routes } from "../../misc/routeData";

interface IMapRoutes {
  onSelect: (id: string | null) => void;
}

const MapRoutes: React.FC<IMapRoutes> = ({ onSelect }) => {
  const map = useMap();
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapLoaded) {
      const bounds = new LatLngBounds(routes.flatMap((route) => route.path));
      map.whenReady(() => map.fitBounds(bounds, { padding: [50, 50] }));
      setMapLoaded(true);
    }
  }, [map, mapLoaded]);

  const memoizedRoutes = useMemo(
    () =>
      routes.map((route) => (
        <Polyline
          key={route.id}
          positions={route.path}
          pathOptions={{ color: route.color, weight: 5, opacity: 0.8 }}
          eventHandlers={{
            click: (e) => {
              e.originalEvent.stopPropagation();
              onSelect(route.id);
            },
          }}
        />
      )),
    []
  );

  return <>{memoizedRoutes}</>;
};

export default MapRoutes;
