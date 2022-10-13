import Membership from "../models/membership.js";

export const membershipPost = async (req, res) => {
    const { user, age, gender, height, weight, BMI, timeSlot, plan, description, isActive, subscription } = req.body;
    const membership = await Membership.create({
        user,
        age,
        gender,
        height,
        weight,
        BMI,
        timeSlot,
        plan,
        description,
        isActive,
        subscription
    })
    if (membership) {
        return res.send({
            status: true,
            message: "Membership created successfully",
            data: membership
        })
    }
    else {
        return res.send({
            status: false,
            message: "Membership not created",
        })
    }
}

