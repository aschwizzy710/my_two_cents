(function() {
  angular.module('two-cents')
        .controller('MainController', MainController);

MainController.$inject = ['$scope', 'PostService'];

function MainController($scope, PostService){
  $scope.posts = PostService.getAll();
  $scope.create = create;
  $scope.delete = deleteOne;
  $scope.updatePost = updatePost;

  $scope.$watch(function(){
    return PostService.getAll();
  }, function(){
    $scope.posts = PostService.getAll();
  });
  function create(newPost){
    PostService.create(newPost);
    $scope.newPost = {};
  }
  function deleteOne(id){
    PostService.delete(id);
    $scope.deleteID = '';
  }
  function updatePost(id, newPostData){
    PostService.update(id, newPostData);
    $scope.updateID = '';
    $scope.updatedPost = {};
  }
}

}());
