import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  IonContent,
  IonPage,
  IonModal,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { LatLngExpression, LatLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";
import RouteDetails from "./RouteDetails";
import StopSearch from "./StopSearch";

/* Styles */
import "./MapView.scss";

const MapView: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);

  const matamorosCoords: LatLngExpression = [25.869, -97.5027];

  const routes: {
    id: string;
    name: string;
    path: LatLngExpression[];
    color: string;
  }[] = [
    {
      id: "purple",
      name: "Ruta Norte",
      path: [
        [25.879, -97.5127],
        [25.879, -97.5027],
        [25.879, -97.4927],
      ],
      color: "#8E44AD",
    },
    {
      id: "blue",
      name: "Ruta Centro",
      path: [
        [25.879, -97.5027],
        [25.869, -97.5027],
        [25.859, -97.4927],
      ],
      color: "#3498DB",
    },
    {
      id: "green",
      name: "Ruta Sur",
      path: [
        [25.859, -97.4927],
        [25.849, -97.4927],
      ],
      color: "#2ECC71",
    },
    {
      id: "yellow",
      name: "Ruta Este",
      path: [
        [25.869, -97.4827],
        [25.869, -97.4727],
      ],
      color: "#F1C40F",
    },
  ];

  const MapContent: React.FC = () => {
    const map = useMap();
    const mapEvents = useMapEvents({
      click: () => {
        if (selectedRoute) {
          setSelectedRoute(null);
        }
      },
    });

    useEffect(() => {
      if (!mapLoaded) {
        const bounds = new LatLngBounds(routes.flatMap((route) => route.path));

        // Wait for tile layer to load before fitting bounds
        map.whenReady(() => {
          map.fitBounds(bounds, { padding: [50, 50] });
        });

        setMapLoaded(true);
      }
    }, [map, mapLoaded]);

    const memoizedRoutes = useMemo(() => {
      return routes.map((route) => (
        <Polyline
          key={route.id}
          positions={route.path}
          pathOptions={{ color: route.color, weight: 5, opacity: 0.8 }}
          eventHandlers={{
            click: (e) => {
              e.originalEvent.stopPropagation();
              setSelectedRoute(route.id);
            },
          }}
        />
      ));
    }, []);

    return <>{memoizedRoutes}</>;
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  return (
    <IonPage>
      <IonContent>
        {!mapLoaded && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#f4f4f4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1001,
            }}
          >
            Loading map...
          </div>
        )}
        <MapContainer
          center={matamorosCoords}
          zoom={14}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // eventHandlers={{
            //   load: () => map.invalidateSize(),
            // }}
          />
          <MapContent />
        </MapContainer>

        <IonFab
          slot="fixed"
          vertical="bottom"
          horizontal="center"
          className="stretchable-fab"
        >
          <IonFabButton onClick={handleSearchClick}>
            Haga clic en una ruta para ver detalles
          </IonFabButton>
        </IonFab>

        <IonModal
          isOpen={showSearch}
          onDidDismiss={() => setShowSearch(false)}
          breakpoints={[0, 0.5, 0.75]}
          initialBreakpoint={0.75}
          className="sheet-modal"
        >
          <StopSearch />
        </IonModal>

        <IonModal
          ref={modal}
          isOpen={!!selectedRoute}
          onDidDismiss={() => setSelectedRoute(null)}
          breakpoints={[0, 0.5, 0.75]}
          initialBreakpoint={0.5}
          className="sheet-modal"
        >
          <RouteDetails
            routeId={selectedRoute}
            onDismiss={() => setSelectedRoute(null)}
          />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MapView;
