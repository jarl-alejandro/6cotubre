(function(){
  'use strict'

  const $ = require("jquery")

  const $next = $(".next")
  const $startSession = $(".start__session")

  $next.on("click", function(e){
    e.preventDefault()

    $(".fisrt").fadeOut()
    $(".next").fadeIn()
  })

  $startSession.on("click", function(e){
    e.preventDefault()
    $(".forms").addClass("active__pop")
  })


})()
