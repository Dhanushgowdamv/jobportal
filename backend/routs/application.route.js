import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { applyJob, getApplicant,  getAppliedJob, updateStatu,  } from '../controller/application.controller.js';

// Create a router instance
const router = express.Router();

// Define routes
router.route("/apply/:id").post(isAuthenticated,applyJob);
router.route("/get").get(isAuthenticated,getAppliedJob);
router.route("/:id/applicants").get(isAuthenticated,getApplicant)
router.route("/status/:id/update").put(isAuthenticated, updateStatu);

// Export the router
export default router;
