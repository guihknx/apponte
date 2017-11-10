var mongoose = require("mongoose");

var Note = new mongoose.Schema({
  title: {
    type: String,
    index: true
  },
  content: {
    type: String,
    index: true
  }, 
  date: {
  	type: String,
  	default: +new Date 
  }
});


module.exports =  mongoose.model('Note', Note)