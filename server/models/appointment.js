console.log("appointment model loaded...")

var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
    date: Date,
    symptom: String,
    time: String,
    name: String,
    // _user: {type: mongoose.Schema.ObjectId, ref: "User"}
}, {timestamps: true})

mongoose.model("Appointment", AppointmentSchema);