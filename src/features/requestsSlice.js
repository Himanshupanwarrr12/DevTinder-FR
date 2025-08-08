import { createSlice } from "@reduxjs/toolkit";

export const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    showRequests: (state, action) => {
      return action.payload;
    },
    removeRequest:(state,action) =>{
      const newArr = state.filter((elm)=> elm._id != action.payload)
      return newArr
    }
  },
});

export const { showRequests,removeRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
