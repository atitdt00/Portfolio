import express from "express";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
} from "../Controllers/projectController.js";

const router = express.Router();

// =======================================
// projects Routes
// =======================================

router.route("/").get(getProjects).post(createProject);

//api call by ID

router
  .route("/:id")
  .get(getProjectById)
  .put(updateProject)
  .delete(deleteProject);

export default router;
