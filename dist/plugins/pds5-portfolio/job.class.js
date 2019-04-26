"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Job = /** @class */ (function () {
    function Job(jobPK, show, jobTitle, jobSite, jobName, jobStart, jobEnd, jobDescription, jobTasks) {
        this.jobPK = jobPK;
        this.show = show;
        this.jobTitle = jobTitle;
        this.jobSite = jobSite;
        this.jobName = jobName;
        this.jobStart = jobStart;
        this.jobEnd = jobEnd;
        this.jobDescription = jobDescription;
        this.jobTasks = jobTasks;
    }
    return Job;
}());
exports.Job = Job;
var JobSchema = new mongoose_1.Schema({
    jobPK: { type: String, required: true },
    show: { type: Boolean, default: true },
    jobTitle: { type: String, required: true },
    jobSite: { type: String, default: "" },
    jobName: { type: String, required: true },
    jobStart: { type: Date, required: true },
    jobEnd: { type: Date, default: new Date(5000) },
    jobDescription: { type: [String], required: true },
    jobTasks: { type: [String], required: true },
}, { timestamps: true });
exports.JobModel = mongoose_1.model("pds5-jobs", JobSchema);
