import app from "./app.js";
import { sequelize } from "./database/database.js";
import * as dotenv from "dotenv";

const { DB_PORT } = process.env;

async function main() {
    try {
        await sequelize.sync({ force: false });

        app.listen(DB_PORT);
        console.log("server in listening on port 💡", DB_PORT);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
main();
