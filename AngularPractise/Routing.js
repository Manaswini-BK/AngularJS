var app = angular.module("myRouteApp",["ngRoute","myAppCtrl","myAppDir"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/BasicsOfAngular/:id",{
        templateUrl :"/BasicsOfAngular.html"
    })
    .when("/AngularController",{
        textFromRoute:"This is passed from route module",
        templateUrl:"/AngularController.html",
        controller:"myAngCtrl"
    })
    .when("/Directives",{
        templateUrl:"/Directives.html",
        controller:"myCtrlDir"
    })
});