myApp.factory('ApiServices', ['$resource', function($resource){
    return{
        Customer: $resource('api/customer/:id', {id: '@id'})
    }
}])

