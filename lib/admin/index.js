'use strict'

class AdminView{

  admin(req, res){
    res.render("admin/admin", { user:req.session.user })
  }

}

module.exports = AdminView
