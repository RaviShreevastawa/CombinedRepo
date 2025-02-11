import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.token; // Store token or user data here
    },
    logout: (state) => {
      state.status = false;
      state.userData = null; // Clear user data
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
