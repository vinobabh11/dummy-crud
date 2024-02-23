import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../api";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    name: "",
    data: null,
    loading: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// export const { updateTable } = productsSlice.actions;
export default usersSlice.reducer;
