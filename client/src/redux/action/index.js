import axios from "axios";

export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS";
export const GET_ALL_TASKS = "GET_ALL_TASKS";
export const LOAD_ARTICLES = "LOAD_ARTICLES";

export function getAllProjects() {
    return async function (dispatch) {
        try {
            let res = await axios.get("projects");
            // console.log("desde action", res.data);
            dispatch({
                type: GET_ALL_PROJECTS,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
}
export function getAllTasks() {
    return async function (dispatch) {
        try {
            let res = await axios.get("tasks");
            dispatch({
                type: GET_ALL_TASKS,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
}
export function deleteTask(id) {
    return async () => {
        await axios.delete(`tasks/${id}`);
    };
}
export function createTask(payload) {
    return async function () {
        const response = await axios.post("tasks", payload);
        return response;
    };
}
export function updateTask(id, done) {
    return async () => {
        const response = await axios.put(`tasks/${id}`, done);
        return response;
    };
}
export function AddProject(payload) {
    return async () => {
        const response = await axios.post("projects", payload);
        return response;
    };
}
export function deleteProject(id) {
    return async () => {
        await axios.delete(`projects/${id}`);
    };
}
