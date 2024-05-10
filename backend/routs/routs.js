const express = require("express")
const routes = express.Router()
const upload= require("../databaseconnection/multerstorage")
const Users = require("../databaseconnection/schema")
const jwt = require('jsonwebtoken');
// Upload endpoint
routes.post("/upload", upload.single('formimage'), (req, res) => {
    const port = 4000; // Assuming your server runs on port 4000
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

//creating endpoint for registoring the user 
routes.post('/adduser', async (req, res) => {
    console.log(req.body);
    let check = await Users.findOne({ email: req.body.email })

    if (check) {
        return res.status(400).json({ success: false, error: "existing user found with same email address" });
    }


    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        image: req.body.image,
        number: req.body.number,
        person: req.body.person,
        github: req.body.github,
        assist: req.body.assist,
        domain: req.body.domain,
        educational: req.body.educational,
    });

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    };
    const token = jwt.sign(data, 'secret_ecom');

    res.json({ success: true, token });


})


// Define a simple GET route
routes.get('/', (req, res) => {
    res.send('Hello World! This is a GET request.');
});

module.exports=routes;
