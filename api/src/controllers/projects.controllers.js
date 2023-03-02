import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
    try {
        //---> genere error para probar el TryCatch
        // throw new Error("query failed");
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id,
            },
        });
        if (!project)
            return res.status(404).json({ message: "Project no existe" });
        res.json(project);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const createtProject = async (req, res) => {
    const { name, priority, description } = req.body;
    try {
        //---> Esto es asyncrono por que es una consulta hacia la base de datos (esta guardando un dato dentro de la DB)
        const newProject = await Project.create({
            name,
            description,
            priority,
        });

        res.json(newProject);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, priority, description } = req.body;

        //---> Accedo por ID
        const project = await Project.findByPk(id);
        //---> Les doy el valor "nuevo"
        project.name = name;
        project.priority = priority;
        project.description = description;
        //---> Guardo sus nuevos valores
        await project.save();
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        //---> DESTROY viene de sequelize y nos permite, como dice el nombre, destruir el coincidente.
        await Task.destroy({
            where: {
                projectId: id,
            },
        });
        await Project.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getProjectTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const tasks = await Task.findAll({
            where: {
                projectId: id,
            },
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
