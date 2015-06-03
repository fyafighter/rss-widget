'use strict';
var gulp = require('gulp');
require('@propel/jumpstart-engine-angular-express-sass').expressAndAngular();
// Enable gulp tasks for packaging
require('@propel/gulp-jumpstart-web-packager')();
require('@propel/gulp-jumpstart-archiver')();
 
gulp.task('default', ['serve']);



endpoints.json

  {
    "name": "rss",
    "role": [],
    "label": "endpoint.launchpad",
    "icon": "assets/propel-endpoints/images/app-news.png",
    "url": {
      "ui": "http://localhost:9000/rss"
    }
  }

app.json

  "rss": {
    "mount": "/api",
    "rssConfigDir": "conf/",
    "rssConfig": "rss.json",
    "rssConfigOrg": "rss.{orgName}.json"
  },

  endpoints.json

            {
            "id": "dashboard-tile_rss",
            "label": "Hot News",
            "role": ["SERVICE_CONSUMER"],
            "backgroundImage": "assets/propel-endpoints/images/app-news.png",
            "link": "http://localhost:9000/rss"
          },



 rss.json

 [
  "http://rss.cnn.com/rss/cnn_topstories.rss",
  "http://sports.espn.go.com/espn/rss/news"
]

