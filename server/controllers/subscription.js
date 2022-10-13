import Subscription from "../models/Subscription";

const createSubscription = async (req, res) => {
  const { name, email, phone, plan, duration, amount, paymentMethod } =
    req.body;
  const subscription = await Subscription.create({
    name,
    email,
    phone,
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

const updateSubscription = async (req, res) => {
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
  } else {
    return res.send({
      success: false,
      message: "Subscription not updated",
      data: subscription,
    });
  }
};

const deleteSubscription = async (req, res) => {
  const subscription = await Subscription.findByIdAndDelete(req.params.id);
  if (subscription) {
    return res.send({
      success: true,
      message: "Subscription deleted successfully",
      data: subscription,
    });
  } else {
    return res.send({
      success: false,
      message: "Subscription not deleted",
      data: subscription,
    });
  }
};




export default {
  createSubscription,
  updateSubscription,
  deleteSubscription,
};


