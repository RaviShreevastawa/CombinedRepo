// src/controllers/serviceController.js
import Service from "../models/serviceSchema.js";

// @desc Get all services
// @route GET /api/services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc Create a new service
// @route POST /api/services
export const createService = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newService = new Service({
      title,
      description,
      price,
    });

    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error: error.message });
  }
};

// @desc Update a service
// @route PUT /api/services/:id
export const updateService = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const serviceId = req.params.id;

    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { title, description, price },
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error: error.message });
  }
};

// @desc Delete a service
// @route DELETE /api/services/:id
export const deleteService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const deletedService = await Service.findByIdAndDelete(serviceId);

    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error: error.message });
  }
};
