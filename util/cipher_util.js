var crypto = require('crypto');

var algs = ['aes-256-cbc','blowfish','cast','des','des3','idea','rc2','rc4','seed'];
var keySuffix = "wangweifeng";

var cipherUtil = {
    algs:algs[0]
};

//加密-异步
cipherUtil.cipher = function(algorithm, keyPreffix, buf ,cb){
    var key = keyPreffix + keySuffix;
    var encrypted = "";
    var cip = crypto.createCipher(algorithm, key);
    encrypted += cip.update(buf, 'binary', 'hex');
    encrypted += cip.final('hex');
    cb(encrypted);
}

//解密-异步
cipherUtil.decipher = function(algorithm, keyPreffix, encrypted,cb){
    var key = keyPreffix + keySuffix;
    var decrypted = "";
    var decipher = crypto.createDecipher(algorithm, key);
    decrypted += decipher.update(encrypted, 'hex', 'binary');
    decrypted += decipher.final('binary');
    cb(decrypted);
}

//加密-同步
cipherUtil.cipherSync = function(algorithm, keyPreffix, buf){
    var key = keyPreffix + keySuffix;
    var encrypted = "";
    var cip = crypto.createCipher(algorithm, key);
    encrypted += cip.update(buf, 'binary', 'hex');
    encrypted += cip.final('hex');
    return encrypted;
}

//解密-同步
cipherUtil.decipherSync = function(algorithm, keyPreffix, encrypted){
    var key = keyPreffix + keySuffix;
    var decrypted = "";
    var decipher = crypto.createDecipher(algorithm, key);
    decrypted += decipher.update(encrypted, 'hex', 'binary');
    decrypted += decipher.final('binary');
    return decrypted;
}

module.exports = cipherUtil;












