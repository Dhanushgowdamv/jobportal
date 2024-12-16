import express from 'express';
import { login, logout, register, updateProfile } from '../controller/user.controller.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controller/company.controller.js';

// Create a router instance
const router = express.Router();

// Define routes
router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById)
router.route("/update/:id").put(isAuthenticated, updateCompany);

// Export the router
export default router;
