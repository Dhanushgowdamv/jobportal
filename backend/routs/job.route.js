import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { getAdminJobs, getAllJobs,  getJobById,postJob} from '../controller/job.controller.js';

// Create a router instance
const router = express.Router();

// Define routes
router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/getAdminjob").get(isAuthenticated,getAdminJobs)
router.route("/get/:id").get(isAuthenticated, getJobById);

// Export the router
export default router;
