'use strict';

angular.module('propel-rss')
  .controller('activityCtrl', function(feeds, activitySvc) {
    var vm = this;

    vm.feeds = feeds;
    vm.currentFeed = null;

    vm.getFeeds = function() {
      vm.feeds = activitySvc.getFeeds();
    };

    vm.getAllPosts = function() {
      vm.currentFeed = null;
      vm.posts = activitySvc.getAllPosts();
    };

    vm.getAllPostsCount = function() {
      var totalCount = 0;
      vm.feeds.forEach(function(feed) {
        totalCount += feed.count;
      });
      return totalCount;
    };

    vm.getPosts = function(feed) {
      vm.currentFeed = feed;
      vm.posts = activitySvc.getPosts({
        id: feed.id
      });

      vm.posts.$promise.then(function(posts) {
        feed.count = posts.length;
      });
    };

    vm.getAllPosts();
  });
