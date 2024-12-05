import { Sequelize } from "sequelize";
import ENV from "./env";

const uri = ENV.PSQL_URI;

async function connectToPostgreSQL(): Promise<void> {
    try {
        const sequelize = new Sequelize(uri);
        await sequelize.authenticate();
        console.log("Connected to PostgreSQL!");
    } catch (error) {
        console.error("Failed to connect to PostgreSQL!", error);
    }
}

export default connectToPostgreSQL;
