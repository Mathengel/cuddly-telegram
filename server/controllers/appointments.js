console.log("appointments controller loaded...")
var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');


module.exports = {

    index: function(req, res){
        console.log('getting from /appointments')
        Appointment.find({}, function(err, appointments){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(appointments);            
        })
    },

    create: function(req, res){
        var newAppointment = new Appointment(req.body)
        console.log('posting to /appointments', req.body)
        Appointment.create(req.body, function(err, appointment){
            if(err){
                console.log(err)
                res.status(400).json(err);
            }
            res.json(appointment);
        })
    }, 

    delete: function(req, res){
        console.log('deleting from /appointments/'+ req.params.id)
        Appointment.remove({_id: req.params.id}, function(err, appointment){
            if(err){
                res.status(400).json(err);
            }
            res.json(appointment);            
        })
    }

}
