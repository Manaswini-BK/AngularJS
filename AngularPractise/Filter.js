var app = angular.module('filterApp',[]);
app.filter('searchFilter',function(){
    return function(items,char){
        var filteredArray = [];
        var match = new RegExp(char,'i');
        for(let i = 0;i<items.length;i++){
            let c = items[i];
            if(match.test(c.name.substring(0,1))){
                filteredArray.push(c);
            }
        }
        return filteredArray;
    }
});

app.controller('filterCtrl',function($scope){
    $scope.namesArray=[
        {name: "Ajay"},
        {name: "Anirudhh"},
        {name: "Akash"},
        {name: "Alekhya"},
        {name: "Bhisma"},
        {name: "Bhargav"},
        {name: "Bharti"},
        {name: "Chetna"},
        {name: "Chandan"},
        {name: "Divya"},
        {name: "Manaswini"},
        {name: "Mayank"},
        {name: "Priyanshi"},
        {name: "Priya"},
        {name: "Prajakta"},
        {name: "Priyanka"},
        {name: "Saurabh"},
        {name: "Sahil"},
        {name: "Shreyansh"},
        {name: "Rajat"}
    ];
    $scope.searchWith = $scope.searchWord;
})