const express = require("express")
const routes = express.Router()
const upload = require("../databaseconnection/multerstorage")
const { Users, Attendance } = require("../databaseconnection/schema")
const jwt = require('jsonwebtoken');
const { appBarClasses } = require("@mui/material");
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


routes.post("/login", async (req, res) => {
    console.log(req.body);

    const attendances = new Attendance({
        attendance: req.body.attendance,
        image:image,
        framework: req.body.framework,
        domain: req.body.domain,
        project: req.body.project,
        doinghere: req.body.doinghere,
        duration: req.body.duration,
        tinkerSpaceAssist: req.body.tinkerSpaceAssist,
    });
    //  console.log(expireAt);
    await attendances.save();

    const data = {
        attend: {
            id: attendances.id
        }
    };
    const token = jwt.sign(data, 'secret_ecom');

    res.json({ success: true, token });


})

routes.get("/getalldata", async (req, res) => {
    try {
        const getalldatas = await Users.find({});
        console.log(getalldatas);
        res.json(getalldatas); // Return the array directly
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Define a simple GET route
routes.get('/', (req, res) => {
    res.send('Hello World! This is a GET request.');
});

module.exports = routes;
