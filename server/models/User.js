import mongoose from 'mongoose';
const userSchema = mongoose.Schema({

    fullName: { type: String, required: [true, 'Full Name cannot be empty'], index: true},
    email: { type: String, required: [true, 'Email cannot be empty'], index: true, unique: true,
    validate: {
        validator: function(v) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v); 
        },
        message: props => `${props.value} is not a valid email address!`
    }},
    password: { type: String, required: [true, 'Password cannot be empty'] },
    phone: { type: String, required: [true, 'Phone number cannot be empty'], index: true, unique: true,
    validate: {
        validator: function(v) {
            return /^\d{10}$/.test(v); 
        },
        message: props => `${props.value} is not a valid phone number!`
    }},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

{
    timestamps: true
}

const User = mongoose.model('User', userSchema);
User.createIndexes();
export default User;