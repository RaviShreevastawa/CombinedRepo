import express from "express";
import {
  getAllServices,
  createService,
  updateService,
  deleteService,
} from "../controller/serviceController.js";

const router = express.Router();

router.get("/services", getAllServices);
router.post("/services", createService);
router.put("/services/:id", updateService);
router.delete("/services/:id", deleteService);

export default router;
