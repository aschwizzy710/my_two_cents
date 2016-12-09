(function() {
  angular.module('two-cents')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$http', '$window'];

  function AuthService($http, $window){
    var localStorage = $window.localStorage;
    return {
      currentUser: currentUser,
      saveToken: saveToken,
      getToken: getToken,
      isLoggedIn: isLoggedIn,
      signup: signup,
      login: login,
      logout: logout
    };

    function currentUser(){
      // grabbing _id would be very similar to this
      if(isLoggedIn()){
        var token = getToken();
<<<<<<< HEAD
        var payload;
        if(token){
          payload = token.split('.'[1]);
          payload = $window.atob(payload);
          payload = JSON.parse(payload);
          return {
            email: payload.email
          };
        }
=======
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return {
          email: payload.email
        };
>>>>>>> 2926bb8c747c625e48e31cb02a124ce8c358907f
      } else {
        return null;
      }
    }
    function saveToken(token){
      localStorage['two-cents-token'] = token;
    }
    function getToken(){
      return localStorage['two-cents-token'];
    }
    function isLoggedIn(){
      var token = getToken();
      var payload;
      if(token){
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

<<<<<<< HEAD
        return payload.exp > Date.now() / 1000; // comparing the expiration date of our token to right now
=======
        return payload.exp > Date.now() / 1000; //comparing the expiration date of our token to right now
>>>>>>> 2926bb8c747c625e48e31cb02a124ce8c358907f
      } else {
        return false;
      }
    }
    function signup(user){
      return $http.post('/users/signup', user);
    }
    function login(user){
      return $http.post('/users/login', user)
                  .then(function(response){
                    var token = response.data.token;
                    saveToken(token);
                  });
    }
    function logout(){
      localStorage.removeItem('two-cents-token');
    }
  }
}());
