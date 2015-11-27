(function(){
  'use strict'

  const $ = require("jquery")
  const admin = require("./admin")
  const auth = require("./auth")
  const alumno = require("./alumno")

  const $startSession = $(".start__session")

  $startSession.on("click", function(e){
    e.preventDefault()
    $(".forms").addClass("active__pop")
  })


})()
