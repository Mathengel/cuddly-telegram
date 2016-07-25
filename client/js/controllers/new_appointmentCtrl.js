app.controller('new_appointmentCtrl', ['$scope', 'appointmentsFctry', 'userFctry', '$routeParams', new_appointmentCtrl])

function new_appointmentCtrl($scope, appointmentsFctry, userFctry, $routeParams){
 
    console.log('new_appointmentCtrl controller loaded!!!!!!!! serving appointments for user #')

    function getUser(){ 
        userFctry.getCurrentUser(function(data){
        $scope.currentUser = data;
        })
    }

    getUser();
    

    $scope.create = function(newAppointment, currentUser){
           $scope.newAppointment = {};
            // newAppointment._user = currentUser
            newAppointment.name = currentUser.name
            console.log('scope.create method fires!!!', newAppointment)
            appointmentsFctry.create(newAppointment, function (response){
                console.log("response from apppointmentsFctrt.create, but from controller call", response)
            })
            $scope.newAppointment = {}; 
        
    }
}
