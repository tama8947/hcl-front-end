myApp.controller('customerformController', ['$scope', 'ApiServices', function($scope, ApiServices){ 
    $scope.customerform = {};
    
    $scope.addNewCustomer = function(){
        ApiServices.Customer.save({}, $scope.customerform, function(){
            $scope.customerform = {};
        })
    }
}])