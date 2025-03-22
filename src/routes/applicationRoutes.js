import express from "express";
import { applyForJob, getApplications } from "../controllers/applicationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Apply for a job (JobSeeker only)
router.post("/:jobId", protect, applyForJob);

// Get all applications for a job (Admin & Company only)
router.get("/:jobId", protect, getApplications);

export default router;
