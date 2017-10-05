var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
    when('/', {
      templateUrl: 'partials/list.html',
      controller: 'ListController'
    }).
    when('/details/:itemId', {
      templateUrl: 'partials/details.html',
      controller: 'DetailsController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
