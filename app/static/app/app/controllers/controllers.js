app.controller('HomeCtrl', function($rootScope, $location, $scope)
{
	// carousel
	$scope.myInterval = 3000;
   	$scope.slides = [
      	{
         	image: 'http://www.lfg.com.br/media/banner/concurso_1.jpg'
      	},
      	{
         	image: 'http://www.lfg.com.br/media/banner/concurso_2.jpg'
      	},
      	{
         	image: 'http://www.lfg.com.br/media/banner/concurso_3.jpg'
      	}
	];

   	$rootScope.activetab = $location.path();
});
 
app.controller('SobreCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});
 
app.controller('ContatoCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});