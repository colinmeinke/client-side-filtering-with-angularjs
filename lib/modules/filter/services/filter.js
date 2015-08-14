import angular from 'angular';

const filter = angular.module( 'filter' );

filter.service( 'filterService', [ '$rootScope', function ( $rootScope ) {
  let filter = 'title';
  let term = null;

  return {
    'filter': {
      'get': () => {
        return filter;
      },
      'set': val => {
        filter = val;
        $rootScope.$broadcast( 'filterService.filter.updated', filter );
      },
    },
    'term': {
      'get': () => {
        return term;
      },
      'set': val => {
        term = val;
        $rootScope.$broadcast( 'filterService.term.updated', term );
      },
    },
  };
}]);
