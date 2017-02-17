var mongoose_index = {};

mongoose_index.init = function () {
    mongoose_index.bindEvent();
    mongoose_index.informationList();
};

mongoose_index.bindEvent = function () {
    $("#insertInformation").on('click',function () {
        window.location.href = project.namespace + '/v1/user/insert';
    });
};

mongoose_index.informationList = function () {
    $.get(project.namespace + '/v1/user/check',function (result) {
        mongoose_index.renderList(result);
    });
};

mongoose_index.renderList = function (result) {

};

$(function(){
    mongoose_index.init();
});
