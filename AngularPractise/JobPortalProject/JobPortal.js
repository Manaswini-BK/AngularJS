var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.showTableData = false;
    $scope.showTable = function(){
        $scope.showTableData = true;
    }
    $scope.reset = function(){
        $scope.showTableData = false;
        $scope.prsnlDet = {};
        $scope.eduDet = {};
        $scope.profDet = {};
    }
    $scope.prsnlDet = {};
    $scope.eduDet = {};
    $scope.profDet = {};
});
app.directive("personalDetails",function(){
    return{
        restrict: "EA",
        templateUrl:"JobPortal/PersonalDetails.html",
        scope:{
            prsnlDet: "="
        }
    }
});
app.directive("educationalDetails",function(){
    return{
        restrict: "EA",
        templateUrl:"JobPortal/EducationalDetails.html",
        scope:{
            eduDet: "="
        }
    }
});
app.directive("professionalDetails",function(){
    var profDetctrl = ['$scope',function($scope){
        const input = document.getElementById("file");
        input.addEventListener('change', function(){
            const files = input.files;
            if(files.length!=0){
                $scope.profDet.resume = "Yes";
            }
            else{
                $scope.profDet.resume = "No";
            }
        });
    }];
    return{
        restrict: "EA",
        templateUrl:"JobPortal/ProfessionalDetails.html",
        scope:{
            profDet: "="
        },
        controller: profDetctrl
    }
});
app.directive("displayTable",function(){
    return{
        restrict:"EA",
        templateUrl:"JobPortal/ShowTableForReview.html",
        scope:{
            checkId:"@",
            tableDataForPersonalData: "=",
            tableDataForEducationalData:"=",
            tableDataForProfessionalData: "="
        }
    }
});
// app.directive("customError",function(){
//     return {
//         restrict: 'A',
//         require: 'ngModel',
//         link: function (scope, element, attr, ctrl) {
//             function customValidator(ngModelValue) {
//                 if (ngModelValue.length === 0) {
//                     ctrl.$setValidity('firstNameReq', true);
//                 } else {
//                     ctrl.$setValidity('firstNameReq', false);
//                 }
//                 return ngModelValue;
//             }
//             ctrl.$parsers.push(customValidator);
//         }
//     }
// });