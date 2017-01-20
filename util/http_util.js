var request = require('request');

var logger = require("./log4js_util");
var config = require('../config/config');

var headers = {
    'User-Agent': 'request-wap-oauth',
    'X_HPZ_APPLICATION_ID': 'wwf',
    'Content-Type': 'application/json'
};
/**
 * get请求
 * @param url 请求的url地址
 * @param callback 回调函数
 */
exports.get = function (url, callback) {
    logger.info("request-get-url: " + url);
    var options = {
        url: url,
        method: 'GET',
        headers: headers,
        json: true,
        timeout: config.timeout
    };
    request(options, function (error, response, content) {
        if (!error && response.statusCode == 200) {
            logger.info("http_util <-- get " + JSON.stringify(content));
            callback(error, response, content);
        } else {
            logger.error("request-get-url-error: " + error + " url:" + url);
            callback(error);
        }
    });
};
/**
 * post 请求
 * @param url url地址
 * @param params 请求参数
 * @param callback 回调函数
 */
exports.post = function (url, params, callback) {
    logger.info("request-post-url: " + url);
    logger.info("request-post-params: " + JSON.stringify(params));
    var options = {
        url: url,
        method: 'POST',
        json: true,
        body: params,
        headers: headers,
        timeout: config.timeout
    };
    request(options, function (error, response, content) {
        if (!error && response.statusCode == 200) {
            logger.info("http_util <-- " + " post: " + JSON.stringify(content));
            callback(error, response, content);
        } else {
            logger.error("request-post-error: " + error + " url:" + url);
            callback(error);
        }
    });
};
/**
 * POST表单提交
 * @param url
 * @param params
 * @param callback
 */
exports.postForm = function (url, params, callback) {
    logger.info("request-postFrom-url: " + url);
    logger.info("request-postFrom-params: " + JSON.stringify(params));
    var options = {
        url: url,
        method: 'POST',
        json: true,
        form: params,
        headers: headers,
        timeout: config.timeout
    };
    request(options, function (error, response, content) {
        if (!error && response.statusCode == 200) {
            logger.info("http_util <-- " + " postForm: " + JSON.stringify(content));
            callback(error, response, content);
        } else {
            logger.error("request-postFrom-error: " + error + " url:" + url);
            callback(error);
        }
    });
};