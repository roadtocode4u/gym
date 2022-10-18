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
    },
    gender: {
        type: String,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    BMI: {
        type: Number,
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
    }

});

const Membership = mongoose.model("Membership", membershipSchema);
Membership.createIndexes();
export default Membership;


