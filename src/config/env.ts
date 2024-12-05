import dotenv from "dotenv";

dotenv.config();

const ENV = {
    PORT: process.env.PORT || 3000,
    PSQL_URI: process.env.PSQL_URI || "",
};

if (!ENV.PSQL_URI) {
    throw new Error("Missing required environment variables.");
}

export default ENV;
