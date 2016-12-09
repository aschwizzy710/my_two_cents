(function() {
  angular.module('two-cents')
    .controller("NavigationController", NavigationController);

  NavigationController.$inject = ['$scope', 'AuthService'];

  function NavigationController($scope, AuthService){
<<<<<<< HEAD
    $scope.isLoggedIn = AuthService.isLoggedIn;
=======
      $scope.isLoggedIn = AuthService.isLoggedIn;
>>>>>>> 2926bb8c747c625e48e31cb02a124ce8c358907f
  }
}());
