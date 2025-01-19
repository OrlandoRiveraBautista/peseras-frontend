import { LatLngExpression } from "leaflet";

export interface Stop {
  id: string;
  name: string;
  location: LatLngExpression;
  color: string;
  routeId: string;
}

export const stops: Stop[] = [
  {
    id: "stop1",
    name: "Stop 1 - Ruta Norte",
    location: [25.879, -97.5127],
    color: "#8E44AD",
    routeId: "purple",
  },
  {
    id: "stop2",
    name: "Stop 2 - Ruta Norte",
    location: [25.879, -97.5027],
    color: "#8E44AD",
    routeId: "purple",
  },
  {
    id: "stop3",
    name: "Stop 3 - Ruta Norte",
    location: [25.879, -97.4927],
    color: "#8E44AD",
    routeId: "purple",
  },
  {
    id: "stop4",
    name: "Stop 1 - Ruta Centro",
    location: [25.879, -97.5027],
    color: "#3498DB",
    routeId: "blue",
  },
  {
    id: "stop5",
    name: "Stop 2 - Ruta Centro",
    location: [25.869, -97.5027],
    color: "#3498DB",
    routeId: "blue",
  },
  {
    id: "stop6",
    name: "Stop 3 - Ruta Centro",
    location: [25.859, -97.4927],
    color: "#3498DB",
    routeId: "blue",
  },
  {
    id: "stop7",
    name: "Stop 1 - Ruta Sur",
    location: [25.859, -97.4927],
    color: "#2ECC71",
    routeId: "green",
  },
  {
    id: "stop8",
    name: "Stop 2 - Ruta Sur",
    location: [25.849, -97.4927],
    color: "#2ECC71",
    routeId: "green",
  },
  {
    id: "stop9",
    name: "Stop 1 - Ruta Este",
    location: [25.869, -97.4827],
    color: "#F1C40F",
    routeId: "yellow",
  },
  {
    id: "stop10",
    name: "Stop 2 - Ruta Este",
    location: [25.869, -97.4727],
    color: "#F1C40F",
    routeId: "yellow",
  },
];
