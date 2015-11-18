(function(){
  'use strict'

  const $ = require("jquery")

  const $next         = $(".next")
  const $startSession = $(".start__session")
  const $alumno       = $("#alumno")
  const $profesor     = $("#profesor")
  const $alumnoForm   = $("#alumnoForm")
  const $profesorForm = $("#profesorForm")
  const $admin        = $(".admin")
  const $newProfesor  = $("#newProfesor")
  const $newAlumno    = $("#newAlumno")

  $("#atras").on("click", function(e){
    fadeToggle($profesorForm, $admin)
  })

  function efectsForm(fOut, fIn){
    $(fOut).fadeOut()
    $(fIn).fadeIn()
  }

  function fadeToggle(toggle, fIn){
    toggle.fadeToggle('fast', function(){
      fIn.fadeIn()
    })
  }

  function vaciar(){
    $("#nameProfesor").val("")
    $("#lastNameProfesor").val("")
    $("#emailProfesor").val("")
    $("#cedulaProfesor").val("")
    $("#typeProfesor").val("")
    $("#courseAlumno").val("")
    $("#parallelAlumno").val("")
  }

  $next.on("click", function(e){
    e.preventDefault()

    let name = $("#nameSingup").val()
    let password = $("#passwordSingup").val()
    let password2 = $("#password2Singup").val()

    if(name === "" || password === "" || password2 === ""){
      alert("campos vacios")
    }
    else
      efectsForm(".fisrt", ".next__form")
  })

  $startSession.on("click", function(e){
    e.preventDefault()
    $(".forms").addClass("active__pop")
  })

  $alumno.on("click", function(e){
    fadeToggle($admin, $alumnoForm)
  })

  $profesor.on("click", function(e){
    fadeToggle($admin, $profesorForm)
  })

  $newProfesor.on("submit", function(e){
    e.preventDefault()

    let data = {
      name      : $("#nameProfesor").val(),
      lastName  : $("#lastNameProfesor").val(),
      email     : $("#emailProfesor").val(),
      cedula    : $("#cedulaProfesor").val(),
      type      : $("#typeProfesor").val(),
    }

    $.post("/new", data, function(data){
      $profesorForm.fadeToggle('fast', function(){
        $admin.fadeIn()

        let tpl = "<article class='profesores'>\
            <h2>Profesor</h2>\
            <hr>\
            <h3>"+ data.name +"</h3>\
            <hr>\
          </article>"

        $("#usuariosRegistrados").append(tpl)
        vaciar()
      })
    })

  })

  $newAlumno.on("submit", function(e){
    e.preventDefault()

    let dataAlumno = {
      name      : $("#nameAlumno").val(),
      lastName  : $("#lastNameAlumno").val(),
      email     : $("#emailAlumno").val(),
      cedula    : $("#cedulaAlumno").val(),
      type      : $("#typeAlumno").val(),
      course    : $("#courseAlumno").val(),
      parallel  : $("#parallelAlumno").val()
    }

    $.post("/new", dataAlumno, function(data){
      $alumnoForm.fadeToggle('fast', function(){
        $admin.fadeIn()

        let tpl = "<article class='alumnos'>\
          <h2>Alumnos</h2>\
          <hr>\
          <h3>"+ data.name +"</h3>\
          <hd>"+ data.course + " " + data.parallel +"</hd>\
          <hr>\
        </article>"

        $("#usuariosRegistrados").append(tpl)
        vaciar()
      })
    })
  })

})()
