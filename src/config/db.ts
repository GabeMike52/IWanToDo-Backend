import { Sequelize } from "sequelize";
import ENV from "./env";

const uri = ENV.PSQL_URI;
const sequelize = new Sequelize(uri);

async function connectToPostgreSQL(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log("Connected to PostgreSQL!");
    } catch (error) {
        console.error("Failed to connect to PostgreSQL!", error);
    }
}

export { connectToPostgreSQL, sequelize };
