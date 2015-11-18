'use strict'

const express = require("express")
const HomeView = require("./home")
const AuthView = require("./auth")
const AdminView = require("./admin")

const router = express.Router()
const homeView = new HomeView()
const authView = new AuthView()
const adminView = new AdminView()

router.get("/", homeView.index)

//auth
router.get("/login", authView.login)
router.post("/login", authView.loginEmail)
router.get("/signup", authView.signup)
router.post("/signup", authView.signupEmail)
router.get("/logout", authView.logout)

//admin
router.get("/admin", adminView.admin)
router.post("/new", adminView.createUser)

module.exports = router
