"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs_1 = require("fs");
var path_1 = require("path");
var auth_1 = require("./auth");
var app = express();
var dbs = null;
var store = null;
app.post("/apply-theme", function (req, res) {
    auth_1.authorize(req, dbs, 
    /* pass */ function () {
        process.env["THEME"] = req.body.theme;
        var file = JSON.parse(fs_1.readFileSync(path_1.join(__dirname, "../srv-config.json")).toString());
        file.theme = req.body.theme;
        fs_1.writeFileSync(path_1.join(__dirname, "../srv-config.json"), JSON.stringify(file));
        res.redirect(req.headers.referer);
    }, 
    /* fail */ function () {
        res.status(401).send("401: Unauthorized Access");
    });
});
app.post("*", function (req, res) {
    res.status(404).send("404: Not Found");
});
function default_1(db, str) {
    dbs = db;
    store = str;
    return app;
}
exports.default = default_1;
;
