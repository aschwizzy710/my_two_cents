(function() {
  angular.module('two-cents')
        .factory('PostService', PostService);

PostService.$inject = ['$http'];

function PostService($http){
  var posts = [];
  init();
  return {
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update,
    delete: deleteOne
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
  function getOne(id){}
  function createOnePost(newPost){
    $http.post('/posts', post)
        .then(function(response){

        });
  }
  function update(id, newPostData){}
  function deleteOne(id){}
}
}());
