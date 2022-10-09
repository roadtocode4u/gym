import md5 from 'md5';

import User from './../models/User.js'

export const loginPost = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password: md5(password),
  })
  if (user) {
    return res.send({
      status: true,
      message: "User logged in successfully",
      data: user
    })
  }
  else {
    return res.send({
      status: false,
      message: "email or password is incorrect",
    })
  }
}
