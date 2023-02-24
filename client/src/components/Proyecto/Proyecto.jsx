import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProject } from "../../redux/action";
import "../Proyecto/Proyecto.css";

export default function Proyecto(props) {
    const dispatch = useDispatch();
    return (
        <div className="container-name">
            <div className="name-button">
                <Link to={`/Proyecto/${props.id} `}>
                    <h1 className="name">{props.name}</h1>
                </Link>
                <h1
                    onClick={() => dispatch(deleteProject(props.id))}
                    className="button-delete"
                >
                    x
                </h1>
            </div>

            <h6 className="description">{props.description}</h6>
        </div>
    );
}
