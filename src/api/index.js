import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_KEY}/products`
  );
  return response.data;
});
