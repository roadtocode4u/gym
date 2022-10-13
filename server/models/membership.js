import mongoose from "mongoose";

const membershipSchema = mongoose.Schema({
    userReference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User reference cannot be empty"],
        index: true,
    },
    age: {
        type: Number,
        required: [true, "Age cannot be empty"],
        index: true,
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
        required: [true, "Time slot cannot be empty"],
    },
    plan: {
        type: String,
        required: [true, "Plan cannot be empty"],
    },
    description: {
        type: String,
        required: [true, "Description cannot be empty"],
    },
    isActive: {
        type: Boolean,
        required: [true, "Membership Active cannot be empty"],
    },
    subscription: {
        type: String,
        required: [true, "Subscription cannot be empty"],
    },
});

const Membership = mongoose.model("Membership", membershipSchema);
Membership.createIndexes();
export default Membership;
