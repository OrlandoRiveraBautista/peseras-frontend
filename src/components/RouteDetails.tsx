import React from "react";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonProgressBar,
} from "@ionic/react";
import { bus, time } from "ionicons/icons";

interface RouteDetailsProps {
  routeId: string | null;
  onDismiss: () => void;
}

const RouteDetails: React.FC<RouteDetailsProps> = ({ routeId }) => {
  return (
    <IonContent className="ion-padding">
      <div className="sheet-handle"></div>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Ruta {routeId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="text-sm text-gray-600 mb-4">
        <div>Matamoros Centro - Terminal</div>
      </div>
      <IonList>
        <IonItem>
          <IonIcon icon={bus} slot="start" />
          <IonLabel>
            <h2>Próximo Bus</h2>
            <p>
              <IonIcon icon={time} /> 2 mins
            </p>
          </IonLabel>
          <div slot="end" className="text-right">
            <div className="text-sm">Cap: 50%</div>
            <IonProgressBar value={0.5} color="primary" />
          </div>
        </IonItem>
        <IonItem>
          <IonIcon icon={bus} slot="start" />
          <IonLabel>
            <h2>Siguiente</h2>
            <p>
              <IonIcon icon={time} /> 15 mins
            </p>
          </IonLabel>
          <div slot="end" className="text-right">
            <div className="text-sm">Cap: 30%</div>
            <IonProgressBar value={0.3} color="success" />
          </div>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default RouteDetails;
