const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rePassword: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    address: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;