import { createSlice } from "@reduxjs/toolkit";
import warehouseRentalService from "../services/warehouseRentalService";

const initialState = [];

export const warehouseRentalSlice = createSlice({
  name: "warehouseRentals",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    addAll: (state, action) => {
      state.push(...action.payload);
    },
    set: (state, action) => {
      return action.payload
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { add, addAll, set, remove } = warehouseRentalSlice.actions;

export const addwarehouseRental = (warehouseRental) => async (dispatch) => {
  const res = await warehouseRentalService.addWarehouseRental(warehouseRental);
  dispatch(add(res));
};

export const deleteWarehouseRental = (id) => async (dispatch) => {
  dispatch(remove(id));
  warehouseRentalService.removeWarehouseRental(id);
};

export const fetchWarehouseRentals = () => async (dispatch) => {
  const res = await warehouseRentalService.getWarehouseRentals();
  dispatch(set(res));
};

export default warehouseRentalSlice.reducer;
