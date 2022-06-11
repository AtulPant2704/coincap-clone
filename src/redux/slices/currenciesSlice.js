import { createSlice } from "@reduxjs/toolkit";
import { getCurrencies } from "../asyncThunks";

const initialState = {
  currencies: [],
  status: "idle",
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {},
  extraReducers: {
    [getCurrencies.pending]: (state) => {
      state.status = "pending";
    },
    [getCurrencies.fulfilled]: (state, action) => {
      state.status = "resolved";
      console.log(action.payload);
      state.currencies = action.payload.data;
    },
    [getCurrencies.rejected]: (state, action) => {
      state.status = "failed";
      console.error(action.payload);
    },
  },
});

export const { reducer: currenciesReducer } = currenciesSlice;
