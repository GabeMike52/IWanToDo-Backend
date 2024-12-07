import { Response, Request } from "express";
import { User } from "../models/User";
import { login } from "../services/userService";

export async function userCreate(req: Request, res: Response) {
    try {
        const user = await User.create(req.body);
        res.status(201).send({ message: "User created!", user });
    } catch (error) {
        console.error("Error while creating user: ", error);
        res.status(500).send({ error: "Failed to create user with provided data!" });
    }
}

export async function userLogin(req: Request, res: Response) {
    try {
        const name = req.body.name;
        const password = req.body.password;
        const user = await login(name, password);
        res.status(200).send({ user });
    } catch (error) {
        console.error("Error in login: ", error);
        res.status(401).send("Invalid credentials!");
    }
}
