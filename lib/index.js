'use strict'

const path = require("path")
const express = require("express")
const swig = require("swig")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')

const router = require('./router')

class App{

  constructor(config){
    config = config || {}

    this.app = express()
    this.bodyPost()

    this.app.use(cookieParser())
    this.app.use(config.session)
    this.app.use(router)

    this.templateView()
    this.fileStatic()

  }

  templateView(){
    this.app.engine("html", swig.renderFile)
    this.app.set("view engine", "html")
    this.app.set("views", path.join(__dirname, "..", "views"))
  }

  bodyPost(){
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
  }

  fileStatic(){
    this.app.use(express.static(path.join( __dirname, "..", "public" )))
  }

}

module.exports = App
