import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { applyJob,   getApplicants,  getAppliedJobs,  updateStatus,  } from '../controller/application.controller.js';

// Create a router instance
const router = express.Router();

// Define routes
router.route("/apply/:id").get(isAuthenticated,applyJob);
router.route("/get").get(isAuthenticated,getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated,getApplicants)
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

// Export the router
export default router;
