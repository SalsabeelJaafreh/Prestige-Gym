var mongoose = require('mongoose');
var Trainer = require('./index');


exports.createOne = function(req, res) {
	req.body.number = JSON.parse(req.body.number);
	var pInfo = req.body;
	var trainer = new Trainer(pInfo);
trainer.save(function(err,trainer) {
		if (err) {
			res.send('This number is already taken, choose another one');
		} else {
			res.send('welcome our new trainer *.*');
		}
	});
};

exports.updateOne = function(req, res) {
	Trainer.find({ number: req.body.number }, function(err, trainer) {
		if (err) {
			res.send(500);
		} 

		else {
			trainer.number = req.body.number;
			trainer.firstName = req.body.firstName;
			trainer.lastName = req.body.lastName;
			trainer.gender = req.body.gender;
			trainer.age = req.body.age;
			trainer.phone = req.body.phone;
			

			trainer.save(function(err, trainer) {
				if (err) {
					res.send(err);
				} else {
					res.send('Trainer info updated');
				}
			});
		}
	});
};


exports.delete = function(req, res) {
	Trainer.find({ number: req.body.number }, function(err, trainer) {
		if (err) {
			res.send(500);
		} else {
			trainer.remove(function(err, trainer) {
				if (err) {
					res.send(err);
				} else {
					res.send(' trainer deleted ');
				}
			});
		}
	});
};


exports.retrieveOne = function(req, res) {
	var number = req._parsedOriginalUrl.path.split('=')[1];
	Trainer.find({ number: number }, function(err, trainer) {
		if (err) {
			res.send(500);
		} else {
			res.send(trainer);
		}
	});
};


exports.retrieveAll = function(req, res) {
	Trainer.find(function(err, alltrainer) {
		if (err) {
			res.send(500);
		} else {
			res.send(alltrainer);
		}
	});
};
