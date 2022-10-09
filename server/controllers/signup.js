import md5 from 'md5';

import User from './../models/User.js'

export const signupPost = async (req, res) => {
  const { fullName, email, password, phone } = req.body;

  const user = new User({
    fullName,
    email,
    password: md5(password),
    phone,
  });
  try {
    const savedUser = await user.save();
    return res.send({
      success: true,
      data: savedUser,
      message: "user created successfully"
    })
  }
  catch (err) {
    return res.send({
      success: false,
      data: null,
      message: err.message
    })
  }
}
