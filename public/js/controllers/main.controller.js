(function() {
  angular.module('two-cents')
        .controller('MainController', MainController);

MainController.$inject = ['$scope', 'PostService'];

function MainController($scope, PostService){
  $scope.posts = PostService.getAll();
  $scope.create = create;
  $scope.delete = deleteOne;
  $scope.edit = edit;
  $scope.save = save;

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
  function edit(post){
    post.isBeingEdited = true;
  }
  function save(index, post){
    PostService.update(index, post);
    post.isBeingEdited = false;
  }
}

}());
