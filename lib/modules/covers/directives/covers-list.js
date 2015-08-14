import angular from 'angular';

const covers = angular.module( 'covers' );

covers.directive( 'coversList', () => {
  return {
    'restrict': 'E',
    'templateUrl': '/covers-list.html',
    'controller': 'CoversListCtrl',
    'controllerAs': 'coversList',
  };
});
