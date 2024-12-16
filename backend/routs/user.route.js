import express from 'express';
import { login, logout, register, updateProfile } from '../controller/user.controller.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { singleUpload } from '../middleware/multer.js';
// Create a router instance
const router = express.Router();

// Define routes
router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout)
router.route("/profile/update").post(isAuthenticated,singleUpload, updateProfile);

// Export the router
export default router;
