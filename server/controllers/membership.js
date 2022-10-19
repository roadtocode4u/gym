import Membership from "../models/Membership.js";
import User from "../models/User.js";

export const membershipPost = async (req, res) => {
    const { userId, age, gender, height, weight, BMI, timeSlot, plan, description, isActive, subscription} = req.body;
    const user = await User.findById(userId);
    if (!user) {
        return res.json({ status:false, message: "User not found" });
    }

    const membership = new Membership({
        userId,
        age,
        gender,
        height,
        weight,
        BMI,
        timeSlot,
        plan,
        description,
        isActive,
        subscription,
    });

    const savedMembership = await membership.save();
    res.json({ 
        status: true, 
        data: savedMembership,
        message: "Membership created successfully"
    });
};

export const membershipGet = async (req, res) => {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
        return res.json({ status:false, message: "User not found" });
    }

    const membership = await Membership.find({ userId: userId });
    res.json({
        status: true,
        data: membership,
        message: "Membership fetched successfully"
    });
}