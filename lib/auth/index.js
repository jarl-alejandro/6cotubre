'use strict'

const User = require("./model")

class Auth{

  login(req, res){
    res.render("auth/login")
  }

  signup(req, res){
    res.render("auth/signup")
  }

  logout(req, res){
    delete req.session.user
    res.redirect("/")
  }

  loginEmail(req, res){
    User.findOne({ 'email':req.body.email }).exec()
    .then((user)=>{
      if(user){
        user.comparePassword(req.body.password, (err, isMatch)=>{

          if(!isMatch){
            res.redirect("/")
          }
          else{
            req.session.user = user
            console.log(user);
            if(user.type == 'Admin')
              res.redirect("/admin")

            if(user.type == 'alumno')
              res.redirect(`/alumno/${ user.name }`)
          }

        })
      }
      else
        res.redirect("/")
    }, (err)=>{
      return err.message
    })
  }

  signupEmail(req, res){
    User.findOne({ 'email':req.body.email }).exec()
    .then((user)=>{
      if(user)
        res.redirect("/")
      else{
        let user = new User({
          name      : req.body.name,
          lastName  : req.body.lastName,
          email     : req.body.email,
          password  : req.body.password,
          cedula    : req.body.cedula,
          type      : "Admin"
        })

        user.save((err)=>{
          if(err)
            return err.message
          else{
            req.session.user = user
            res.redirect("/admin")
          }
        })
      }

    }, (err)=>{
      return err.message
    })
  }
}

module.exports = Auth
