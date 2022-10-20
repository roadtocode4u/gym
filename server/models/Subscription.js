import mongoose from "mongoose";

const subscriptionSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User reference cannot be empty"],
      index: true,
    },
    // name: {
    //   type: mongoose.Schema.Types.String,
    //   ref: "User",
    //   required: [true, "Name cannot be empty"],
    //   index: true,
    // },
    // email: {
    //   type: mongoose.Schema.Types.String,
    //   ref: "User",
    //   required: [true, "Email cannot be empty"],
    //   index: true,
    // },
    // phone: {
    //   type: mongoose.Schema.Types.String,
    //   ref: "User",
    //   required: [true, "Phone number cannot be empty"],
    //   index: true,
    // },


    
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
