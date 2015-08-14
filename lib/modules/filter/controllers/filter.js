import angular from 'angular';

const filter = angular.module( 'filter' );

filter.controller( 'FilterCtrl', [ '$scope', 'filterService', function ( $scope, filterService ) {
  const filterCovers = () => {
    $scope.$broadcast( 'covers.filter', {
      'filter': filterService.filter.get(),
      'term': filterService.term.get(),
    });
  };

  $scope.$on( 'filterService.filter.updated', () => {
    filterCovers();
  });

  $scope.$on( 'filterService.term.updated', () => {
    filterCovers();
  });
}]);
