'use strict';

var scrapers = {};

scrapers['pinterest'] = require('./scraper/pinterest.js');

exports.scrape = function(req, res){
  var url = req.body.url;
  var scraperToUse;

  if(url.indexOf('pinterest') > -1){
    scraperToUse = 'pinterest';
  } else {
    console.log('Cannot locate scraper');
  }

  scrapers[scraperToUse].list(url, function(data) {
    console.log('data from scraper: ' + data);
    res.json(data);
  })
}
