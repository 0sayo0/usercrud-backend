import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  static async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getAll();
      res.status(200).json({ success: true, data: users });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserService.getById(req.params.id as string);
      if (!user) {
        res
          .status(404)
          .json({ success: false, message: "Usuario no encontrado" });
        return;
      }
      res.status(200).json({ success: true, data: user });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser = await UserService.create(req.body);
      res.status(201).json({ success: true, data: newUser });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const updatedUser = await UserService.update(
        req.params.id as string,
        req.body,
      );
      if (!updatedUser) {
        res
          .status(404)
          .json({ success: false, message: "Usuario no encontrado" });
        return;
      }
      res.status(200).json({ success: true, data: updatedUser });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const deletedUser = await UserService.delete(req.params.id as string);
      if (!deletedUser) {
        res
          .status(404)
          .json({ success: false, message: "Usuario no encontrado" });
        return;
      }
      res
        .status(200)
        .json({ success: true, message: "Usuario eliminado correctamente" });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}
