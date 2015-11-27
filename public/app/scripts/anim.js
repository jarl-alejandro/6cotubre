(function(){
  'use strict'

  const $ = require("jquery")

  exports.efectsForm = function(fOut, fIn){
    $(fOut).fadeOut()
    $(fIn).fadeIn()
  }

  exports.fadeToggle = function(toggle, fIn){
    toggle.fadeToggle('fast', function(){
      fIn.fadeIn()
    })
  }

})()
