/*
require('./landing');
require('./collection');
require('./album');
require('./profile');
*/
blocJams = angular.module('BlocJams', ['ui.router']);
// angular.module('BlocJams', []).controller('Landing.controller', ['$scope', function($scope) {
//   console.log('Landing.controller');
blocJams.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);

   $stateProvider.state('landing', {
     url: '/',
     controller: 'Landing.controller',
     templateUrl: '/templates/landing.html'
   });
 }]);

 // This is a cleaner way to call the controller than crowding it on the module definition.
 blocJams.controller('Landing.controller', ['$scope', function($scope) {

   $scope.titleText = 'Bloc Jams';
   $scope.subText = 'Turn the music up!';
   $scope.subTextClicked = function() {
     $scope.subText += '!';
   };

   function shuffle(o) { //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
    return o;
 }
}

       var albumsArray = [
     '/images/album-placeholders/album-1.jpg',
     '/images/album-placeholders/album-2.jpg',
     '/images/album-placeholders/album-3.jpg',
     '/images/album-placeholders/album-4.jpg',
     '/images/album-placeholders/album-5.jpg',
     '/images/album-placeholders/album-6.jpg',
     '/images/album-placeholders/album-7.jpg',
     '/images/album-placeholders/album-8.jpg',
     '/images/album-placeholders/album-9.jpg'
   ];
$scope.albumURLs = albumsArray;
$scope.titleTextClicked = shuffle(albumsArray);

}]);
