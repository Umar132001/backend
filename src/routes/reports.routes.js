import express from "express";
import auth from "../middlewares/auth.middleware.js"; // Authentication middleware
import * as reportsController from "../controllers/reports.controller.js"; // Reports controller

const router = express.Router();

// Get Burndown Data
router.get("/burndown", auth(), reportsController.getBurndownData);

// Get Team Velocity Data
router.get("/velocity", auth(), reportsController.getTeamVelocity);

// Get Workload Analysis Data
router.get("/workload", auth(), reportsController.getWorkloadData);

// Get Recurring Tasks Data
router.get("/recurring", auth(), reportsController.getRecurringTasksData);

// Get Time Tracking Data
router.get("/time-tracking", auth(), reportsController.getTimeTrackingData);

export default router;
