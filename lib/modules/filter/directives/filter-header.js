import angular from 'angular';

const filter = angular.module( 'filter' );

filter.directive( 'filterHeader', () => {
  return {
    'restrict': 'E',
    'templateUrl': '/filter-header.html',
    'controller': 'FilterHeaderCtrl',
    'controllerAs': 'filterHeader',
  };
});
