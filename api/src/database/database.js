import Sequelize from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const { DB_PASSWORD, DB_USER, DB_HOST, DB_NAME, DB_PORT } = process.env;

// export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//     host: DB_HOST,
//     dialect: DB_USER,
//     //-----> Aca deshabilito los mensajes por consola !
//     logging: false,
// });
export const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);
