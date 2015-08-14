import angular from 'angular';

const filter = angular.module( 'filter' );

filter.controller( 'FilterHeaderCtrl', [ '$scope', '$sce', 'filterService', function ( $scope, $sce, filterService ) {
  const defaultTitle = 'Showing <strong>all</strong> movies.';

  const updateTitle = () => {
    const filter = filterService.filter.get();
    const term = filterService.term.get();

    if ( term ) {
      const t = term.toLowerCase();
      const titlePrefix = `Showing movies`;

      switch ( filter ) {
        case 'actor':
          this.title = $sce.trustAsHtml( `${titlePrefix} with an <strong>${filter}</strong> whose name includes <strong>${t}</strong>.` );
          break;
        case 'rating':
          this.title = $sce.trustAsHtml( `${titlePrefix} with a <strong>${filter}</strong> of at least <strong>${t}%</strong>.` );
          break;
        case 'year':
          this.title = $sce.trustAsHtml( `${titlePrefix} <strong>released</strong> in <strong>${t}</strong>.` );
          break;
        case 'plot':
        case 'title':
        default:
          this.title = $sce.trustAsHtml( `${titlePrefix} with a <strong>${filter}</strong> that includes <strong>${t}</strong>.` );
      }
    } else {
      this.title = $sce.trustAsHtml( defaultTitle );
    }
  };

  this.title = $sce.trustAsHtml( defaultTitle );

  $scope.$on( 'filterService.filter.updated', () => {
    updateTitle();
  });

  $scope.$on( 'filterService.term.updated', () => {
    updateTitle();
  });
}]);
