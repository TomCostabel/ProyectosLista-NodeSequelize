import { Router } from "express";
import {
    getProjects,
    createtProject,
    updateProject,
    deleteProject,
    getProject,
    getProjectTasks,
} from "../controllers/projects.controllers.js";

const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createtProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects/:id", getProject);
router.get("/projects/:id/tasks", getProjectTasks);

export default router;
