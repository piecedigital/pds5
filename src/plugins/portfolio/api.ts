/*
THIS CODE IS REQUIRED
DO NOT REMOVE
*/
import * as express from "express";
import Database from "../../modules/database";
import Store from "../../modules/store";
import { ProjectModel } from "./portfolio.class";
import * as uuid from "uuid/v1";
import { authorize } from "../../modules/auth";

const app = express();
let dbs: Database = null;
let store: Store = null;
// END REQUIRED CODE

/*
ADD YOUR CUSTOM ROUTES HERE
*/
// Portfolio API
app.post("/add-project", (req, res) => {
    authorize(req, dbs,
        /* pass */ () => {
            const project = new ProjectModel({
                projectPK: uuid(),
                name: req.body["name"],
                description: req.body["description"],
                projectURL: req.body["project-url"],
            });

            project.save((err) => {
                if (err) return console.error(err);
                console.log("project added");
                res.redirect(req.headers.referer);
            });
        },
        /* fail */ () => {
            res.status(401).send("401: Unauthorized Access");
        });
});

app.post("/remove-project", (req, res) => {
    authorize(req, dbs,
        /* pass */ () => {
            dbs.dbs.collection("portfolios").remove({
                projectPK: req.body.projectPK
            }, (err) => {
                if (err) return console.error(err);
                console.log("project removed");
                res.redirect(req.headers.referer);
            });
        },
        /* fail */ () => {
            res.status(401).send("401: Unauthorized Access");
        });
});
// END CUSTOM ROUTES

/*
THIS CODE IS REQUIRED
DO NOT REMOVE
*/
export default function (db, str) {
    dbs = db;
    store = str;
    return app;
};
// END REQUIRED CODE
