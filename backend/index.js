const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hijas9089k:elKrYn0MFGOkG8Ut@cluster0.vm11zqd.mongodb.net/tinkerbackend")
.then(console.log("mongoose conected"))
.catch(err=>console.log(err))

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json())

// mongose conection
// const Users = mongoose.model('Users', {
//     name: {
//         type: String
//     },
//     email: {
//         type: String,
//         unique: true
//     },
//     password: {
//         type: String
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

//creating endpoint for registoring the user 
app.post('/signup',  (req,res) => {
console.log(req.body);
    // let check = await Users.findOne({ email: req.body.email })

    // if (check) {
    //     return res.status(400).json({ success: false, error: "existing user found with same email address" });
    // }


    // const user = new Users({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password,
    // });
 
    // await user.save();

    // const data = {
    //     user: {
    //         id: user.id
    //     }
    // };
    // const token = jwt.sign(data, 'secret_ecom');

    // res.json({ success: true, token });


})


// Define a simple GET route
app.get('/', (req, res) => {
    res.send('Hello World! This is a GET request.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
