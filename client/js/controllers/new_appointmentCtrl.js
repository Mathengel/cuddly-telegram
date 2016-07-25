app.controller('new_appointmentCtrl', ['$scope', 'appointmentsFctry', 'userFctry', '$routeParams', new_appointmentCtrl])

function new_appointmentCtrl($scope, appointmentsFctry, userFctry, $routeParams){
 
    console.log('new_appointmentCtrl controller loaded!!!!!!!! serving appointments for user #')

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
    
    function noMoreThanThree(appointment, appointments){
        var moreThanThree = false;
        angular.forEach(appointments, function(oldAppointment){
            if(appointment.date == oldAppointment.date){
                console.log(appointment.date, "matches", oldAppointment.date)
                moreThanThree = true;
            }
            else{
                moreThanThree = false;
            }    
        })     
        return(moreThanThree)
    }  

     $scope.tooMany = function(){
        if($scope.msg){
            return true;
        }
        return false;
    }

    $scope.create = function(newAppointment, currentUser, appointments){
           $scope.newAppointment = {};
            // newAppointment._user = currentUser
            noMoreThanThree(newAppointment, appointments)
            if(!noMoreThanThree){
                $scope.msg = null;
                newAppointment.name = currentUser.name
                console.log('scope.create method fires!!!', newAppointment)
                appointmentsFctry.create(newAppointment, function (response){
                    console.log("response from apppointmentsFctrt.create, but from controller call", response)
                })
                $scope.newAppointment = {}; 
            }
            else{
                $scope.msg = {msg: "there are already to many appointments on that date"}
            }
    }
}
