angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(link){
    //run addlinks
    //then() return response
    Links.addLink() //check if scope or Model name
    .then(function(){
     //no return required
    });
  }
});
