import Sequelize from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();
// console.log(process.env);
const { DB_PASSWORD, DB_USER, DB_HOST } = process.env;

export const sequelize = new Sequelize("projectsdb", DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
    //-----> Aca deshabilito los mensajes por consola !
    logging: false,
});
