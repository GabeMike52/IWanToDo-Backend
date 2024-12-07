import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { User } from "./User";

class Event extends Model {
    declare event_id: number;
    declare title: string;
    declare done: boolean;
    declare user_id: number;
}

Event.init(
    {
        event_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
        },
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
    },
    {
        sequelize,
        modelName: "Event",
        tableName: "events",
        timestamps: false,
        underscored: true,
    }
);

Event.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: "user_id",
});

export { Event };
