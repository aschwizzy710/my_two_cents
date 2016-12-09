(function() {
  angular.module('two-cents')
    .controller("LogoutController", LogoutController);

  LogoutController.$inject = ['$scope', 'AuthService', '$location'];

  function LogoutController($scope, AuthService, $location){
    $scope.logout = logout;

<<<<<<< HEAD



    function logout(){
      console.log('logging out!');
=======
    function logout(){
      console.log('Logging out!');
>>>>>>> 2926bb8c747c625e48e31cb02a124ce8c358907f
      AuthService.logout();
      $location.path('/login');
    }
  }
}());
