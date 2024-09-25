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
    set: (state, action) => {
      return action.payload;
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { add, addAll, set, remove } = boxRentalSlice.actions;

export const addRentalAssignment = (rentalAssignment) => async (dispatch) => {
  const res = await boxRentalService.addRentalAssignment(rentalAssignment);
  dispatch(add(res));
};

export const deleteRentalAssignment = (id) => async (dispatch) => {
  dispatch(remove(id));
  boxRentalService.removeRentalAssignment(id);
};

export const fetchRentalAssignments = () => async (dispatch) => {
  const res = await boxRentalService.getRentalAssignments();
  dispatch(set(res));
};

export default boxRentalSlice.reducer;
