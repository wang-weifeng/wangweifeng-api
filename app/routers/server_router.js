var express = require('express');

var config = require('../../config/config');

var indexController = require('../controllers/index_controller');


var version = ['/v1','/test'];

var Router = {};

Router.configure = function(app){
	var router = express.Router();

	var baseName = config.app;



	router.get("*", indexController.home);

	app.use('/', router);
};
Router.version = version;
module.exports = Router;