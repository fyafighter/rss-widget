'use strict';

angular.module('propel-rss', [])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .when('/rss', '/rss/activity');

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('rss', {
        abstract: true,
        parent: 'propel',
        url: '/rss',
        template: '<ui-view/>',
        data: {
          title: 'Hot News',
          app: {
            name: 'rss',
            transparentHeader: false
          }
        }
      })
      .state('rss.activity', {
        url: '/activity',
        templateUrl: 'templates/rss-client/activity.html',
        controller: 'activityCtrl',
        controllerAs: 'vm',
        resolve: {
          feeds: function(activitySvc) {
            return activitySvc.getFeeds().$promise;
          }
        }
      });

  });
