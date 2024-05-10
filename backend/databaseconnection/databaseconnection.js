
const mongoose = require('mongoose');

    const connectDB = async () => {
        try {
            await mongoose.connect("mongodb+srv://hijas9089k:elKrYn0MFGOkG8Ut@cluster0.vm11zqd.mongodb.net/tinkerbackend")
            console.log("MongoDB connected");
        } catch (err) {
            console.error(err.message);
            process.exit(1); // Exit process with failure
        }
    };
    
    module.exports = connectDB;
    