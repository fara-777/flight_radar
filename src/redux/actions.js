import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../helper/constants";
import axios from "axios";

export const getFlight = createAsyncThunk("flights/getFlights", async () => {
  const res = await axios.request(options);
  const newData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lan: flight[3],
  }));
  return newData;
});
