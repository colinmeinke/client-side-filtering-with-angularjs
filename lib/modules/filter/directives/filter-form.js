import angular from 'angular';

const filter = angular.module( 'filter' );

filter.directive( 'filterForm', () => {
  return {
    'restrict': 'E',
    'templateUrl': '/filter-form.html',
    'controller': 'FilterFormCtrl',
    'controllerAs': 'filterForm',
  };
});
