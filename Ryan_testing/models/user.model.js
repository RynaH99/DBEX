const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please enter Product name: ']
        },

        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


const UserInfo = mongoose.model('UserInfo',UserSchema, 'DBex_Users')

module.exports = UserInfo;