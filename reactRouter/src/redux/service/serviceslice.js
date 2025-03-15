// src/redux/service/serviceSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunks for API Calls
export const fetchServices = createAsyncThunk("services/fetchServices", async () => {
  const response = await axios.get("http://localhost:4000/api/services");
  return response.data;
});

export const addService = createAsyncThunk("services/addService", async (serviceData) => {
  const response = await axios.post("http://localhost:4000/api/services", serviceData);
  return response.data;
});

export const deleteService = createAsyncThunk("services/deleteService", async (id) => {
  await axios.delete(`http://localhost:4000/api/services/${id}`);
  return id;
});

// Service Slice
const serviceSlice = createSlice({
  name: "services",
  initialState: { services: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.services.push(action.payload);
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.services = state.services.filter(service => service.id !== action.payload);
      });
  }
});

export default serviceSlice.reducer;
