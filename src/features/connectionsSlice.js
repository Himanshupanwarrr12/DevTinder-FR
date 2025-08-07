import { createSlice } from "@reduxjs/toolkit";

export const connectionsSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    showConnections: (state, action) => {
      return action.payload;
    },
  },
});

export const { showConnections } = connectionsSlice.actions;
export default connectionsSlice.reducer;
