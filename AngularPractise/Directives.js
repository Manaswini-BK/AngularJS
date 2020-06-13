var app = angular.module("myAppDir",[]);
app.controller("myCtrlDir",function($scope){
$scope.emp1 ={};
$scope.emp1.name = "Manaswini";
$scope.emp1.id = "44131716";

$scope.emp2 ={};
$scope.emp2.name = "Gunjan";
$scope.emp2.id = "44131898";

$scope.emp3 ={};
$scope.emp3.name = "Rucha";
$scope.emp3.id = "44189016";
});
app.directive("employeeDetails",function(){
    return{
        restrict: "EA",
        template: "<p>Employee Name: {{modelData.name}}</p><p>Employee ID: {{modelData.id}}</p>",
        scope:{
            modelData: "="
        }
    }
});