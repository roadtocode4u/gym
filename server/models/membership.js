import mongoose from "mongoose";

const membershipSchema = mongoose.Schema({
    membershipName: {
        type: String,
        required: [true, "Name cannot be empty"],
        index: true,
    },
    membershipEmail: {
        type: String,
        required: [true, "Email cannot be empty"],
        index: true,
        unique: true,
    },
    membershipPhone: {
        type: String,
        required: [true, "Phone number cannot be empty"],
        index: true,
        unique: true,
    },
    membershipAge: {
        type: Number,
        required: [true, "Age cannot be empty"],
        index: true,
    },
    membershipGender: {
        type: String,
        required: [true, "Gender cannot be empty"],
        index: true,
    },
    membershipHeight: {
        type: Number,
        required: [true, "Height cannot be empty"],
        index: true,
    },
    membershipWeight: {
        type: Number,
        required: [true, "Weight cannot be empty"],
        index: true,
    },
    membershipBMI: {
        type: Number,
        required: [true, "BMI cannot be empty"],
        index: true,
    },
    membershipPlan: {
        type: String,
        required: [true, "Plan cannot be empty"],
        index: true,
    },
    membershipDescription: {
        type: String,
        required: [true, "Description cannot be empty"],
        index: true,
    },
    membershipDuration: {
        type: Number,
        required: [true, "Membership Duration cannot be empty"],
        index: true,
    },
    membershipAmount: {
        type: String,
        required: [true, "Amount cannot be empty"],
        index: true,
    },
    membershipPaymentMethod: {
        type: String,
        required: [true, "Membership Payment Method cannot be empty"],
        index: true,
    },
    membershipPaymentDate: {
        type: String,
        required: [true, "Membership Payment Date cannot be empty"],
        index: true,
    },
    membershipActive: {
        type: Boolean,
        required: [true, "Membership Active cannot be empty"],
        index: true,
    },
});

const Membership = mongoose.model("Membership", membershipSchema);
Membership.createIndexes();
export default Membership;
