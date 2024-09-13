import { configureStore } from "@reduxjs/toolkit";
import boxRentalSlice from "./reducer/boxRentalSlice";

export const store = configureStore({
  reducer: { rentalAssignments: boxRentalSlice },
});
