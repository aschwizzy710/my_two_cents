(function() {
  angular.module('two-cents')
        .factory('PostService', PostService);

PostService.$inject = ['$http'];

function PostService($http){
  init();
  var posts = [];
  return {
    get: getAllPosts,
    create: createOnePost,
    update: updateOnePost,
    delete: deleteOnePost
  };

  function init(){
    $http.get('/posts')
          .then(function(response){
            posts = response.data.posts;
          })
          .catch(function(response){
            console.log(err);
          });
  }
  function getAllPosts(){
    return posts;
  }
  function createOnePost(post){
    $http.post('/posts', post)
        .then(function(response){

        })
  }

}
}());
