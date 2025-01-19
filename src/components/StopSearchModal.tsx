import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonBadge,
  IonText,
} from "@ionic/react";
import { bus, swapHorizontal } from "ionicons/icons";
import { stops, Stop } from "../misc/stopsData";

import "./StopSearchModal.scss";

const StopSearch: React.FC = () => {
  const renderStopOptions = () => {
    const stopOptions = stops.map((stop) => {
      return (
        <IonItem button routerLink="/route/blue" key={stop.id}>
          <IonIcon icon={bus} slot="start" />
          <IonLabel>
            <h2>{stop.name}</h2>
            <p>{stop.routeId}</p>
            {/* <p>
              <IonIcon icon={swapHorizontal} /> MEX 2
            </p>
            <p>Blvd Lic Manuel Cav...</p> */}
          </IonLabel>
          <IonBadge slot="end" color="primary">
            4 buses
          </IonBadge>
        </IonItem>
      );
    });

    return <IonList>{stopOptions}</IonList>;
  };
  return (
    <IonPage id="stop-search-modal">
      <IonHeader>
        <IonToolbar>
          <IonSearchbar placeholder="Busca una parada..." animated={true} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="divider-container">
          <div className="divider-line"></div>
          <IonText>Paradas</IonText>
        </div>
        {renderStopOptions()}
      </IonContent>
    </IonPage>
  );
};

export default StopSearch;
