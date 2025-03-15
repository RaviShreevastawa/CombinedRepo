import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import routes
import userRoutes from "./src/routes/userRoutes.js";
import serviceRoutes from './src/routes/serviceRoutes.js'

// Route Declaration
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/service', serviceRoutes);

export { app };
