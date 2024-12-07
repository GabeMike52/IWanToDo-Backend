import { User } from "../models/User";

export async function login(name: string, password: string) {
    const user = await User.findOne({ where: { name, password } });
    if (!user) {
        throw new Error("User not found!");
    }
    const userNoPassword = user.toJSON();
    delete userNoPassword.password;
    return user;
}
