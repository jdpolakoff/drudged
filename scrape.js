var express = require('express');
var request = require('request')
var cheerio = require('cheerio')

var url = 'http://www.drudgereportfeed.com/'

request(url, function(err, resp, body){
    var $ = cheerio.load(body)
    var linkArray = []

    var stories = $('.story')
    $(stories).each((i, story)=> {
      var info = {
        linkText: $(story).find('.story-headline').text(),
        linkHref: $(story).find('a').attr('href'),
        index: i
      }
      linkArray.push(info)
    })
    console.log(linkArray)
   })
