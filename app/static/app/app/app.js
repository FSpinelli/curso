var app = angular.module('app',['ngRoute']);
 
app.config(function($routeProvider)
{
 
   $routeProvider
 
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : '/static/app/app/views/home.html',
      controller     : 'HomeCtrl',
   })
 
   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/sobre', {
      templateUrl : '/static/app/app/views/sobre.html',
      controller  : 'SobreCtrl',
   })
 
   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contato', {
      templateUrl : '/static/app/app/views/contato.html',
      controller  : 'ContatoCtrl',
   })
 
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});