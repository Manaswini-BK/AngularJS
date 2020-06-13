var app = angular.module("myAppCtrl",[]);
app.controller("myAngCtrl", function($scope,$route){
    $scope.details=function(){
        $scope.fn = $scope.firstName;
        $scope.ln = angular.copy($scope.lastName);
    };
    $scope.reset = function(){
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.fn = "";
        $scope.ln = "";
    };
    $scope.textFromRoute = $route.current.textFromRoute;
});