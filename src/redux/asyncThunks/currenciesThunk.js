import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getCurrencies = createAsyncThunk(
  "getCurrencies",
  async (rejectWithValue) => {
    try {
      const response = await axios.get(
        "https://api.coincap.io/v2/assets/?limit=5"
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export { getCurrencies };
