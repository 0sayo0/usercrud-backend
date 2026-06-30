import { UserModel } from "../models/user.model";
import { IUser } from "../interfaces/user.interface";

export class UserService {
  static async getAll() {
    return await UserModel.find();
  }

  static async getById(id: string) {
    return await UserModel.findById(id);
  }

  static async create(userData: IUser) {
    const userExists = await UserModel.findOne({ email: userData.email });
    if (userExists) throw new Error("El correo electrónico ya está registrado");

    const newUser = new UserModel(userData);
    return await newUser.save();
  }

  static async update(id: string, userData: Partial<IUser>) {
    return await UserModel.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
    });
  }

  static async delete(id: string) {
    return await UserModel.findByIdAndDelete(id);
  }
}
