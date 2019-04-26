import * as mongoose from "mongoose";
import {
    Model,
    model,
    Document,
    Schema,
} from "mongoose";

export class Job {
    jobPK: string;
    show?: boolean;
    jobTitle: string;
    jobSite?: string;
    jobName: string;
    jobStart: Date;
    jobEnd?: Date;
    jobDescription: string[];
    jobTasks: string[];

    constructor(
        jobPK: string,
        show: boolean,
        jobTitle: string,
        jobSite: string,
        jobName: string,
        jobStart: Date,
        jobEnd: Date,
        jobDescription: string[],
        jobTasks: string[]
    ) {
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
}

const JobSchema: Schema = new Schema({
    jobPK: { type: String, required: true },
    show: { type: Boolean, default: true },
    jobTitle: { type: String, required: true },
    jobSite: { type: String, default: "" },
    jobName: { type: String, required: true },
    jobStart: { type: Date, required: true },
    jobEnd: { type: Date, default: new Date(5000) },
    jobDescription: { type: [String], required: true},
    jobTasks: { type: [String], required: true},
}, { timestamps: true });

export const JobModel: Model<Document> = model("pds5-jobs", JobSchema);