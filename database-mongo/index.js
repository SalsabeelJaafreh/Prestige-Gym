var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Trainer');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});
db.once('open', function() {
  console.log('mongoose connected successfully');
});


var trainerSchema = mongoose.Schema({
  number: { type: Number, unique: true },
  firstName: String,
  lastName: String,
  gender: String,
  age: Number,
  phone: Number 
});

var Trainer = mongoose.model('Trainer', trainerSchema);

var selectAll = function(callback) {
 Trainer.find({}, function(err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, Trainer);
    }
  });
};

var save = function(trainerInstance) {
  trainerInstance.save(function(err,trainer) {
    if (err) {
      alert(`error in saving`);
    } else {
      alert(`trainer saved`);
    }
  });
};




module.exports = Trainer;
module.exports.selectAll = selectAll;
module.exports.save = save;
