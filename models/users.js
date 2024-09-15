import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    full_name: String,
    email: String,
    job_title: String,
    country: String,
    is_online: Boolean,
    rating: Number,
    target: Number,
    budget: Number,
    phone: String,
    address: {
        buildingNumber: String,
        city: String,
        country: String,
        state: String,
        countryCode: String,
        street: String,
        zipCode: String,
        street_address: String,
        secondaryAddress: String
    },
    img_id: Number,
    gender: String,
    vehicle: {
        no: String,
        registaration_number: String,
        fule: String,
        finance_amount: String,
        manufacturer: String
    }
});

// Creating a model
const User = model('User', UserSchema, 'Users');

export default User;
