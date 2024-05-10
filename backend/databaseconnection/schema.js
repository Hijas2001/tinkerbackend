const mongoose  = require("mongoose");

// mongose conection
const Users = mongoose.model('Users', {

    name: {
        type: String
    },
    email: {
        type: String,
        uniqe: true
    },
    gender: {
        type: String
    },
    image: {
        type: String
    },
    number: {
        type: Number
    },
    person: {
        type: String
    },
    github: {
        type: String
    },
    assist: {
        type: String
    },
    domain: {
        type: String
    },
    educational: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports=Users;