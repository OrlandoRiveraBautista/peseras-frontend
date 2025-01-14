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
} from "@ionic/react";
import { bus, swapHorizontal } from "ionicons/icons";

import "./StopSearchModal.scss";

const StopSearch: React.FC = () => {
  return (
    <IonPage id="stop-search-modal">
      <IonHeader>
        <IonToolbar>
          <IonSearchbar placeholder="Busca una parada..." animated={true} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink="/route/blue">
            <IonIcon icon={bus} slot="start" />
            <IonLabel>
              <h2>Calle Calixto de Ayala</h2>
              <p>
                <IonIcon icon={swapHorizontal} /> MEX 2
              </p>
              <p>Blvd Lic Manuel Cav...</p>
            </IonLabel>
            <IonBadge slot="end" color="primary">
              4 buses
            </IonBadge>
          </IonItem>
          <IonItem button routerLink="/route/green">
            <IonIcon icon={bus} slot="start" />
            <IonLabel>
              <h2>Calle Diagonal Cuauhtemoc</h2>
              <p>
                <IonIcon icon={swapHorizontal} /> Calle Sexta
              </p>
              <p>Calle Jose Maria Mo...</p>
            </IonLabel>
            <IonBadge slot="end" color="primary">
              2 buses
            </IonBadge>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default StopSearch;
