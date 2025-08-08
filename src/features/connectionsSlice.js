import { createSlice } from "@reduxjs/toolkit";

export const connectionsSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    showConnections: (state, action) => {
      return action.payload;
    },
    removeConnections:() => null,
  },
});

export const { showConnections,removeConnections } = connectionsSlice.actions;
export default connectionsSlice.reducer;
