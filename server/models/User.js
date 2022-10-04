import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {type: String, required: [true,  'Full Name cannot be empty']},
    email: {type: String, required: [true, 'Email cannot be empty']},
    password: {type: String, required: [true, 'Password cannot be empty']},
    phone: {type: String, required: [true, 'Phone cannot be empty']}
},
{
    timestamps: true
}
)
const User = mongoose.model('User', userSchema);
export default User;

