"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var uuid = require("uuid/v1");
var project_class_1 = require("./project.class");
var job_class_1 = require("./job.class");
var auth_1 = require("../../modules/auth");
var app = express();
var dbs = null;
var store = null;
function splitTheLines(str) {
    var results = str.split(/\r\n/g);
    return results;
}
function keyify(arr) {
    var results = {};
    arr.map(function (str) {
        var keyValSplit = str.split(/^(\w+):\s?/);
        if (!keyValSplit[0])
            keyValSplit.shift();
        // console.log(str, keyValSplit);
        var key = keyValSplit[0];
        var vals = keyValSplit[1];
        if (vals) {
            vals = vals.replace(/^\s+/, "").replace(/\s+$/, "");
            results[key] = vals.split(/,\s?/);
        }
    });
    return results;
}
// PROJECT API
app.post("/pds5/add-project", function (req, res) {
    var order = 0;
    auth_1.authorize(req, dbs, 
    /* pass */ function () {
        project_class_1.ProjectModel.find().sort({ _id: -1 }).limit(1)
            .then(function (doc) {
            if (doc[0])
                order = doc[0].order + 1;
        })
            .then(function () {
            var project = new project_class_1.ProjectModel({
                projectPK: uuid(),
                show: true,
                projectName: req.body["projectName"].split(/,\s?/),
                refName: req.body["projectName"]
                    .split(/,\s?/)[0]
                    .replace(/\s/g, "_")
                    .replace(/[^a-zA-Z0-9_]/g, "")
                    .toLowerCase(),
                img: req.body["projectImage"] ? true : false,
                desc: splitTheLines(req.body["projectDescription"]),
                skillsApplied: keyify(splitTheLines(req.body["projectSkills"])),
                relatedLinks: splitTheLines(req.body["projectLinks"]),
                gallery: parseInt(req.body["projectGallery"]),
                order: parseInt(req.body["order"]) || order
            });
            project.save(function (err) {
                if (err)
                    return console.error(err);
                console.log("project added");
                res.redirect(req.headers.referer);
            });
        })
            .catch(function (e) {
            res.redirect(req.headers.referer);
            console.error(e);
        });
    }, 
    /* fail */ function () {
        res.status(401).send("401: Unauthorized Access");
    });
});
app.post("/pds5/show-or-hide-project", function (req, res) {
    auth_1.authorize(req, dbs, 
    /* pass */ function () {
        project_class_1.ProjectModel.updateOne({
            projectPK: req.body["projectPK"]
        }, {
            $set: {
                show: req.body["projectShow"]
            }
        }, function (err, doc) {
            if (err) {
                return console.error(err);
            }
            console.log("Project updated", doc);
        });
    }, 
    /* fail */ function () {
        res.status(401).send("401: Unauthorized Access");
    });
});
app.post("/pds5/remove-project", function (req, res) {
    auth_1.authorize(req, dbs, 
    /* pass */ function () {
        project_class_1.ProjectModel.findOneAndRemove({
            projectPK: req.body.projectPK
        }, function (err) {
            if (err)
                return console.error(err);
            console.log("project removed");
            res.redirect(req.headers.referer);
        });
    }, 
    /* fail */ function () {
        res.status(401).send("401: Unauthorized Access");
    });
});
// JOB API
app.post("/pds5/add-job", function (req, res) {
    auth_1.authorize(req, dbs, 
    /* pass */ function () {
        var job = new job_class_1.JobModel({
            jobPK: uuid(),
            show: true,
            jobTitle: req.body["jobTitle"],
            jobSite: req.body["jobSite"] || "",
            jobName: req.body["jobName"],
            jobStart: new Date(req.body["jobStartDate"]),
            jobEnd: req.body["jobIsCurrent"] === "true" ? new Date("5000") : new Date(req.body["jobStartDate"]),
            description: splitTheLines(req.body["jobDescription"]),
            jobTasks: splitTheLines(req.body["jobTasks"]),
        });
        job.save(function (err) {
            if (err)
                return console.error(err);
            console.log("job added");
            res.redirect(req.headers.referer);
        });
    }, 
    /* fail */ function () {
        res.status(401).send("401: Unauthorized Access");
    });
});
app.post("/pds5/show-or-hide-job", function (req, res) {
    auth_1.authorize(req, dbs, 
    /* pass */ function () {
        job_class_1.JobModel.updateOne({
            jobPK: req.body["jobPK"]
        }, {
            $set: {
                show: req.body["jobShow"]
            }
        }, function (err, doc) {
            if (err) {
                return console.error(err);
            }
            console.log("Job updated", doc);
        });
    }, 
    /* fail */ function () {
        res.status(401).send("401: Unauthorized Access");
    });
});
app.post("/pds5/remove-job", function (req, res) {
    auth_1.authorize(req, dbs, 
    /* pass */ function () {
        job_class_1.JobModel.findOneAndRemove({
            jobPK: req.body.jobPK
        }, function (err, doc) {
            if (err)
                return console.error(err);
            console.log("job removed", doc);
            res.redirect(req.headers.referer);
        });
    }, 
    /* fail */ function () {
        res.status(401).send("401: Unauthorized Access");
    });
});
function default_1(db, str) {
    dbs = db;
    store = str;
    return app;
}
exports.default = default_1;
;
