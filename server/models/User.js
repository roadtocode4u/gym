import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name cannot be empty"],
      index: true,
    },
    email: {
      type: String,
      required: [true, "Email cannot be empty"],
      index: true,
      unique: true,
    },
    password: { type: String, required: [true, "Password cannot be empty"] },
    phone: {
      type: String,
      required: [true, "Phone number cannot be empty"],
      index: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
User.createIndexes();
export default User;
