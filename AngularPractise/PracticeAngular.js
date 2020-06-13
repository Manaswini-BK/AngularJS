var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.show = false;
    $scope.gender = ["Female","Male","Dont want to disclose"];
    $scope.city = ["Hyderabad","Pune","Bengaluru","Chennai","New Delhi","Mumbai"];
    $scope.cp = ["Software Engineer", "Senior Software Engineer","Consultant","Manager"];
    $scope.details= function(){
        $scope.displayGender = $scope.selectedGender;
        $scope.displayCity =  $scope.selectedCity;
        $scope.displayCP =  $scope.selectedCP;
        $scope.show = true;
    }
});