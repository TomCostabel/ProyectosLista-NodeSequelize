import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProject, getAllProjects } from "../../redux/action";
import "../Home/Home.css";
import Proyecto from "../Proyecto/Proyecto";

export default function Home() {
    //--------------Constantes------------------->
    const projects = useSelector((state) => state.projects);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        description: "",
    });
    //--------------Funciones-------------------->
    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch, projects]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.name || !input.description)
            return alert("Ambos campos necesarios...");
        dispatch(AddProject(input));
        setInput({
            name: "",
            description: "",
        });
    };
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    //---------- {Return}------>

    if (!projects) {
        return <h1>Cargando</h1>;
    }
    return (
        <div className="container">
            <div className="container-principal">
                <section className="contenedor-projects">
                    <div className="container-section">
                        {projects?.map((e) => {
                            return (
                                <Proyecto
                                    key={e.id}
                                    description={e.description}
                                    id={e.id}
                                    name={e.name}
                                />
                            );
                        })}
                    </div>
                </section>
            </div>
            {/*-------------FORMULARIO-------------- */}
            <div className="conatiner-form">
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <h2>ADD YOUR NEW PROJECT</h2>
                        <div className="container-inputs">
                            Name
                            <input
                                type="text"
                                name="name"
                                value={input.name}
                                onChange={(e) => handleChange(e)}
                            />
                            Description
                            <input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button className="button">✓</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
