import Subscription from "../models/Subscription.js";
import User from "../models/User.js";

export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    return res.send({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  }
  return res.send({
    success: false,
    message: "User not fetched",
    data: user,
  });
};

export const createSubscription = async (req, res) => {
  const { user, plan, duration, amount, paymentMethod } =
    req.body;
  const subscription = await Subscription.create({
    user,
    plan,
    duration,
    amount,
    paymentMethod,
  });
  if (subscription) {
    return res.send({
      success: true,
      message: "Subscription created successfully",
      data: subscription,
    });
  }
  return res.send({
    success: false,
    message: "Subscription not created",
    data: subscription,
  });
};

export const getSubscription = async (req, res) => {
  const subscription = await Subscription.find({});
  if (subscription) {
    return res.send({
      success: true,
      message: "Subscription fetched successfully",
      data: subscription,
    });
  }
  return res.send({
    success: false,
    message: "Subscription not fetched",
    data: subscription,
  });
};

export const updateSubscription = async (req, res) => {
  const subscription = await Subscription.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (subscription) {
    return res.send({
      success: true,
      message: "Subscription updated successfully",
      data: subscription,
    });
  }
  return res.send({
    success: false,
    message: "Subscription not updated",
    data: subscription,
  });
};

export const subscriptionDelete = async (req, res) => {
  const subscription = await Subscription.findByIdAndDelete(req.params.id);
  if (subscription) {
    return res.send({
      success: true,
      message: "Subscription deleted successfully",
      data: subscription,
    });
  }
  return res.send({
    success: false,
    message: "Subscription not deleted",
    data: subscription,
  });
}
