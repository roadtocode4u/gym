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

//Sign-up
app.post('/signup' ,async (req,res)=>{
  const user = new User({
    fullName: req.body.fullName ,
    email: req.body.email ,
    password: req.body.password,
    phone: req.body.phone
  });
  await user.save();
  res.send({
    message: "Sign-Up Succesfully..."
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
