'use strict';

var eFarm = angular.module('eFarm', ['ngRoute']);

eFarm.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
  $routeProvider
      .when('/',{
        templateUrl:'choose-task.html',
        controller: 'taskListCtrl'
      })
      .when('/task/:taskId',{
        templateUrl:'task.html',
        controller:'taskCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


}]);


eFarm.controller('taskListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
    $scope.tasksTitle = 'Your tasks';
    $http.get('task-list/task.json').success(function(data, status, headers, config) {  
      $scope.tasks = data;
      
    });

    

}]);


eFarm.controller('taskCtrl',['$scope','$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    $scope.taskId = $routeParams.taskId;
    var url = 'task-list/' +$routeParams.taskId +'.json';

    $http.get(url).success(function(data) {
      $scope.task = data;
    });
}]);
