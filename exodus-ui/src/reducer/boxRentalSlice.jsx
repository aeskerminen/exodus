import { createSlice } from "@reduxjs/toolkit";
import boxRentalService from "../services/boxRentalService";

const initialState = [];

export const boxRentalSlice = createSlice({
  name: "rentalAssignments",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    addAll: (state, action) => {
      state.push(...action.payload);
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { add, addAll, remove } = boxRentalSlice.actions;

export const addRentalAssignment = (rentalAssignment) => async (dispatch) => {
  dispatch(add(rentalAssignment));
  boxRentalService.addRentalAssignment(rentalAssignment);
};

export const fetchRentalAssignments = () => async (dispatch) => {
  const res = await boxRentalService.getRentalAssignments();
  dispatch(addAll(res));
};

export default boxRentalSlice.reducer;
