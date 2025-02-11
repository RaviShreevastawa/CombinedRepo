import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./user/authSlice";
import ThemeSlice from "./theme/ThemeSlice";

const store = configureStore({
    reducer : {
        auth : authSlice,
        theme : ThemeSlice
    },
});

export default store;