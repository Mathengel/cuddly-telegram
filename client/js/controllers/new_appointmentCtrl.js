app.controller('new_appointmentCtrl', ['$scope', 'appointmentsFctry', 'userFctry', '$routeParams', new_appointmentCtrl])

function new_appointmentCtrl($scope, appointmentsFctry, userFctry, $routeParams){
 
    console.log('new_appointmentCtrl controller loaded!!!!!!!! serving appointments for user #')

    var msg = false;
    var moreThanThree = false;

    function getUser(){ 
        userFctry.getCurrentUser(function(data){
        $scope.currentUser = data;
        })
    }

    getUser();

    function getAppointments(){
        console.log("getting appointments...")
        appointmentsFctry.index(function(response){
            console.log("response from appointmentsFctry.index", response)
            $scope.appointments = response.data;
        })
    }
    getAppointments();
    
    // function noMoreThanThree(appointment, appointments){
        
    //     angular.forEach(appointments, function(oldAppointment){
    //         if(appointment.date == oldAppointment.date){
    //             console.log(appointment.date, "matches", oldAppointment.date)
    //             moreThanThree = true;
    //         }
    //         else{
    //             moreThanThree = false;
    //         }    
    //     })     
    //     return(moreThanThree)
    // }  

    //  $scope.tooMany = function(){
    //     if(msg == true){
    //         msg = false;
    //         return true;
    //     }
    //     else{
    //        return false; 
    //     }
        
    // }

    $scope.create = function(newAppointment, currentUser, appointments){
           $scope.newAppointment = {};
            // newAppointment._user = currentUser
            // noMoreThanThree(newAppointment, appointments);
            
            // if(!noMoreThanThree){
                newAppointment.name = currentUser.name
                console.log('scope.create method fires!!!', newAppointment)
                appointmentsFctry.create(newAppointment, function (response){
                    console.log("response from apppointmentsFctrt.create, but from controller call", response)
                })
                $scope.newAppointment = {}; 
            // }
            // else{
                // msg = true;
                // moreThanThree = false;

            // }
    }
}
