import app from "./app.js";
import { sequelize } from "./database/database.js";

const port = process.env.PORT || 3001;
async function main() {
    try {
        await sequelize.sync({ force: false });

        app.listen(port);
        console.log("server in listening on port 💡", port);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
main();
