var _ = require("underscore")._;
var async = require('async');
var xss = require('xss');

var msgCode = require('../../config/msg_code');
var logger = require('../../util/log4js_util');
var config = require('../../config/config');
var resKit = require('../../util/response_util');
var cipherUtil = require('../../util/cipher_util');
var mongooseProxy = require('../../proxy/mongoose_proxy');
var User = require('../../config/user');

var mongooseController = {};

/**
 * mongooses首页
 * @param req
 * @param res
 */
mongooseController.renderIndex = function(req,res){
    logger.info("renderIndex --> ");
    var renderResult = {title: msgCode.renderIndex.title};
    res.render("mongoose/index",renderResult);

};

/**
 * mongoose查询信息
 * @param req
 * @param res
 */
mongooseController.queryCheck = function(req,res){
    // var param = {};
    // User.find(param, function(err, result){
    //     if(err || _.isUndefined(result)){
    //         resKit.err(msgCode.queryCheck, res);
    //     } else {
    //         logger.info("queryCheck --> " + result);
    //         resKit.succes(result,res);
    //     }
    // });
    for(var i = 1; i <= 100; i++) {
        console.log("success " + i);
        mongooseProxy.queryCheck(function (err, result) {
            if (err || _.isUndefined(result)) {
                console.log("err");
            } else {
                console.log("success " + i);
            }
        });
    }
};


/**
 * mongoose增加信息
 * @param req
 * @param res
 */
mongooseController.queryInsert = function(req,res){
    var username  = xss(req.body.username );
    var userpwd = xss(req.body.userpwd);
    var userage = xss(req.body.userage);
    logger.info("queryInsert --> "
                + " username = " + username
                + " userpwd=" + userpwd
                + " userage=" + userage);

    var user = new User({
        username : username,                 //用户账号
        userpwd: userpwd,                    //密码
        userage: userage,                    //年龄
        logindate : new Date()               //最近登录时间
    });

    user.save(function (err, result) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("result:" + result);
            return res.json(result);
        }
    });
};

module.exports = mongooseController;
