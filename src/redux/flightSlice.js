import { createSlice } from "@reduxjs/toolkit";
import { getFlight } from "./actions";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};
const flightSlice = createSlice({
  name: "Flight",
  initialState,
  extraReducers: (builder) => {
    // cevap beklerken calisir
    builder.addCase(getFlight.pending, (state) => {
      state.isLoading = true;
    });
    // olumlu cevap geldigide calisir
    builder.addCase(getFlight.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    });
    // olumsuz cevap geldiginde calisir
    builder.addCase(getFlight.rejected, (state) => {
      state.isLoading = false;
      state.isError = "Ucus verilierini alirken bir hata olustu";
    });
  },
});

export default flightSlice.reducer;
