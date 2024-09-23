import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import BoxRentalManager from "./components/BoxRentalManager.jsx";
import WarehouseRentalManager from "./components/WarehouseRentalManager.jsx";
import ManagementScreen from "./components/ManagementScreen.jsx";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
