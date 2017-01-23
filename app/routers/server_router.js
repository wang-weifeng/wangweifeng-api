var express = require('express');

var config = require('../../config/config');

var indexController = require('../controllers/index_controller');
var mongooseController = require('../controllers/mongoose_controller');


var version = ['/v1','/test'];

var Router = {};

Router.configure = function(app){
	var router = express.Router();

	var baseName = config.app;

	/**查询信息ajax */
	router.get(baseName + version[0] +'/user/check',mongooseController.queryCheck);

	/**增加信息ajax */
	router.post(baseName + version[0] +'/user/insert',mongooseController.queryInsert);


	router.get("*", indexController.home);

	app.use('/', router);
};
Router.version = version;
module.exports = Router;