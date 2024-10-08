import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import BoxRentalManager from "./components/BoxRentalManager.tsx";
import WarehouseRentalManager from "./components/WarehouseRentalManager.jsx";
import ManagementScreen from "./components/ManagementScreen.tsx";
import MoveManager from "./components/MoveManager.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagementScreen></ManagementScreen>,
  },
  {
    path: "/management",
    element: <Outlet></Outlet>,
    children: [
      {
        path: "boxes",
        element: <BoxRentalManager></BoxRentalManager>,
      },
      {
        path: "warehouse",
        element: <WarehouseRentalManager></WarehouseRentalManager>,
      },
      {
        path: "move",
        element: <MoveManager></MoveManager>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
