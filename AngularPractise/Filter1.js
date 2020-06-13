var app = angular.module('filterImpl',[]);
app.controller('filter1Ctrl',function($scope){
    $scope.namesArray=[
        {name: "ajay"},
        {name: "anirudhh"},
        {name: "akash"},
        {name: "alekhya"},
        {name: "bhisma"},
        {name: "bhargav"},
        {name: "bharti"},
        {name: "chetna"},
        {name: "chandan"},
        {name: "divya"},
        {name: "manaswini"},
        {name: "mayank"},
        {name: "priyanshi"},
        {name: "priya"},
        {name: "prajakta"},
        {name: "priyanka"},
        {name: "saurabh"},
        {name: "sahil"},
        {name: "shreyansh"},
        {name: "rajat"}
    ];
});
app.filter('filterName',function(){
    return function(items){
        var filteredArray =[];
        for(let i = 0;i<items.length;i++){
            var x = items[i];
            if(i%2 == 0){
                x.name = x.name.toUpperCase();
            }
            filteredArray.push(x);
        }
        return filteredArray;
    }
})