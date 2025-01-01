import React, { useState, useRef } from "react";
import {
  IonContent,
  IonPage,
  IonModal,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

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

  // refs
  const modal = useRef<HTMLIonModalElement>(null);

  const matamorosCoords: LatLngExpression = [25.869, -97.5027];

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  return (
    <IonPage>
      <IonContent>
        {/* {!mapLoaded && (
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
        )} */}
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
          <MapRoutes onSelect={setSelectedRoute} />
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
