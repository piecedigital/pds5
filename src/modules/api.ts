import * as express from "express";
import { Document, Types } from "mongoose";
import { getView } from "./render";
import Database from "./database";
import Store from "./store";
import { Project } from "../plugins/portfolio/portfolio.class";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { authorize } from "./auth";

const app = express();
let dbs: Database = null;
let store: Store = null;

app.post("/apply-theme", (req, res) => {
    authorize(req, dbs,
        /* pass */ () => {
            process.env["THEME"] = req.body.theme;
            var file = JSON.parse(readFileSync(join(__dirname, "../srv-config.json")).toString());

            file.theme = req.body.theme;

            writeFileSync(join(__dirname, "../srv-config.json"), JSON.stringify(file));

            res.redirect(req.headers.referer);
        },
        /* fail */ () => {
            res.status(401).send("401: Unauthorized Access");
        });
});

app.post("*", (req, res) => {
    res.status(404).send("404: Not Found");
});

export default function(db, str) {
    dbs = db;
    store = str;
    return app;
};