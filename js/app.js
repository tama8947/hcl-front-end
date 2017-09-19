var myApp = angular.module('myApp', ['ngRoute','ui.bootstrap','ngResource'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
       //Se activan las funciones htm5mode y hashPrefix
        $locationProvider.html5Mode ({
            enabled: false,
            requireBase: true
        });
        $locationProvider.hashPrefix ('');
        $routeProvider.when ('/home', {
            templateUrl: 'partials/home.html', 
            controller: 'homeController'
        });
        $routeProvider.when ('/pacientesforms', { 
            templateUrl: 'partials/forms/pacientesform.html',
            controller: 'pacientesformcontroller'
        });
        $routeProvider.when ('/customer', {
            templateUrl: 'partials/forms/customersform.html',
            controller: 'customerformController'
        });
        $routeProvider.when ('/about', {templateUrl:'partials/about.html', controller: 'aboutController'});
        $routeProvider.when ('/contact', {templateUrl:'partials/contact.html', controller: 'contactController'});


        $routeProvider.otherwise ({
            redirectTo: '/home'
        });

    }])
