var app = angular.module("svc",[]);

app.service('serviceSquare',function(){
    this.square = function(num){
        return num*num;
    }
});

app.factory('factorySquare',function(){
    var factObj = {};
    factObj.square = function(num){
        return num*num;
    }
    return factObj;
});

// app.provider('providerSquare',function(){
//     this.square = function(num){
//         s = num*num;
//     }
//     this.$get = function(){
//         return{
//             square:s
//         };
//     };
// });

app.config(function($provide){
    $provide.provider('providerSquare',function(){
        this.$get = function(){
            var obj = {};
            obj.square = function(num){
                return num*num;
            }
            return obj;
        };
    })
    
});

app.service('Multiply',function(serviceSquare){
    this.multiply = function(num){
        return serviceSquare.square(num);
    }
});

app.controller('svcCtrl',function($scope,serviceSquare,factorySquare,providerSquare,Multiply){
    $scope.multSvc = function(){
        $scope.squareOfNum = serviceSquare.square($scope.square);
    };
    $scope.multFac = function(){
        $scope.squareOfNum = factorySquare.square($scope.square);
    };
    $scope.multProv = function(){
        $scope.squareOfNum = providerSquare.square($scope.square);
    };
    $scope.multSS = function(){
        $scope.squareOfNum = Multiply.multiply($scope.square);
    };
});