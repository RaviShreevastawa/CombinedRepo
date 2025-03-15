import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./user/authSlice";
import ThemeSlice from "./theme/ThemeSlice";
import serviceReducer from "./service/serviceslice"; // Import service slice

const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: ThemeSlice,
    services: serviceReducer, // Add this line
  },
});

export default store;
