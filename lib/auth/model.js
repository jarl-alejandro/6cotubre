'use strict'

const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name:String,
  lastName:String,
  email: { type: String, unique: true, lowercase: true },
	password:{ type:String },
  cedula:Number,
  type:String,
  course:String,
  parallel:String,
})

UserSchema.set('toJSON', {
	transform:function(doc, ret, options){
		ret.id = ret._id
		delete ret._id,
		delete ret.__v
	}
})

UserSchema.pre('save', function(next){
  let user = this
  if (!user.isModified('password')){
    return next()
  }

  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function(password, done){
  bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch)
  })
}


const User = mongoose.model("User", UserSchema)
module.exports = User
