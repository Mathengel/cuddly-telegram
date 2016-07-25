app.controller('appointmentsCtrl', ['$scope', 'appointmentsFctry', 'userFctry', '$routeParams', appointmentsCtrl])

function appointmentsCtrl($scope, appointmentsFctry, userFctry, $routeParams){
 

    function getAppointments(){
        console.log("getting appointments...")
        appointmentsFctry.index(function(response){
            console.log("response from appointmentsFctry.index", response)
            $scope.appointments = response.data;
        })
    }
    getAppointments();

    function getUser(){ 
        userFctry.getCurrentUser(function(data){
        $scope.currentUser = data;
        })
    }

    getUser();

    $scope.isPatient = function(appointment, currentUser){
        if(appointment.name == currentUser.name){
            return true;
        }
        return false;
    }

    $scope.delete = function(appointment){
        console.log('scope.delete method fires for appointment:', appointment, "id:", appointment._id)
        appointmentsFctry.delete(appointment, function(response){
            console.log("success callback from appointmentsFctry.delete:", response)
            getAppointments();
        })
    }
    
    console.log('appointment controller loaded!!!!!!!! serving appointments for user #')

}
