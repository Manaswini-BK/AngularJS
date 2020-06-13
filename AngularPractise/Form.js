var app = angular.module('myForm',[]);
app.controller('formCtrl',function($scope){
    $scope.showtable = false;
    $scope.person = {};
    $scope.data = {};
    $scope.reset = function(){
        $scope.showtable = false;
        $scope.person = {};
        $scope.data = {};
    };
    $scope.submit = function(){
        $scope.showtable = true;
        $scope.person.interests = "";
        if($scope.person.cooking) $scope.person.interests+="Cooking"+ " ";
        if($scope.person.reading) $scope.person.interests+="Reading"+ " ";
        if($scope.person.writing) $scope.person.interests+="Writing"+ " ";
        if($scope.person.painting) $scope.person.interests+="Painting"+ " ";
        if($scope.person.travelling) $scope.person.interests+="Travelling"+ " ";
        $scope.data = $scope.person;
    }
})