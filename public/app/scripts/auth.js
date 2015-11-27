(function(){
  'use strict'

  const $ = require("jquery")
  const domify = require("domify")
  const anim = require("./anim")
  const msg  = require("./templates/msg.hbs")

  const $next = $(".next")

  $next.on("click", function(e){
    e.preventDefault()

    let name = $("#nameSingup").val()
    let password = $("#passwordSingup").val()
    let password2 = $("#password2Singup").val()

    if(name === "" || password === "" || password2 === ""){
      let tpl = msg({ msg:"Debes llenar los campos requeridos" })
      $("body").append(domify(tpl))
      $(".toast").delay(500).fadeOut()
    }
    else{
      if(password == password2){
        anim.efectsForm(".fisrt", ".next__form")
      }
      else{
        let tpl = msg({ msg:"Las contraseñas no coinciden" })
        $("body").append(domify(tpl))
        $(".toast").delay(500).fadeOut()
      }
    }
  })

})()
