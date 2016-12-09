(function() {
  angular.module('two-cents')
    .directive('logoutButton', LogoutButtonDirective);

  LogoutButtonDirective.$inject = [];

  function LogoutButtonDirective(){
    return {
<<<<<<< HEAD
      restrict: 'EA', // this makes it available as a tag or attribute
      scope: {}, // isolate scope -- keeps parent scope from contaminating
=======
      restrict: 'EA', //this makes available as a tag or attribute,
      scope: {}, //isolate scope -- keeps parent scope from contaminating the directive
>>>>>>> 2926bb8c747c625e48e31cb02a124ce8c358907f
      templateUrl: 'js/directives/logoutButton/logout.view.html',
      controller: 'LogoutController'
    };
  }
}());
