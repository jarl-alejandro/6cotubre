'use strict'

const http = require('http')
const session = require('express-session')
const mongoose = require("mongoose")
const redis = require('redis')
const RedisStore = require('connect-redis')(session)

const App = require('./lib')

const port = process.env.PORT || 3000
const server = http.createServer()
const redisClient = redis.createClient()
const redisStore = new RedisStore({ client:redisClient })
const db = "mongodb://localhost/6octubre"

mongoose.connect(db, onDBListening)

const sessionMiddleware = session({
	 store: redisStore,
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
})

const octubre = new App({ session:sessionMiddleware })

server.on("request", octubre.app)
server.on("listening", onListening)

server.listen(port)

function onListening(){
  console.log(`Server running in http://localhost:${ port }`)
}

function onDBListening(err){
	if(err)
		console.log(`ERROR: on connecting to database, ${err}`)
	else
		console.log(`Connection established to Database`)

}
