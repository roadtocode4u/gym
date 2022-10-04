import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullName: {type: String, required: [true,  'Full Name cannot be empty']},
    email: {type: String, required: [true, 'Email cannot be empty']},
    password: {type: String, required: [true, 'Password cannot be empty']},
    phone: {type: String, required: [true, 'Phone cannot be empty']}
},
{
    timestamps: true
}
)
const model = mongoose.model('User', UserSchema);
export default model.schema;

