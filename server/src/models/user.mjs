import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: ['admin', 'doctor', 'user'],
        required: true
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema);
export default User;