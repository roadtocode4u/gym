
import mongoose from 'mongoose';

const subscriptionSchema = mongoose.Schema({
    name: { type: String, required: [true, 'Name cannot be empty'], index: true},
    email: { type: String, required: [true, 'Email cannot be empty'], index: true, unique: true},
    phone: { type: String, required: [true, 'Phone number cannot be empty'], index: true, unique: true },
    plan: { type: String, required: [true, 'Plan cannot be empty'], index: true},
    duration: { type: String, required: [true, 'Duration cannot be empty'], index: true},
    amount: { type: String, required: [true, 'Amount cannot be empty'], index: true},
    paymentMethod: { type: String, required: [true, 'Payment method cannot be empty'], index: true}
},
{
    timestamps: true
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
Subscription.createIndexes();
export default Subscription;


