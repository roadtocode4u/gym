import mongoose from "mongoose";

const membershipSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User reference cannot be empty"],
        index: true,
    },
    age: {
        type: Number,
        required: [true, "Age cannot be empty"],
    },
    gender: {
        type: String,
        required: [true, "Gender cannot be empty"],
    },
    height: {
        type: Number,
        required: [true, "Height cannot be empty"],
    },
    weight: {
        type: Number,
        required: [true, "Weight cannot be empty"],
    },
    BMI: {
        type: Number,
        required: [true, "BMI cannot be empty"],
    },
    timeSlot: {
        type: String,
    },
    plan: {
        type: String,
    },
    description: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    subscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subscription",
        required: [true, "Subscription reference cannot be empty"],
        index: true,
    },
});

const Membership = mongoose.model("Membership", membershipSchema);
Membership.createIndexes();
export default Membership;
