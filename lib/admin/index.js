'use strict'

class AdminView{

  admin(req, res){
    console.log(req.session.user);
    res.render("admin/admin", { user:req.session.user })
  }

}

module.exports = AdminView
