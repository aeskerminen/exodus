import { configureStore } from "@reduxjs/toolkit";
import boxRentalSlice from "./reducer/boxRentalSlice";
import warehouseRentalSlice from "./reducer/warehouseRentalSlice";

export const store = configureStore({
  reducer: { rentalAssignments: boxRentalSlice, warehouseRentals:  warehouseRentalSlice},
});
