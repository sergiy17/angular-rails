angular.module("receta", ['ui.router', 'templates'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: "index.html"
    });
    $urlRouterProvider.otherwise('/');
}]);
