'use strict'

const User = require("../auth/model")


class AdminView{

  admin(req, res){
    User.find({}).exec()
    .then((user)=>{
      res.render("admin/admin", { user:req.session.user, usuarios:user })
    }, (err)=>{
      return err.message
    })
  }

  createUser(req, res){
    User.findOne({ 'email':req.body.email }).exec()
    .then((user)=>{
      if(user)
        res.redirect("/")
      else{
        let cl = req.body.cedula.toString()
        let nbr = req.body.name.toString().toLowerCase()

        let password = nbr.substr(0,3) + cl.substr(0,3)

        let user = new User({
          name      : req.body.name,
          lastName  : req.body.lastName,
          email     : req.body.email,
          password  : password,
          cedula    : req.body.cedula,
          type      : req.body.type,
          course    : req.body.course,
          parallel  : req.body.parallel
        })

        user.save((err)=>{
          if(err)
            return err.message
          else{
            res
              .status(201)
              .send(user)
          }
        })
      }
    }, (err)=>{
      return err.message
    })
  }

}

module.exports = AdminView
