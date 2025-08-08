import { createSlice } from "@reduxjs/toolkit";

export const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    showRequests: (state, action) => {
      return action.payload;
    },
  },
});

export const { showRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
