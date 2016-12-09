(function() {
  angular.module('two-cents')
    .controller("LoginController", LoginController);

  LoginController.$inject = ['$scope', 'AuthService', '$location'];

  function LoginController($scope, AuthService, $location){
    $scope.login = login;
    $scope.required = true;

    function login(user){
      AuthService.login(user)
<<<<<<< HEAD
              .then(function(){
                $location.path('/');
              })
              .catch(function(){
                // at this point you should communicate with
                
                $scope.user = {};
                $location.path('/login');
              });
=======
        .then(function(){
          $location.path('/');
        })
        .catch(function(){
          //at this point you should communicate with the user about the error
          // we are not going to in the sake of time
          $scope.user = {};
          $location.path('/login');
        });
>>>>>>> 2926bb8c747c625e48e31cb02a124ce8c358907f
    }
  }
}());
