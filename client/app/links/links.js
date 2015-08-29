angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
    //run getLinks
    //then(pass in the data)
    //add it to object (as link)
    //return response (object.data)

    Links.getLinks()
    .then(function(data){
      return $scope.data.links = data;
    });
  };

  $scope.getLinks();
});
