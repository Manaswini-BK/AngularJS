var app = angular.module('myServiceApp',[]);

app.service('serviceImpl',function(){
   var message = "";
    this.setMessage = function(msg){
        message = msg;
        return message;
    };
});

app.factory('factoryImpl',function(){
    var factoryObj={};
    factoryObj.message = "";
    factoryObj.setMessage = function(msg){
        factoryObj.message = msg;
    }
    return factoryObj;
});

app.provider('providerImpl', function(){
    var pmessage = "";
    this.setMessage = function(msg){
        pmessage = msg;
    };
    this.$get = function(){
        return {
            message: pmessage
        };
    };
});
app.config(function(providerImplProvider){
    providerImplProvider.setMessage("I am from provider");
});
app.controller('myServiceCtrl',function($scope, serviceImpl,factoryImpl,providerImpl){
   
    $scope.serviceMsg = serviceImpl.setMessage("I am from Service");
    factoryImpl.setMessage("I am from factory");
    $scope.factoryMsg = factoryImpl.message;
    $scope.providerMsg = providerImpl.message;
});
