import mongoose from "mongoose";
import User from "../models/User.js";

const subscriptionSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    plan: { type: String, required: [true, "Plan cannot be empty"] },
    duration: { type: String, required: [true, "Duration cannot be empty"] },
    amount: { type: String, required: [true, "Amount cannot be empty"] },
    paymentMethod: {
      type: String,
      required: [true, "Payment method cannot be empty"],
    },
  },
  {
    timestamps: true,
  }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);
Subscription.createIndexes();
export default Subscription;

