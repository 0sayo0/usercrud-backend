import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    age: { type: Number, required: true },
    role: { type: String, default: "user" },
  },
  { timestamps: true, versionKey: false },
);

export const UserModel = model<IUser>("User", userSchema);
