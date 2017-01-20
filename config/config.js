var debug = false;
var app = "/wangweifeng-api";
var protocol = ["http://","https://","mongodb://"];
var port = "5108";
var lanHost = 'wangweifeng.cooliszhu.com';//TODO
var wanHost ='wangweifeng.cooliszhu.com';//TODO 上线后需要改成外网域名

var config = {
    app: app,
    debug: debug,
    description: 'Api',
    keywords: '',
    timeout: 15000,
    lanHost:lanHost,
    wanHost:wanHost,
    protocol:protocol,
    //域名
    host: debug ? lanHost : wanHost,
    // mongodb 配置
    db: debug ? protocol[2] + lanHost + app : protocol[2] + wanHost + app,
    db_name: 'wangweifeng-api',
    session_secret: 'wangweifeng_secret',
    auth_cookie_name: 'wangweifeng_auth_cookie',

    secretkey: 'wangweifeng-api',
    port: port
};

module.exports = config;
