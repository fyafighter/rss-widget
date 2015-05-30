'use strict';

function $activitySvc($resource) {

  var resource = $resource('/api/rss', {}, {
    getFeeds: {
      method: 'GET',
      isArray: true,
      tracker: 'rss$getFeeds'
    },
    addFeed: {
      method: 'POST',
      tracker: 'rss$addFeed'
    },
    getFeed: {
      url: '/api/rss/:id',
      method: 'GET',
      tracker: 'rss$getFeed'
    },
    removeFeed: {
      url: '/api/rss/:id',
      method: 'DELETE',
      params: {
        id: '@id'
      },
      tracker: 'rss$removeFeed'
    },
    getAllPosts: {
      url: '/api/rss/feed',
      method: 'GET',
      isArray: true,
      tracker: 'rss$getAllPosts'
    },
    getPosts: {
      url: '/api/rss/:id/feed',
      method: 'GET',
      params: {
        id: '@id'
      },
      isArray: true,
      tracker: 'rss$getPosts'
    }
  });

  return resource;
}

angular.module('propel-rss')
  .factory('activitySvc', ['$resource', $activitySvc]);
