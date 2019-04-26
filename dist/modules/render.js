"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handlebars = require("handlebars");
var filter = require("handlebars.filter");
var content_handler_1 = require("../content-handler");
var helpers_1 = require("./helpers");
filter.registerFilter("currentTheme", function (data) {
    return data === process.env["THEME"] ? "checked" : "";
});
filter.registerFilter("json", function (data) {
    data = data || [];
    var placeholder = data.map ? [] : {};
    return JSON.stringify(data) || placeholder;
});
filter.registerFilter("joinTitle", function (data) {
    return data.join(", ");
});
filter.registerFilter("newLineTitle", function (data) {
    return data.join("<br />");
});
filter.registerHelper(handlebars);
var context = {};
function getView(url, options) {
    return new Promise(function (resolve, reject) {
        var result = "";
        var source = content_handler_1.HandlebarsHandler(url);
        // got through each query and swap parameter markers
        // swapParamMarkers(source);
        helpers_1.queryManyCollections(options.database, source.queryList)
            .then(function (dbData) {
            // console.log(dbData);
            var template = handlebars.compile(source.page);
            result = template(Object.assign(options.data || {}, source.params, dbData));
            resolve(result);
        })
            .catch(function (e) { return reject(e); });
    });
}
exports.getView = getView;
