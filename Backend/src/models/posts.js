const { text } = require('express')
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  date: {
    type: Date,
    minlength: 2,
    maxlength: 100,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 30,
    trim: true,
    required: true
  },
  name:{
      type:String,
      minlength: 2,
      maxlength:50,
      trim:true,
      required:true
  },
  picUrl:{
      type: String,
      trim: true,
      required:true,
  },
  savedPost:{
    type: Boolean,
  },
  tags:{
      type: Array,

  },
  text:{
    type: String,
    minlength: 10,
    maxlength: 5000,
  },
  title:{
      type: String,
      minlength:2,
      maxlength:50,
  }


})

const model = mongoose.model('posts', schema)

module.exports = model
