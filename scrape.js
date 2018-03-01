var express = require('express');
var request = require('request')
var cheerio = require('cheerio')

var url = 'http://www.drudgereport.com/'

request(url, function(err, resp, body){
    var $ = cheerio.load(body)
    var linkArray = []

    var topStories = $('#app_topstories a')
    $(topStories).each((i, story)=> {
      var info1 = {
        linkText: $(story).attr('href'),
        linkHref: $(story).text()
      }
      linkArray.push(info1)
    })

    var links = $('a')
    $(links).each(function(i, link){
      console.log(i, $(link).text())
      var info = {
        linkText: $(link).text(),
        linkHref: $(link).attr('href')
      }
      linkArray.push(info)
    })
    return linkArray
  })
