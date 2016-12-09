(function() {
  angular.module('two-cents')
    .run(AuthConfig);

  AuthConfig.$inject = ['$rootScope', '$location', 'AuthService'];

  function AuthConfig($rootScope, $location, AuthService){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
      if(nextRoute.access.restricted && !AuthService.isLoggedIn()){
<<<<<<< HEAD
        $location.path('/'); // go home if you aren't logged in and try to go to a protected route
=======
        $location.path('/'); //go home if you aren't logged and try to go to a protected route
>>>>>>> 2926bb8c747c625e48e31cb02a124ce8c358907f
      }
    });
  }
}());
