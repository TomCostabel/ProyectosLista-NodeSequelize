import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const createTask = async (req, res) => {
    try {
        const { name, done, projectId } = req.body;

        const newTask = await Task.create({
            name,
            done,
            projectId,
        });
        res.json(newTask);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: {
                id,
            },
        });
        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, done } = req.body;

        const updatingTask = await Task.findByPk(id);
        updatingTask.name = name;
        updatingTask.done = done;
        await updatingTask.save();
        res.json(updateTask);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
