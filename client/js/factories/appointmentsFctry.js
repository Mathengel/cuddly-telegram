app.factory('appointmentsFctry', ['$http', '$location', appointmentsFctry])

function appointmentsFctry($http, $location){
    console.log("appointmentsFctry factory loaded!!!.. ")

    return {

        index: function(success){
            console.log("appointmentsFctry.index fired!!!")
            $http.get('/appointments').then(success);
        },

        create: function(newAppointment, success){
            console.log("appointmentsFctry.create fired!!!!", newAppointment)
            $http.post('/appointments/', newAppointment).then(success);
            $location.path('/dashboard')
        },

        delete: function(appointment, success){
            console.log("appointmentsFctry.delete fired!!!", appointment)
            $http.delete('/appointments/'+appointment._id).then(success);
        }
    }
}