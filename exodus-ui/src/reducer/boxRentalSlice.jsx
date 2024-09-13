import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const counterSlice = createSlice({
  name: "rentalAssignments",
  initialState,
  reducers: {
    add: (state, action) => {
      state.concat(action.payload);
    },
    remove: (state, action) => {
      state.filter((e) => e.id !== action.payload.id);
    },
  },
});

export const { add, remove } = counterSlice.actions;

export default counterSlice.reducer;
