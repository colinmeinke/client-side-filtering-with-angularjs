import angular from 'angular';

const helpers = angular.module( 'helpers' );

helpers.filter( 'highlight', [ '$sce', function ( $sce ) {
  return ( input, highlight ) => {
    if ( highlight ) {
      return $sce.trustAsHtml( input.replace( new RegExp( highlight, 'i' ), ( found ) => {
        return `<strong>${found}</strong>`;
      }));
    }

    return $sce.trustAsHtml( input );
  };
}]);
