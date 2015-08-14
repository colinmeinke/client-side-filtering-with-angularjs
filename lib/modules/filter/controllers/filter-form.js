import angular from 'angular';

const filter = angular.module( 'filter' );

filter.controller( 'FilterFormCtrl', [ 'filterService', function ( filterService ) {
  this.filters = {
    'actor': 'Actor',
    'plot': 'Plot',
    'rating': 'Rating',
    'title': 'Title',
    'year': 'Year',
  };

  this.setFilter = filter => {
    filterService.filter.set( filter );
    this.filterName = this.filters[ filter ];
  };

  this.filterName = this.filters[ filterService.filter.get() ];

  this.term = null;

  this.setTerm = () => {
    filterService.term.set( this.term );
  };
}]);
