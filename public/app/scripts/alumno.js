(function(){
  'use strict'

  const $ = require("jquery")
  const anim = require("./anim")

  const $cpassword = $(".cpassword")

  $cpassword.on("click", formPassword)

  function formPassword(e){
    e.preventDefault()
    anim.fadeToggle($(".container__alumno"), $(".form__contraseña"))
  }

})()
