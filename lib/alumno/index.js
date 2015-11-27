'use strict'

class Alumno{

  inicio(req, res){
    res.render("alumno/index", { user:req.session.user })
  }

}

module.exports = Alumno
