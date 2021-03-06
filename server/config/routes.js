console.log("module routes loaded...")
var users = require('../controllers/users.js')
var appointments = require('../controllers/appointments.js')


module.exports = function(app){

    app.get('/users', users.index)
    app.get('/users/:id', users.show)
    app.post('/users/', users.create)

    app.get('/appointments', appointments.index)
    app.post('/appointments', appointments.create)
    app.delete('/appointments/:id', appointments.delete)


}