import React, { useState, useRef, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonModal,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useHistory, useLocation } from "react-router-dom";

/* Components */
import RouteDetails from "../RouteDetails";
import StopSearch from "../StopSearch";
import MapRoutes from "./MapRoutes";

/* Styles */
import "./MapView.scss";
import "leaflet/dist/leaflet.css";

const MapView: React.FC = () => {
  // state
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // refs
  const modal = useRef<HTMLIonModalElement>(null);

  // DOM
  const history = useHistory();
  const location = useLocation();

  const matamorosCoords: LatLngExpression = [25.869, -97.5027];

  // This useEffect handles setting the modal to open when the search route is called
  useEffect(() => {
    if (location.pathname === "/search") {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location.pathname]);

  // Hack way to get the map to render fully before rendering it in the dom
  useEffect(() => {
    setTimeout(() => {
      setMapLoaded(true);
    }, 500);
  }, []);

  const handleSearchClick = () => {
    history.push("/search");
    setShowSearch(true);
  };

  return (
    <IonPage>
      <IonContent>
        {!mapLoaded ? (
          <>Loading...</>
        ) : (
          <MapContainer
            center={matamorosCoords}
            zoom={20}
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
            />
            <MapRoutes onSelect={setSelectedRoute} />
          </MapContainer>
        )}

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
          onDidDismiss={() => {
            setShowSearch(false);
            history.push("/");
          }}
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
