import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Task = sequelize.define(
    "task",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        //--->De forma predeterminada, Sequelize agrega automáticamente los campos createdAty updatedAta cada modelo, utilizando el tipo de datos DataTypes.DATE
        timestamps: true,
        //---> Sin la underscoredopción, Sequelize definiría automáticamente:
        //--->Un createdAtatributo para cada modelo, apuntando a una columna nombrada createdAten cada tabla
        //---> Un updatedAtatributo para cada modelo, apuntando a una columna nombrada updatedAten cada tabla
        //---> Un userIdatributo en el Taskmodelo, apuntando a una columna nombrada userIden la tabla de tareas
        underscored: true,
        //--->Puede detener la pluralización automática realizada por Sequelize usando la freezeTableName: trueopción. De esta forma, Sequelize inferirá que el nombre de la tabla es igual al nombre del modelo, sin ninguna modificación

        //--->De esta forma, todas las tablas usarán el mismo nombre que el nombre del modelo.
        freezeTableName: true,
    }
);
