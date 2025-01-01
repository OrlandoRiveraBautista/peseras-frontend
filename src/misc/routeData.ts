import { LatLngExpression } from "leaflet";

interface Route {
  id: string;
  name: string;
  path: LatLngExpression[];
  color: string;
}

export const routes: Route[] = [
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
