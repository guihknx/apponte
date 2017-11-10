var express = require('express');
var Note = require('../models/note');
var app = module.exports = express();

app.get('/', function(req, res){
	res.render('index', {title:'Notes'});
});

app.get('/notes', function(req, res){
	Note.find({}, function (err, notes) {
		if( err ) return res.status(500);

		res.status(200).json(notes);
	})
});

app.get('/note/:id', function(req, res){


	Note.find({}, function (err, notes) {
		if( err ) return res.status(500);

		res.status(200).json(notes);
	})
});

app.put('/note', function(req, res){
	var editedNote = req.body.data;
	Note.findById(editedNote._id, function (err, note) {
		if( err ) return res.status(500);

		note.title = editedNote.title;
		note.content = editedNote.content;

		note.save(function(err, resp){
			if( err ) return res.status(500);

			res.status(200).json({success: true});
		})
	})
});

app.post('/note', function(req, res){
	var note = req.body.data;

	var newNote = new Note({ 
		title: note.title, 
		content: note.content,
		date: +new Date 
	});

	newNote.save(function (err) {
	  if (err) return res.status(500);

		res.status(201).json({success: true});
	});
});

app.delete('/note/:id', function(req, res){
	var note = req.params;

	Note.findById(note.id, function (err, note) {
		if( err ) return res.status(500);
		note.remove(function(err, resp){
			if( err ) return res.status(500);

			res.status(200).json({success: true});
		})
	})
});
