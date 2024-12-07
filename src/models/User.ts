import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Event } from "./Event";

class User extends Model {
    declare user_id: number;
    declare name: string;
    declare email: string;
    declare password: string;
}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
        underscored: true,
    }
);

User.hasMany(Event, {
    foreignKey: "user_id",
    sourceKey: "user_id",
});

export { User };
