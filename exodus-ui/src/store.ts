import { configureStore } from "@reduxjs/toolkit";
import boxRentalSlice from "./reducer/boxRentalSlice.js";
import warehouseRentalSlice from "./reducer/warehouseRentalSlice.js";

export const store = configureStore({
  reducer: { rentalAssignments: boxRentalSlice, warehouseRentals:  warehouseRentalSlice},
});

export type RootState = ReturnType<typeof store.getState>
