import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import cors from "cors";
const corsOptions = {
    origin: "https://proyectos-lista-node-sequelize.vercel.app",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
const app = express();
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

app.use(projectsRoutes);
app.use(tasksRoutes);
export default app;
