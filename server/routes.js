 var router = require('express').Router();
 var controller = require('../database-mongo/TrainerController.js');
 var bcrypt = require('bcrypt');
 var bodyParser = require('body-parser');
 var path = require('path');
 var mongoose = require('mongoose');


 router.use(bodyParser.json());
 router.use(bodyParser.urlencoded({ extended: true }));

//routes and handling requests.or we can use it direct in app page-index.js//

router.route('/').get(function(req, res) {
   res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
 });

 router.route('/newtrainer').get(function(req, res) {
   res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
 });

 router
   .route('/trainer').get(controller.retrieveOne).post(controller.createOne).put(controller.updateOne).delete(controller.delete);


 module.exports = router;
