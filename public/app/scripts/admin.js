(function(){
  'use strict'

  const $ = require("jquery")
  const domify = require("domify")
  const anim = require("./anim")

  const alumno = require("./templates/alumno.hbs")
  const profesor = require("./templates/profesor.hbs")

  const $newProfesor  = $("#newProfesor")
  const $newAlumno    = $("#newAlumno")
  const $alumnoForm   = $("#alumnoForm")
  const $profesorForm = $("#profesorForm")
  const $admin        = $(".admin")
  const $alumno       = $("#alumno")
  const $profesor     = $("#profesor")

  $newProfesor.on("submit", teacherEvent)
  $newAlumno.on("submit", alumnoEvent)

  $alumno.on("click", function(e){
    anim.fadeToggle($admin, $alumnoForm)
  })

  $profesor.on("click", function(e){
    anim.fadeToggle($admin, $profesorForm)
  })

  function vaciar(){
    $("#nameProfesor").val("")
    $("#lastNameProfesor").val("")
    $("#emailProfesor").val("")
    $("#cedulaProfesor").val("")
    $("#typeProfesor").val("")
    $("#courseAlumno").val("")
    $("#parallelAlumno").val("")
  }

  function helperTemplate(template, data){
    $admin.fadeIn()
    let tpl = template({ data:data })
    $("#usuariosRegistrados").append(domify(tpl))
    vaciar()
  }

  function alumnoEvent(e){
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
        helperTemplate(alumno, data)
      })
    })
  }

  function teacherEvent(e){
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
        helperTemplate(profesor, data)
      })
    })

  }

})()
