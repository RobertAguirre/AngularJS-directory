var myApp = angular.module('myApp', []);

myApp.controller("MyController", function MyController($scope) {
  $scope.author = {
    'name'      : 'Robert Aguirre',
    'title'     : 'Developer',
    'company'   : 'Student'
  }
});
