import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../redux/action";
import "../Task/Task.css";

export default function Task(props) {
    //--------------Constantes-------------------->
    const dispatch = useDispatch();
    const id = props.id;
    const input = {
        done: props.done,
    };
    const done = props.done;

    //--------------Funciones----------------->
    const changeDone = () => {
        input.done === false ? (input.done = true) : (input.done = false);
        console.log(input.done);
        dispatch(updateTask(id, input));
    };

    //--------------Return-------------------->
    return (
        <div className="container-name">
            <div className="name-button">
                {done ? (
                    <h2 className="name-task-DONE">{props.name}</h2>
                ) : (
                    <h2 className="name-task">{props.name}</h2>
                )}
                <h1
                    className="button-delete"
                    onClick={() => {
                        dispatch(deleteTask(props.id));
                    }}
                >
                    x
                </h1>
            </div>
            <div className="container-button">
                {done ? (
                    <h6 className="uncheck-button" onClick={() => changeDone()}>
                        uncheck ✏︎
                    </h6>
                ) : (
                    <h6 className="Check-button" onClick={() => changeDone()}>
                        Check ✓
                    </h6>
                )}
            </div>
        </div>
    );
}
