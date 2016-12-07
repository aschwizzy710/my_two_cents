(function() {
  angular.module('two-cents')
    .controller("LoginController", LoginController);

  LoginController.$inject = ['$scope', 'AuthService', '$location'];

  function LoginController($scope, AuthService, $location){
    $scope.login = login;
    $scope.required = true;

    function login(user){
      AuthService.login(user)
              .then(function(){
                $location.path('/');
              })
              .catch(function(){
                // at this point you should communicate with
                
                $scope.user = {};
                $location.path('/login');
              });
    }
  }
}());
