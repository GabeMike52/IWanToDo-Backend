import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Event = sequelize.define("Events", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export { Event };
