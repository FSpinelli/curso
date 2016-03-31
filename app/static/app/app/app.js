var app = angular.module('app',['ngRoute','ui.bootstrap']);
 
app.config(function($routeProvider, $locationProvider, $interpolateProvider)
{
   $interpolateProvider.startSymbol('{$');
   $interpolateProvider.endSymbol('$}');

   $locationProvider.html5Mode(true);
 
   $routeProvider
 
   .when('/', {
      templateUrl : '/static/app/app/views/home.html',
      controller     : 'HomeCtrl',
   })
 
   .when('/sobre', {
      templateUrl : '/static/app/app/views/sobre.html',
      controller  : 'SobreCtrl',
   })
 
   .when('/contato', {
      templateUrl : '/static/app/app/views/contato.html',
      controller  : 'ContatoCtrl',
   })
 
   .otherwise ({ templateUrl:'/static/app/app/views/layout/404.html' });
});