(function(){
  'use strict'

  const $ = require("jquery")

  const $next         = $(".next")
  const $startSession = $(".start__session")
  const $alumno       = $("#alumno")
  const $alumnoForm   = $("#alumnoForm")

  function efectsForm(fOut, fIn){
    $(fOut).fadeOut()
    $(fIn).fadeIn()
  }

  $next.on("click", function(e){
    e.preventDefault()
    efectsForm(".next", ".fisrt")

  })

  $alumno.on("click", function(e){
    e.preventDefault()
    //efectsForm(".admin", "#alumnoForm")

    $(".admin").fadeToggle('fast', function(){
      $("#alumnoForm").fadeIn()
    })
  })


  $startSession.on("click", function(e){
    e.preventDefault()
    $(".forms").addClass("active__pop")
  })


})()
