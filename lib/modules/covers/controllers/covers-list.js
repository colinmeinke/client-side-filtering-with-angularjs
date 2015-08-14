import angular from 'angular';

const covers = angular.module( 'covers' );

covers.controller( 'CoversListCtrl', [ '$scope', function ( $scope ) {
  this.covers = allCovers;

  this.highlightText = null;

  $scope.$on( 'covers.filter', ( e, data ) => {
    const { filter, term } = data;

    setHighlightText( filter, term );

    if ( term ) {
      const func = getFilterFunc( filter, term );
      filterCovers( func );
    } else {
      this.covers = allCovers;
    }
  });

  const setHighlightText = ( filter, term ) => {
    if ( filter === 'title' ) {
      this.highlightText = term;
    } else {
      this.highlightText = null;
    }
  };

  const filterCovers = func => {
    this.covers = allCovers.filter( func );
  };

  const getFilterFunc = ( filter, term ) => {
    switch ( filter ) {
      case 'actor':
        return cover => {
          const actors = cover.actors.map( actor => {
            return actor.toLowerCase();
          });

          const t = term.toLowerCase();

          for ( let i = 0, l = actors.length; i < l; i++ ) {
            if ( actors[ i ].indexOf( t ) > -1 ) {
              return true;
            }
          };

          return false;
        };
      case 'plot':
        return cover => {
          return cover.plot.toLowerCase().indexOf( term.toLowerCase()) > -1;
        };
      case 'rating':
        return cover => {
          return cover.rating >= parseInt( term, 10 );
        };
      case 'title':
        return cover => {
          return cover.title.toLowerCase().indexOf( term.toLowerCase()) > -1;
        };
      case 'year':
        return cover => {
          return cover.year === parseInt( term, 10 );
        };
      default:
        return () => {
          return true;
        };
    };
  };
}]);

const allCovers = [
  {
    'actors': [ 'Ruth Kadiri', 'Nkem Owoh', 'John Okafor' ],
    'plot': `A widower who marries a much younger attractive woman after his wife and child die in a car accident becomes increasingly paranoid about his wife's extra marital activities after listening to gossip in the village.`,
    'id': 6395,
    'image': 'http://images2.irokotv.com/video/cover/2/5/irokotv_dOLDnJ9vrl5I6fwUVOlWrQU1awM_200x292.jpeg',
    'rating': 46,
    'title': 'Chief Commander',
    'url': 'http://irokotv.com/video/6395/chief-commander',
    'year': 2015,
  },
  {
    'actors': [ 'Ebere Okaro', 'Fredrick Leonard', 'Belinda Effah' ],
    'plot': `A dying wife instructs her much younger husband to locate the daughter she's kept as a secret from him, not knowing that he has other plans in place.`,
    'id': 6397,
    'image': 'http://images1.irokotv.com/video/cover/e/7/irokotv_dOLsOh5SFqcsuikUVFAjP5YRQCA_200x292.jpeg',
    'rating': 87,
    'title': 'Keeping Secret',
    'url': 'http://irokotv.com/video/6397/keeping-secret',
    'year': 2015,
  },
  {
    'actors': [ 'Chioma Chukwuka', 'Michael Godson', 'Eve Esin' ],
    'plot': `Amarachi, a modest village girl battles her family who are vehemently opposed to her plans to marry an aspiring footballer, rather than the wealthy chief that they selfishly approve of.`,
    'id': 6392,
    'image': 'http://images1.irokotv.com/video/cover/c/6/irokotv_dOJAEz8BLhGRSBwgwzl0q80ue50_200x292.jpeg',
    'rating': 72,
    'title': 'Amarachi',
    'url': 'http://irokotv.com/video/6392/amarachi',
    'year': 2015,
  },
  {
    'actors': [ 'Empress Njamah', 'Paul Sambo', 'Tonia Nwosu' ],
    'plot': `A conscientious employee about to go on trial for murder glumly recounts to her lawyer the story of how her dream job turned into an ultimate nightmare.`,
    'id': 6386,
    'image': 'http://images2.irokotv.com/video/cover/e/7/irokotv_dOHbxa0sid2fXharguiUcH180Xg_200x292.jpeg',
    'rating': 60,
    'title': 'Behind The Curtains',
    'url': 'http://irokotv.com/video/6386/behind-the-curtains',
    'year': 2015,
  },
  {
    'actors': [ 'Desmond Elliot', 'Majid Michel', 'OC Ukeje' ],
    'plot': `The gang members in a secret department of a business conglomerate blackmail top executives into selling their companies to the leader of the conglomerate, however trouble brews when two members want to opt out.`,
    'id': 6385,
    'image': 'http://images2.irokotv.com/video/cover/a/2/irokotv_dOFZuy15zQw6lx0zzF7vhguk6tzC_200x292.png',
    'rating': 82,
    'title': 'The Department',
    'url': 'http://irokotv.com/video/6385/the-department',
    'year': 2015,
  },
  {
    'actors': [ 'Majid Michel', 'Eve Esin', 'Beverly Naya', 'Benjamin Touitou' ],
    'plot': `A learning disabled young man who is widely believed to be mad and is stigmatized by the community piques the interest of a royal princess much to the chagrin of her fiance who is selfishly determined to keep the two apart.`,
    'id': 6381,
    'image': 'http://images2.irokotv.com/video/cover/c/0/irokotv_dOCnKG4sn26DTUnoQsRM6kyINK7_200x292.jpeg',
    'rating': 72,
    'title': 'The Mad Man I Love',
    'url': 'http://irokotv.com/video/6381/the-mad-man-i-love',
    'year': 2015,
  },
  {
    'actors': [ 'Blessing Obasi', 'Blossom Chukwujekwu', 'Uru Eke' ],
    'plot': `A devoted mother and wife has the seemingly perfect family and career however her clueless husband is oblivious to the fact that their lackluster love life leaves her craving much more.`,
    'id': 6384,
    'image': 'http://images2.irokotv.com/video/cover/2/5/irokotv_dOCgYl1PDlwHzVHeRWLzr7aK0o2_200x292.jpeg',
    'rating': 85,
    'title': 'Clueless',
    'url': 'http://irokotv.com//video/6384/clueless',
    'year': 2015,
  },
  {
    'actors': [ 'Mike Ezuruonye', 'Clarion Chukwura', 'Okawa Shaznay', 'Zack Orji' ],
    'plot': `A concerned daughter discovers her grieving mother's sordid secret when she returns home from a long trip away and advices her to take a vacation to rediscover herself. Little does she know she will live to regret this advice.`,
    'id': 6383,
    'image': 'http://images1.irokotv.com/video/cover/d/6/irokotv_dOBMrM6dZk8q5BhiXzYMZSKb2DG_200x292.jpeg',
    'rating': 82,
    'title': 'Scars',
    'url': 'http://irokotv.com/video/6383/scars',
    'year': 2015,
  },
  {
    'actors': [ 'Bola Ninalowo', 'Mimi Orjiekwe', 'Moyo Lawal' ],
    'plot': `A cheating Lothario who refuses to commit to the mother of his only daughter, deeming her a baby mama unworthy of respect faces the wrath of her concerned father who issues him a serious ultimatum.`,
    'id': 6377,
    'image': 'http://images1.irokotv.com/video/cover/e/7/irokotv_dOybep75rSqRXVpOxeaGLKD0beC_200x292.jpeg',
    'rating': 45,
    'title': 'Desperate Baby Mama',
    'url': 'http://irokotv.com/video/6377/desperate-baby-mama',
    'year': 2015,
  },
];
