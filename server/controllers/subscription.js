import Subscription from "../models/Subscription.js";
import User from "../models/User.js";





export const createSubscription = async (req, res) => {


  const {userId, plan, duration, amount, paymentMethod } =
    req.body;
  const subscription = await Subscription.create({
    userId,
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

  const user = await User.findById(req.params.id);
  
  const {userId, fullName, email, phone} = req.body;
  const subscription = await Subscription.findById(req.params.id || userId);
  if (subscription) {
    return res.send({
      success: true,
      message: "Subscription fetched successfully",
      data: fullName, email, phone, subscription,
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

// export const subscriptionDelete = async (req, res) => {
//   const subscription = await Subscription.findByIdAndDelete(req.params.id);
//   if (subscription) {
//     return res.send({
//       success: true,
//       message: "Subscription deleted successfully",
//       data: subscription,
//     });
//   }
//   return res.send({
//     success: false,
//     message: "Subscription not deleted",
//     data: subscription,
//   });
// }
