(function() {
  angular.module('two-cents')
        .controller('MainController', MainController);

MainController.$inject = ['$scope', 'PostService'];

function MainController($scope, PostService){
  $scope.posts = PostService.getAll();
  $scope.createPost = createPost;
  $scope.deletePost = deletePost;
  $scope.editPost = editPost;
  $scope.savePost = savePost;

  $scope.$watch(function(){
    return PostService.getAll();
  }, function(){
    $scope.posts = PostService.getAll();
  });
  function createPost(newPost){
    PostService.create(newPost);
    $scope.newPost = '';
  }
  function deletePost(index, post){
    PostService.delete(index, post);
  }
  function editPost(post){
    post.isBeingEdited = true;
  }
  function savePost(index, post){
    AlbumService.update(index, post);
    album.isBeingEdited = false;
  }
}

}());
