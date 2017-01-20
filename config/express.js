/**
 * Module dependencies
 */
var path = require('path');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');

var config = require('./config');
var router = require('../app/routers/server_router.js');

module.exports = function(){
	var app = express();

	app.set('/views', path.join(__dirname, '/views'));
	app.set('view engine', 'ejs');
	app.set('x-powered-by', false);

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(require('cookie-parser')(config.session_secret));
	app.use(session({
	    secret: config.session_secret,
	    name:'session-unicom',
	    //store: new MongoStore({url: config.db}),
	    resave: false,
	    saveUninitialized: true,
	    cookie: {maxAge: 1000 * 60 * 60 * 2}
	}));
	app.use(config.app + '/static', express.static('static'));



	// error handler
	if (config.debug) {

	} else {
		app.set('view cache', true);
		app.use(function (err, req, res, next) {
			return res.status(500).send('500 status');
		});
	}

	//配置路由
	router.configure(app);

	app.locals.app = config.app;

	return app;
};



