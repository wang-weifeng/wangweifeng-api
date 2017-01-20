var logger = require("./log4js_util");
/**
 *
 * @param data
 * @param status
 * @constructor
 */
var resKit = {};

resKit.err = function (data, res) {
    var param = {status: data.status, errMsg: data.errMsg};
    logger.error("resKit <--" + " err: " + JSON.stringify(param));
    res.send(param);
    res.end();
    return;
};

resKit.succes = function (data, res) {
    var param = {status: 200, data: data};
    logger.info("resKit <-- " + " succes: " + JSON.stringify(param));
    res.send(param);
    res.end();
    return;
};

module.exports = resKit;