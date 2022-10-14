import express from 'express';
import dotennv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';

import {health} from "./controllers/health.js";
import {signupPost} from "./controllers/signup.js";
import {loginPost} from "./controllers/login.js";
import {createSubscription} from "./controllers/subscription.js"; 
import {getSubscription} from "./controllers/subscription.js";
import {updateSubscription} from "./controllers/subscription.js";
import {subscriptionDelete} from "./controllers/subscription.js";



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

app.get('/health', health)
app.post('/signup', signupPost)
app.post('/login', loginPost)
app.post('/subscription', createSubscription)
app.get('/subscription', getSubscription)
app.put('/subscription/:id', updateSubscription)
app.delete('/subscription/:id', subscriptionDelete)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
