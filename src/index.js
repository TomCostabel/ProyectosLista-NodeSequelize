import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
    try {
        await sequelize.sync({ force: true });

        app.listen(3001);
        console.log("server in listening on port 💡", 3001);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
main();
