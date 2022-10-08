import express from 'express';
import dotennv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import User from './models/User.js'


dotennv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
try{
  mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB 📦');
  });
}catch(err){
  console.log(`❌ Error:  ${err?.message}`);
}

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running'
  })
})

app.post('/signup' ,async (req,res)=>{
  const { fullName, email, password , phone}= req.body;

  const user = new User({
    fullName,
    email,
    password,
    phone,
  });
  try{
    const savedUser = await user.save();
   return res.send({
      success: true,
      data: savedUser,
      message: "user created successfully"
    })
  }
  catch(err){
    return res.send({
      success: false,
      data: null,
      message: err.message
    })
  }
})


app.post('/login', async(req, res)=>{
  const { email, password} = req.body;
  const user = await User.findOne({
    email,
    password,
  })
  if(user) {
    return res.send({
      status: "success",
      message: "User logged in successfullty",
      data: user
    })
  }
  else{
   return  res.send({
      status: "failure",
      message: "User name or password is incorrect",
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
