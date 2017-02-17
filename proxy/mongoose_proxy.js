var httpUtil = require('../util/http_util');
var apis = require('../config/apis');
var msgCode = require('../config/msg_code');

var mongooseProxy = {};

/**
 * mongooseProxy
 * @param param
 * @param callback
 */
mongooseProxy.queryCheck = function (callback) {
    httpUtil.get("http://www.wangweifengwz.cn/devices/%E5%8D%97%E4%BA%AC",function(err,res,content){
        if(!err){
            callback(null,content);
        }else{
            callback("err");
        }

    });
};




module.exports = mongooseProxy;