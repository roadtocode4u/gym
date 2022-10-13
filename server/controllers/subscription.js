import Subscription from "../models/Subscription.js";

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
