import * as express from "express";
import * as uuid from "uuid/v1";
import Database from "../../modules/database";
import Store from "../../modules/store";
import { ProjectModel, Project } from "./project.class";
import { JobModel } from "./job.class";

const app = express();
let dbs: Database = null;
let store: Store = null;

function splitTheLines(str: string): string[] {
    let results = str.split(/\r\n/g);

    return results;
}

function keyify(arr: string[]): Record<string, any> {
    let results: Record<string, any> = {};

    arr.map(str => {

        const keyValSplit = str.split(/^(\w+):\s?/);
        if (!keyValSplit[0]) keyValSplit.shift();
        // console.log(str, keyValSplit);

        const key = keyValSplit[0];
        let vals = keyValSplit[1]
        if (vals) {
            vals = vals.replace(/^\s+/, "").replace(/\s+$/, "");
            results[key] = vals.split(/,\s?/);
        }
    });

    return results;
}

// PROJECT API
app.post("/pds5/add-project", (req, res) => {
    let order = 0;

    ProjectModel.find().sort({_id:-1}).limit(1)
        .then((doc) => {
            if (doc[0]) order = (<Project><object>doc[0]).order + 1;
        })
        .then(() => {
            const project = new ProjectModel({
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

            project.save((err) => {
                if (err) return console.error(err);
                console.log("project added");
                res.redirect(req.headers.referer);
            });
        })
        .catch(e => {
            res.redirect(req.headers.referer);
            console.error(e);
        });
});

app.post("/pds5/show-or-hide-project", (req, res) => {
    ProjectModel.updateOne({
        projectPK: req.body["projectPK"]
    }, {
        $set: {
            show: req.body["projectShow"]
        }
    }, (err, doc) => {
        if (err) {
            return console.error(err);
        }

        console.log("Project updated", doc);
    });
});

app.post("/pds5/remove-project", (req, res) => {
    console.log(req.body);
    ProjectModel.findOneAndRemove({
        projectPK: req.body.projectPK
    }, (err) => {
        if (err) return console.error(err);
        console.log("project removed");
        res.redirect(req.headers.referer);
    });
});

// JOB API
app.post("/pds5/add-job", (req, res) => {
    const job = new JobModel({
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

    job.save((err) => {
        if (err) return console.error(err);
        console.log("job added");
        res.redirect(req.headers.referer);
    });
});

app.post("/pds5/show-or-hide-job", (req, res) => {
    JobModel.updateOne({
        jobPK: req.body["jobPK"]
    }, {
        $set: {
            show: req.body["jobShow"]
        }
    }, (err, doc) => {
        if (err) {
            return console.error(err);
        }

        console.log("Job updated", doc);
    });
});

app.post("/pds5/remove-job", (req, res) => {
    // console.log(req.body);
    JobModel.findOneAndRemove({
        jobPK: req.body.jobPK
    }, (err, doc) => {
        if (err) return console.error(err);
        console.log("job removed", doc);
        res.redirect(req.headers.referer);
    });
});

export default function (db, str) {
    dbs = db;
    store = str;
    return app;
};
