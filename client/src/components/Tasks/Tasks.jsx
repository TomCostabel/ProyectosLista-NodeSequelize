import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { createTask, getAllProjects, getAllTasks } from "../../redux/action";
import Task from "../Task/Task";
import "../Tasks/Tasks.css";

export default function Tasks() {
    //--------------Constantes---------------->

    const { id } = useParams();
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
    const projects = useSelector((state) => state.projects);
    const titulo = projects?.filter((e) => e.id.toString() === id);
    const [input, setInput] = useState({
        name: "",
        projectId: id,
    });

    //--------------Funciones----------------->
    useEffect(() => {
        dispatch(getAllTasks());
        dispatch(getAllProjects());
    }, [dispatch, tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.name) return alert("🖋️ Primero escriba su tarea...");
        dispatch(createTask(input));

        setInput({
            name: "",
            projectId: id,
        });
    };
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    const tareas = tasks?.map((e) => {
        if (e.projectId.toString() === id)
            return <Task key={e.id} done={e.done} name={e.name} id={e.id} />;
    });

    //--------------Return-------------------->

    return (
        <div className="container-principal-tasks">
            <div className="back-button">
                <Link to="/">
                    <h3 className="back">🡨 Back</h3>
                </Link>
            </div>
            <div className="container-name-input">
                <h2 className="titulo"> {titulo[0]?.name.toUpperCase()}</h2>
                <div className="container-tasks">
                    {tareas.sort((x, y) => x.props.id - y.props.id)}
                </div>
            </div>
            <form className="form-tasks" onSubmit={handleSubmit}>
                <h2>ADD A NEW TASK</h2>
                <div className="container-inputs">
                    Name
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) => handleChange(e)}
                    />
                    <button className="button">✓</button>
                </div>
            </form>
        </div>
    );
}
